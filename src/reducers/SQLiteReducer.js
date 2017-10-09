import { INSERTING_DATA, INSERTING_DATA_SUCCESS, INSERTING_DATA_FAILURE,DELETING_DATA,GET_NAME } from '../constants'

const initialState = {
    data: [],
    dataInserted: false,
    isInserting: false,
    isDone  : false,
    error: false
}

export default function SQLiteReducer(state = initialState, action){
    switch (action.type) {
        case INSERTING_DATA:
          return {
            ...state,
            data: action.data,
            isInserting : true
          }
          case DELETING_DATA:
          return {
            ...state,
            data : action.data,
            isDone : true
          }
        case GET_NAME :
          return{
            ...state,
            data : action.name
          }
        case INSERTING_DATA_SUCCESS:
          return {
            ...state,
            isInserting: false,
            dataInserted : true,
            data: action.data
          }
        case INSERTING_DATA_FAILURE:
          return {
            ...state,
            isFetching: false,
            dataInserted : false,
            error: true
          }
        default:
          return state
      }
}