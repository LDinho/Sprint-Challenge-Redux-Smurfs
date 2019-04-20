/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
import axios from 'axios';

export const FETCHING_SMURFS = "fetching_smurfs";
export const FETCHING_SMURFS_SUCCESS = "fetching_smurfs_success";
export const FETCHING_SMURFS_FAILURE = "fetching_smurfs_failure";

export const getSmurfs = () => (dispatch) => {
  dispatch({ type: FETCHING_SMURFS });

  const request = axios.get(`http://localhost:3333/smurfs`);

  return request.then(({ data }) => {
    console.log('AXIOS-GET-RES:', data);
    dispatch({type: FETCHING_SMURFS_SUCCESS, payload: data.results});
  })
    .catch(err => {
      dispatch({type: FETCHING_SMURFS_FAILURE, error: err});
    });
};

// export const ADDING_SMURF = "adding_smurf";
// export const ADDING_SMURF_SUCCESS = "adding_smurf_success";
//
// export const addSmurf = () => (dispatch) => {
//   dispatch({ type: ADDING_SMURF });
//
// }

