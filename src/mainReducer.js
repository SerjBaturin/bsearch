const initialState = 0

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return state += 1
    case "DECREASE":
      return state -= 1
    default:
      return state
  }
}

export default mainReducer