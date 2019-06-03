import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
        <div>
          <Route path='/' exact component={EventsListContainer} />
          <Route path='/login' exact component={LoginFormContainer} />
          <Route path='/signup' exact component={SignupFormContainer} />
          <Route path='/events/:id' exact component={EventDetailsContainer} />
          <Route path='/events/:eId/tickets/:tId' exact component={TicketDetailsContainer} />
        </div>
      </Provider>
  );
}

export default App;
