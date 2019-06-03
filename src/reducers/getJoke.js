import { GET_JOKE } from "../actions/getJoke"

const defaultState = []

export default function (state = defaultState, action) {
  switch (action.type) {
    case GET_JOKE:
      return action.payload[0]

    default:
      return state
  }
}