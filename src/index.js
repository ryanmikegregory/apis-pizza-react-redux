import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// String
// let x = 'Delivery';
// x = action.payload
const typeReducer = (state = '', action) => {
  if (action.type === 'SET_ORDER_TYPE') {
    return action.payload;
  } else if (action.type === 'CLEAR_ORDER_TYPE') {
    return '';
  }

  return state;
};

// Object
/*
{
  fname: STRING,
  lname: STRING,
  address: STRING
}
*/
const customerReducer = (state = {}, action) => {
  if (action.type === 'SET_CUSTOMER_INFO') {
    return action.payload;
  } else if (action.type === 'CLEAR_CUSTOMER_INFO') {
    return {};
  }

  return state;
};

// Array
const pizzaReducer = (state = [], action) => {
  if (action.type === 'SET_PIZZA_ORDER') {
    return action.payload;
  } else if (action.type === 'CLEAR_PIZZA_ORDER') {
    return [];
  }

  return state;
};

const storeInstance = createStore(
  combineReducers({
    typeReducer,
    customerReducer,
    pizzaReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// what does a pizza need?
// size STRING
// topping STRING

/*
[
  {
    size: STRING,
    topping: STRING
  },
  {
    size: STRING,
    topping: STRING
  },
  {
    size: STRING,
    topping: STRING
  },
]
*/
