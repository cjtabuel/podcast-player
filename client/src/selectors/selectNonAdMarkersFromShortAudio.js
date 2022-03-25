const selectNonAdMarkersFromShortAudio = (selectEpisodes, position) => {
  const getNonAdMarkersFromShortAudio = selectEpisodes[0].markers
    .filter(({ type }) => type !== 'ad')
    .map((i) => {
      const episodeNonAdKeys = ['type', 'start', 'duration', 'content', 'link']
      return episodeNonAdKeys.map((j) => {
        return i[j]
      })
    })

  const [c, d] = getNonAdMarkersFromShortAudio
  const [markerTypeC, markerAdStartC, markerDurationC, markerContentC, markerLinkC] = c
  const [markerTypeD, markerAdStartD, markerDurationD, markerContentD, markerLinkD] = d

  const isPositionAtFirstNonAd = (position >= markerAdStartC) && (position < markerAdStartC + markerDurationC)
  const isPositionAtSecondNonAd = (position >= markerAdStartD) && (position <= markerAdStartD + markerDurationD)

  const nonAdMarkersFromShortAudio = {
    isPositionAtFirstNonAd,
    isPositionAtSecondNonAd,
    markerContentC,
    markerContentD,
    markerLinkC,
    markerLinkD,
  }

  return nonAdMarkersFromShortAudio
}

export default selectNonAdMarkersFromShortAudio