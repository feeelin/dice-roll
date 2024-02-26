const defaultState = {values: '', description: '', total: 0, type: 'simple'}

const popupContentReducer = (state = defaultState , action) => {
    switch(action.type){
        case 'SET_POPUP_CONTENT':
            console.log(action.payload)
            return action.payload
        default:
            return state
    }
};

export default popupContentReducer;