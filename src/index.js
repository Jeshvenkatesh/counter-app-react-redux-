import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState = {
  totalCount: 100,
  totLikes:0,
  totDislikes : 0
}
const mainReducer = ( prevState = initialState, action )=>{
  if(action.type === 'INCRE_BY_ONE'){
    const updateVal = prevState.totalCount + 1;
    return{...prevState, totalCount: updateVal}
  }else if(action.type === 'DECRE_BY_ONE'){
    const updateVal = prevState.totalCount - 1;
    return{...prevState, totalCount: updateVal}
}else if(action.type === 'INCRE_BY_FIFTY'){
  const updateVal = prevState.totalCount + 50;
  return{...prevState, totalCount: updateVal}
}else if(action.type === 'DECRE_BY_FIFTY'){
  const updateVal = prevState.totalCount - 50;
  return{...prevState, totalCount: updateVal}
}
return {...prevState}
}
const globalStore = createStore(mainReducer);

ReactDOM.render(
  <React.StrictMode>
   <Provider store={globalStore}> <App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
