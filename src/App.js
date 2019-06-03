import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import JokesContainer from './components/JokesContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="main-box">
        <Route path="/" component={JokesContainer} />
        {/* <button onClick={}>Next</button> */}
      </div>
    </Provider>
  );
}

export default App;