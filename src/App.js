import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Test</h1>
      </div>
    </Provider>
  );
}

export default App;
