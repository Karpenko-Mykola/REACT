import {reranderEntireTree} from '../render.js'

let state = {
	profilePage : {
		postData: [
		{id: 4, postText : "My first Post"},
		{id: 3, postText : "My second Post"},
		{id: 2, postText : "Something else"},
		{id: 1, postText : "Repeat"},
		],
		postAreaValue : "",
	},
	dialogsPage : 
	{
		friendsData : [
			{id: 1, name: "Mykola", message1 : "Hello", message2 : "How are you?"},
			{id: 2, name: "Vasiliy", message1 : "somethink", message2 : "else"},
			{id: 3, name: "Maruna", message1 : "Hello", message2 : "How are you?"},
			{id: 4, name: "Kostia",message1 : "somethink", message2 : "else"},
			{id: 5, name: "Sasha", message1 : "Hello", message2 : "How are you?"},
			{id: 6, name: "Maksim", message1 : "somethink", message2 : "else"},
			{id: 7, name: "Andrew", message1 : "Can I", message2 : "help you?"},
		],
		messageData : [
			{id: 1, message : "One message"},
			{id: 2, message : "Second message"},
			{id: 3, message : "All Right"},
		]
	}
}

export let postOnChange = (e) => {
			state.profilePage.postAreaValue = e.target.value;
			reranderEntireTree(state);

}

export let postOnClick = () => {
	let newPost = {id : state.profilePage.postData.length+1 , postText: state.profilePage.postAreaValue}
	state.profilePage.postData.unshift(newPost);
	reranderEntireTree(state);
	state.profilePage.postAreaValue = "";
}



export default state;	

