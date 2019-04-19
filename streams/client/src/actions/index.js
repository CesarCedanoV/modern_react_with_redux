import history from '../history';
import streamsAPI from '../apis/streams';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  UPDATE_STREAM,
  DELETE_STREAM
} from './types';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streamsAPI.post('/streams',{...formValues, userId});

  dispatch({ type:CREATE_STREAM, payload:response.data});
  history.push('/')
};

export const fetchStreams = () => async dispatch => {
  const response = await streamsAPI.get('/streams');

  dispatch({type:FETCH_STREAMS, payload:response.data})
};


export const fetchStream = streamId => async dispatch => {
  const response = await streamsAPI.get(`/streams/${streamId}`);

  dispatch({type:FETCH_STREAM, payload:response.data})
};

export const updateStream = (streamId, formValues) => async dispatch => {
  const response = await streamsAPI.patch(`/streams/${streamId}`,formValues);

  dispatch({type:UPDATE_STREAM, payload:response.data})
  history.push('/');
};

export const deleteStream = streamId => async dispatch => {
  await streamsAPI.delete(`/streams/${streamId}`);

  dispatch({type:DELETE_STREAM, payload:streamId})
  history.push('/');
};