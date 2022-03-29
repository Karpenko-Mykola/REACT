const ADD_POST = "ADD-POST";
const ADD_MESSAGE = "ADD-MESSAGE";
const POST_INPUT_CHANGE = "POST-INPUT-CHANGE";
const DIALOG_INPUT_CHANGE = "DIALOG-INPUT-CHANGE";




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
		debugger
		switch(action.type){
	        case POST_INPUT_CHANGE: 
				this._state.profilePage.postAreaValue = action.newText;
				this.Reload(this._state);	
				break;
			case ADD_POST: 
				let newPost = {id : this._state.profilePage.postData.length+1 , postText: this._state.profilePage.postAreaValue}
				this._state.profilePage.postData.unshift(newPost);
				this._state.profilePage.postAreaValue = "";	
				this.Reload(this._state);
				break;
			case DIALOG_INPUT_CHANGE:
				this._state.dialogsPage.dialogAraeValue = action.newText;
				this.Reload(this._state);
				break;
			case ADD_MESSAGE:
				let newMessage = {id: this._state.dialogsPage.messageData.length+1, message: this._state.dialogsPage.dialogAraeValue}
				this._state.dialogsPage.messageData.push(newMessage);
				this._state.dialogsPage.dialogAraeValue = "";
				this.Reload(this._state);
				break;	
		}
	},	
}

export const addMessageactionCreator = () => ({type: ADD_MESSAGE })
export const messageInputChangeActionCreator = (text) => ({type: DIALOG_INPUT_CHANGE, newText : text})
export const addPostActionCreator = () => ({type: ADD_POST})
export const postInputChangeActionCreator = (text) => ({type: POST_INPUT_CHANGE, newText : text})

window.state = store.getState();
export default store;	
