import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
  console.log('fetching');
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: FETCH_POSTS,
        payload: data
      })
    );
};
