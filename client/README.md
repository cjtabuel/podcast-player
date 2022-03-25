# ON START #

## In terminal
  CD into client application folder and run `npm i` then run`npm start`
  CD into client api folder (i.e, recruitment-assignment-frontend-master) and run `npm i` then run`npm start`

## In file directory
  Right click client application folder and run `npm i` then run`npm start`
  Right click client api folder (i.e, recruitment-assignment-frontend-master) and run `npm i` then run`npm start`

client app - directory
  # actions
    # episodes
  # components
    # Acast
    # AcastPodCastContentDisplay
    # AcastPodCastMediaController
    # AcastPodcastPlayer
  # reducers
    # episodesReducer
  # selectors
    # selectAdMarkersFromShortaudio
    # selectNonAdMarkersFromShortaudio
  # store
    # configureStore

# actions # episodes

episodes.js is responsible for fetching data from the server and dispatching actions to the reducer

# components
  # Acast.js

This component is responsible for providing the application with the <AudioPlayerProvider> and dispatching the initial fetch call to the server.

# components
  # AcastPodcastContentDisplay

AcastPodcastContentDisplay is responsible for rendering the content, images, and advertisement buttons on the podcast

# components
  # AcastPodcastMediaController

AcastPodcastMediaController handles the media playback functionality of the podcast (e.g, play, pause, forward, rewind, scrubbing).

# components
  # AcastPodcastPlayer

AcastPodcastPlayer is the parent component which loads audio files using the <AudioPlayerProvider> and renders the child components while supplying them with appropriate props.

# reducers
  # episodesReducer

episodesReducer determines what data Redux while provide to the application State based on the action it receives (e.g, 'FETCH_EPISODES').

# selectors
  # selectAdMarkersFromShortaudio

selectAdMarkersFromShortaudio is a function which returns an object containing data regarding ads at specific time frames throughout the audio file playback.

# selectors
  # selectNonAdMarkersFromShortaudio

selectNonAdMarkersFromShortaudio is a function which returns an object containing data regarding non-ad specific timeframes throughout the audio file playback

# store
  # configureStore

configureStore is where the application State is stored. This is accessible throughout the whole application with specific functions (i.e, useSelector)
