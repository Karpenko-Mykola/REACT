import store from './redux/state.js'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';


let reranderEntireTree = (state) =>{
	ReactDOM.render(
   		 <App state = {state}
   		 	  onChange = {store.postOnChange.bind(store)}
   		 	  onClick = {store.postOnClick.bind(store)} />,
 	 document.getElementById('root')

	);
}
reranderEntireTree(store.getState());
store.subscriber(reranderEntireTree);
