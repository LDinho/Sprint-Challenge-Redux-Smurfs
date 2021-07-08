import {
  FETCHING_SMURFS,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILURE,
  ADDING_SMURF,
  ADDING_SMURF_SUCCESS,
  ADDING_SMURF_FAILURE,
  DELETING_SMURF_SUCCESS,
  DELETING_SMURF_FAILURE,
  UPDATING_SMURF,
  UPDATING_SMURF_SUCCESS,
  UPDATING_SMURF_FAILURE,
} from "../actions";

const initialState = {
  smurfs: [],
  isLoading: false,
  error: null,
  addingSmurf: false,
  deletingSmurf: false,
  smurfInEditMode: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {
        ...state,
        isLoading: true,
      };
    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        smurfs: action.payload,
      };
    case FETCHING_SMURFS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case ADDING_SMURF:
      return {
        ...state,
        addingSmurf: true,
    };
    case ADDING_SMURF_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        error: null,
        smurfs: action.payload,
      };
    case ADDING_SMURF_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload,
      };
    case DELETING_SMURF_SUCCESS:
      return {
        ...state,
        deletingSmurf: true,
        error: null,
        smurfs: action.payload,
      };
    case DELETING_SMURF_FAILURE:
      return {
        ...state,
        deletingSmurf: false,
        error: action.payload,
      };
    case UPDATING_SMURF:
      return {
        ...state,
        smurfInEditMode: action.payload,
      };
    case UPDATING_SMURF_SUCCESS:
      return {
        ...state,
        error: null,
        smurfInEditMode: null,
        smurfs: action.payload,
      };
    case UPDATING_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
