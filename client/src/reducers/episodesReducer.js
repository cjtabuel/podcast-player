// Default value for mediaReducer
const mediaReducerDefaultState = []

// Media Reducer - Application state
const episodesReducer = (state = mediaReducerDefaultState, action) => {
  switch (action.type) {
    case 'FETCH_EPISODES':
      return action.episodes
    default:
      return state
  }
}

export default episodesReducer