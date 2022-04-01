import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';
import {Provider} from "react-redux";


let reranderEntireTree = (store) =>{
	ReactDOM.render(
		<Provider store = {store}>
			<App />
		</Provider>
   		 ,
 	 document.getElementById('root')

	);
}
reranderEntireTree(store);

store.subscribe( () => {
	reranderEntireTree(store);
});
