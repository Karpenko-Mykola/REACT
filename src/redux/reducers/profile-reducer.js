const ADD_POST = "ADD-POST";
const POST_INPUT_CHANGE = "POST-INPUT-CHANGE";


let initialState = {
    postData: [
        {id: 4, postText: "My first Post"},
        {id: 3, postText: "My second Post"},
        {id: 2, postText: "Something else"},
        {id: 1, postText: "Repeat"},
    ],
    postAreaValue: "",
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_INPUT_CHANGE:
            return {
                ...state,
                postAreaValue: action.newText,
            }
        case ADD_POST:
            let postText = state.postAreaValue;
            let id = state.postData.length + 1;
            return {
                ...state,
                postData: [{id, postText}, ...state.postData],
                postAreaValue: "",
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const postInputChangeActionCreator = (text) => ({type: POST_INPUT_CHANGE, newText: text})