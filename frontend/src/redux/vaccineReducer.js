export const VACCINE_REQUEST = "VACCINE_REQUEST"
export const VACCINE_REQUEST_SUCCESS = "VACCINE_REQUEST_SUCCESS"
export const VACCINE_REQUEST_FAIL = "VACCINE_REQUEST_FAIL"

const initialState = {
    loading: false,
    vaccineData: [],
    error: ""
}

function vaccineReducer(state = initialState, action) {
    switch (action.type) {
        case VACCINE_REQUEST:
            return Object.assign({}, state, {
                loading: true
            })

        case VACCINE_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                vaccineData: action.payload
            })

        case VACCINE_REQUEST_FAIL:
            return Object.assign({}, state, {
                loading: false,
                error: action.payload
            })

        default:
            return state
    }
}

export default vaccineReducer