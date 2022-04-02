import {profileReducer} from "./reducers/profile-reducer";
import {dialogReducer} from "./reducers/dialog-reducer"

let store = {
	_state : {
		profilePage : {
		postData: [
		{id: 4, postText : "My first Post"},
		{id: 3, postText : "My second Post"},
		{id: 2, postText : "Something else"},
		{id: 1, postText : "Repeat"},
		],
		postAreaValue : "",
		},
		dialogsPage : {
		dialogAraeValue: "",	
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
		},
	},
	getState(){
		return this._state;
	},
	Reload(){},
	subscriber(observer){
		this.Reload = observer;
	},

	dispatch(action){
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
		this.Reload(this._state);
	},	
}




window.state = store.getState();
export default store;	

