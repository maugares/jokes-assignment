export const GET_JOKE = "GET_JOKE"

export const getJoke = () => (dispatch) => {
  return fetch("https://official-joke-api.appspot.com/jokes/programming/random")
    .then(response => response.json())
    .then(response => {
      dispatch(
        {
          type: GET_JOKE,
          payload: response
        }
      )
    })
    .catch((error) => console.error(error))
}