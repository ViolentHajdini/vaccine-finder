export const ADD_APPOINTMENT = "ADD_APPOINTMENT"

const initialState = {
  vaccine: "",
  vaccinationSite: "",
  vaccinationSiteNumber: "",
  hasAppointmentScheduled: false,
}

// reducers
function vaccineReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_APPOINTMENT:

      let newState = {
        ...state, 
        ...action.appointment,
        hasAppointmentScheduled: true
      }

      return newState
    
    default:
      return state
  }
}

export default vaccineReducer