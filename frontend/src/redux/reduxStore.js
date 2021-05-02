import { createStore, combineReducers } from "redux"
import userReducer from "./userReducer"
import { addUser, removeUser } from "./userReducer"

// const reducers = combineReducers({userReducer, ...})
const reducers = userReducer

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store