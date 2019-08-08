import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
  console.log('fetch posts action called');
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: FETCH_POSTS,
        payload: data
      })
    );
};

export const createPost = postData => dispatch => {
  console.log('create post action called');
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};
