const selectAdMarkersFromShortaudio = (selectEpisodes, position) => {
  const getAdMarkersFromShortAudio = selectEpisodes[0].markers
    .filter(({ type }) => type === 'ad')
    .map((i) => {
      const episodeAdKeys = ['type', 'start', 'duration', 'content', 'link']
      return episodeAdKeys.map((j) => {
        return i[j]
      })
    })

  let [a, b] = getAdMarkersFromShortAudio
  let [markerTypeA, markerAdStartA, markerDurationA, markerContentA, markerLinkA] = a
  let [markerTypeB, markerAdStartB, markerDurationB, markerContentB, markerLinkB] = b

  const isPositionAtFirstAd = (position >= markerAdStartA) && (position <= markerAdStartA + markerDurationA)
  const isPositionAtSecondAd = (position >= markerAdStartB) && (position <= markerAdStartB + markerDurationB)

  const adMarkersFromShortAudio = {
    isPositionAtFirstAd,
    isPositionAtSecondAd,
    markerContentA,
    markerLinkA,
    markerContentB,
    markerLinkB,
  }

  return adMarkersFromShortAudio
}

export default selectAdMarkersFromShortaudio