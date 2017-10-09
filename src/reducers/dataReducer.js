import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants'
const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  isDone : false,
  error: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA:
    console.log("action payload"+action.payload);
      return {
        ...state,
        data: action.payload,
        isFetching: true
      }
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}