import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log('fetch posts reducer called');
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      console.log('new post reducer called');
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
