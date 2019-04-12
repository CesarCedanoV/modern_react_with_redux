import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(userId => dispatch(fetchUsers(userId)))
    .value();
};

export const fetchPosts =  () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch( {type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUsers = (userId) => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${userId}`);

  dispatch({type:'FETCH_USERS', payload: response.data});
};


// Action Creator with Memoize to 
// export const fetchUsers = userId => dispatch => _fetchUser(userId, dispatch);
// const _fetchUser = _.memoize(async (userId, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${userId}`);

//   dispatch({type:'FETCH_USERS', payload: response.data});
// });