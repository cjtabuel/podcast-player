import React, { useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
// imported actions
import { startFetchEpisodesFromAPI } from '../actions/episodes'
// imported components
import { AcastPodcastPlayer } from './AcastPodcastPlayer'
// react-use-audio provider wrapper
import { AudioPlayerProvider } from 'react-use-audio-player'

const Acast = () => {
  const dispatch = useDispatch()

  // initalizes fetching data from API within redux thunk
  const onStartFetchEpisodesFromAPI = useCallback(() => dispatch(startFetchEpisodesFromAPI()))

  useEffect(() => {
    onStartFetchEpisodesFromAPI()
  }, [])

  return (
    <AudioPlayerProvider>
      <AcastPodcastPlayer />
    </AudioPlayerProvider>
  )
}

export { Acast }

