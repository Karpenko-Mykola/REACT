import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';


let reranderEntireTree = (store) =>{
	ReactDOM.render(
   		 <App store = {store} />,
 	 document.getElementById('root')

	);
}
reranderEntireTree(store);

store.subscribe( () => {
	reranderEntireTree(store);
});
