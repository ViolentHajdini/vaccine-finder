// action types
export const ADD_USER = "ADD_USER"
export const REMOVE_USER = "REMOVE_USER"

const initialState = {
  isLoggedIn: false,
  name: "",
  surname: "",
  email: "",
}

// reducers
function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return Object.assign({}, state, {
        isLoggedIn: true,
        email: action.user.email,
        name: action.user.name,
      })

    case REMOVE_USER:
      return Object.assign({}, state, {
        isLoggedIn: false,
        email: "",
      })
    // if the action is not recognized, don't do anything
    default:
      return state
  }
}

export default userReducer