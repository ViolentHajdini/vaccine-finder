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
        vaccine: action.appointment.vaccine,
        vaccinationSite: action.appointment.name,
        vaccinationSiteNumber: action.appointment.phoneNumber,
        hasAppointmentScheduled: true
      }
      return newState
      // console.log('action appz', action.appointment.vaccine, action.appointment.name, action.appointment.phoneNumber)
      // return Object.assign({}, state, {
      //   vaccine: action.appointment.vaccine,
      //   vaccinationSite: action.appointment.name,
      //   vaccinationSiteNumber: action.appointment.phoneNumber,
      //   hasAppointmentScheduled: true
      // })
    
    // if the action is not recognized, don't do anything
    default:
      return state
  }
}

export default vaccineReducer