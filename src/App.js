import React from 'react';
import './App.css';

import Posts from './components/Post';
import Postform from './components/Postform';

function App() {
  return (
    <div className="App">
      <header />
      <Postform />
      <hr />
      <Posts />
    </div>
  );
}

export default App;
