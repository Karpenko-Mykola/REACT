const ADD_POST = "ADD-POST";
const POST_INPUT_CHANGE = "POST-INPUT-CHANGE";


let initialState = {
	postData: [
		{id: 4, postText : "My first Post"},
		{id: 3, postText : "My second Post"},
		{id: 2, postText : "Something else"},
		{id: 1, postText : "Repeat"},
	],
	postAreaValue : "",
};

export const profileReducer = (state = initialState, action) => {
	switch(action.type){
	    case POST_INPUT_CHANGE: {
	    	let newState = {...state}
			newState.postAreaValue = action.newText;
			return newState;
		}
		case ADD_POST: {
			let newState = {...state}
			let newPost = {id: state.postData.length + 1, postText: state.postAreaValue}
			newState.postData = [...state.postData]
			newState.postData.unshift(newPost);
			newState.postAreaValue = "";
			return newState;
		}
		default:
			return state;	
	}
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const postInputChangeActionCreator = (text) => ({type: POST_INPUT_CHANGE, newText : text})