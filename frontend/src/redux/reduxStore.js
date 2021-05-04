import { createStore, combineReducers } from "redux"
import userReducer from "./userReducer"
import vaccineReducer from "./vaccineReducer"
import appointmentReducer from './appointmentReducer'
import { addUser, removeUser } from "./userReducer"

const reducers = combineReducers({userReducer, vaccineReducer, appointmentReducer})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store