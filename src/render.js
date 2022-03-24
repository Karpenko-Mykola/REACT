import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';


 export let reranderEntireTree = (data) =>{
	ReactDOM.render(
   		 <App state = {data} />,
 	 document.getElementById('root')
	);
}