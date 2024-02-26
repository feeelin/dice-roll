const defaultState = {'20': 0, '12': 0, '10': 0, '100': 0, '8': 0, '6': 0, '4': 0, '2': 0}

const dicesCountReducer = (state= defaultState, action) => {
    switch (action.type){
        case 'SET_DICES_COUNT':
            console.log(action.payload)
            return action.payload
        case 'CLEAR_DICES_COUNT':
            return {'20': 0, '12': 0, '10': 0, '100': 0, '8': 0, '6': 0, '4': 0, '2': 0}
        default:
            return state
    }
}

export default dicesCountReducer;