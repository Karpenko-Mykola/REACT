const ADD_MESSAGE = "ADD-MESSAGE";
const DIALOG_INPUT_CHANGE = "DIALOG-INPUT-CHANGE";

let initialState = {
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
}

export const dialogReducer = (state = initialState, action) => {
	switch(action.type){
		case DIALOG_INPUT_CHANGE:
			state.dialogAraeValue = action.newText;
			return state;
		case ADD_MESSAGE:
			let newMessage = {id: state.messageData.length+1, message: state.dialogAraeValue}
			state.messageData.push(newMessage);
			state.dialogAraeValue = "";
			return state;
		default	:
			return state;
	}
}

export const addMessageactionCreator = () => ({type: ADD_MESSAGE })
export const messageInputChangeActionCreator = (value) => ({type: DIALOG_INPUT_CHANGE, newText : value})