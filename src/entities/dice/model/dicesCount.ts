export type DiceType = '20' | '12' | '10' | '100' | '8' | '6' | '4' | '2'

export type DicesCount = Record<DiceType, number>

interface SetDicesCountAction {
    type: 'SET_DICES_COUNT'
    payload: DicesCount
}

interface ClearDicesCountAction {
    type: 'CLEAR_DICES_COUNT'
}

export type DicesCountAction = SetDicesCountAction | ClearDicesCountAction

const defaultState: DicesCount = {'20': 0, '12': 0, '10': 0, '100': 0, '8': 0, '6': 0, '4': 0, '2': 0}

const dicesCountReducer = (state: DicesCount = defaultState, action: DicesCountAction): DicesCount => {
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
