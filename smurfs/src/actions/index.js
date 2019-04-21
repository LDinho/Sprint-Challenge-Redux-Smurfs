import axios from 'axios';

export const FETCHING_SMURFS = "fetching_smurfs";
export const FETCHING_SMURFS_SUCCESS = "fetching_smurfs_success";
export const FETCHING_SMURFS_FAILURE = "fetching_smurfs_failure";

export const getSmurfs = () => (dispatch) => {
  dispatch({ type: FETCHING_SMURFS });

  const request = axios.get(`http://localhost:3333/smurfs`);

  return request.then(({ data }) => {
    dispatch({type: FETCHING_SMURFS_SUCCESS, payload: data});
  })
    .catch(err => {
      dispatch({type: FETCHING_SMURFS_FAILURE, error: err});
    });
};

// export const ADDING_SMURF = "adding_smurf";
export const ADDING_SMURF_SUCCESS = "adding_smurf_success";
export const ADDING_SMURF_FAILURE = "adding_smurf_failure";

export const addSmurf = (newSmurf) => (dispatch) => {
  // dispatch({ type: ADDING_SMURF });

  const request = axios.post(
    `http://localhost:3333/smurfs`,
    newSmurf
  );

  return request.then(({data}) => {
    dispatch({type: ADDING_SMURF_SUCCESS, payload: data});
  })
    .catch(err => {
      dispatch({type: ADDING_SMURF_FAILURE, error: err});
    });
};

export const DELETING_SMURF_SUCCESS = "deleting_smurf_success";
export const DELETING_SMURF_FAILURE = "deleting_smurf_failure";

export const deleteSmurf = (smurfId) => (dispatch) => {
  const request = axios.delete(
    `http://localhost:3333/smurfs/${smurfId}`);

  return request.then(({data}) => {
    dispatch({type: DELETING_SMURF_SUCCESS, payload: data});
  })
    .catch(err => {
      dispatch({type: DELETING_SMURF_FAILURE, error: err});
    });
};

export const UPDATING_SMURF = "updating_smurf";

export const updatingSmurf = (smurfId) => (dispatch) => {
  dispatch({type: UPDATING_SMURF, payload: smurfId});

};

export const UPDATING_SMURF_SUCCESS = "updating_smurf_success";
export const UPDATING_SMURF_FAILURE = "updating_smurf_failure";

export const saveUpdatedSmurf = (updatedSmurf) => (dispatch) => {
  const request = axios.put(
    `http://localhost:3333/smurfs/${updatedSmurf.id}`, updatedSmurf);

  return request.then((res) => {
    console.log('UPDATE RESPONSE:', res);
    dispatch({type: UPDATING_SMURF_SUCCESS, payload: res.data});
  })
    .catch(err => {
      dispatch({type: UPDATING_SMURF_FAILURE, error: err});
    });
};
