import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';


let reranderEntireTree = (state) =>{
	ReactDOM.render(
   		 <App state = {state}
   		 	  dispatch = {store.dispatch.bind(store)} />,
 	 document.getElementById('root')

	);
}
reranderEntireTree(store.getState());

store.subscribe( () => {
	let state = store.getState();
	reranderEntireTree(state);
});
