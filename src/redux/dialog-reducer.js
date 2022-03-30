const ADD_MESSAGE = "ADD-MESSAGE";
const DIALOG_INPUT_CHANGE = "DIALOG-INPUT-CHANGE";

export const dialogReducer = (state, action) => {
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
export const messageInputChangeActionCreator = (text) => ({type: DIALOG_INPUT_CHANGE, newText : text})