const app_toggleInitialized = 'toggleInitialized'

let initialState = {
    initialize: false
}

export const appReducer = (state = initialState, action) => {
    switch(action.type){
        case app_toggleInitialized:
            return{
                ...state,
                initialize: !state.initialize
            }
        default:
            return state
    }
}

const toggleInitialize = () => ({type: app_toggleInitialized})