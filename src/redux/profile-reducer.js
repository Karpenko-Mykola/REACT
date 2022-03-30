const ADD_POST = "ADD-POST";
const POST_INPUT_CHANGE = "POST-INPUT-CHANGE";


export const profileReducer = (state, action) => {
	switch(action.type){
	    case POST_INPUT_CHANGE: 
			state.postAreaValue = action.newText;	
			return state;
		case ADD_POST: 
			let newPost = {id : state.postData.length+1 , postText: state.postAreaValue}
			state.postData.unshift(newPost);
			state.postAreaValue = "";	
			return state;
		default:
			return state;	
	}
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const postInputChangeActionCreator = (text) => ({type: POST_INPUT_CHANGE, newText : text})