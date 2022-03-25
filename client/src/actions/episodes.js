const fetchEpisodesFromAPI = (episodes) => ({
  type: 'FETCH_EPISODES',
  episodes
})

const startFetchEpisodesFromAPI = () => {
  return (dispatch) => {
    return fetch('/episodes')
      .then((res) => res.json())
      .then(data => {
        dispatch(fetchEpisodesFromAPI(data))
      })
  }
}

export {
  fetchEpisodesFromAPI,
  startFetchEpisodesFromAPI
}