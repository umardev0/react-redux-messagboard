import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/Post';
import Postform from './components/Postform';

import store from './store.js';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header />
        <Postform />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
