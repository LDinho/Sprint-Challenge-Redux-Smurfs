/*
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

import {
  FETCHING_SMURFS,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILURE,
  ADDING_SMURF_SUCCESS,
  ADDING_SMURF_FAILURE,
} from "../actions";

const initialState = {
  smurfs: [],
  isLoading: false,
  error: '',
  addingSmurf: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
      };
    case FETCHING_SMURFS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case ADDING_SMURF_SUCCESS:
      return {
        ...state,
        addingSmurf: true,
        smurfs: action.payload,
      };
      case ADDING_SMURF_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
