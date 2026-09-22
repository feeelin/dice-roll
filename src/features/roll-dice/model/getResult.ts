import type { Dispatch, UnknownAction } from 'redux'
import getRandomInt from "../../../shared/lib/getRandomInt";
import type { DicesCount, DiceType } from "../../../entities/dice";
import type { RollResultType } from "../../../entities/roll-result";

const getResult = (dicesCount: DicesCount, dispatch: Dispatch<UnknownAction>): void => {
    let values = ''
    let description = ''
    let total = 0
    let type: RollResultType = 'simple'
    let win = 0
    let loss = 0

    for(const key of Object.keys(dicesCount) as DiceType[]){
        if(dicesCount[key] > 0){
            description += `${dicesCount[key]}k${key} + `
            values += '('
            for(let i= 0; i<dicesCount[key]; i++){
                const localResult = getRandomInt(1, Number(key))
                total += localResult
                win += Number(key)
                loss += 1
                values += `${localResult} + `

            }
            values = values.slice(0, -3) + ') + '
        }
    }

    if(total === win){
        type = 'win'
    } else if(total === loss){
        type = 'loss'
    } else{
        type = 'simple'
    }

    if(total){
        dispatch(
            {
                type: 'SET_POPUP_CONTENT',
                payload: {
                    values : values.slice(0, -3),
                    description: description.slice(0, -3),
                    total: total,
                    type: type
                }
            }
        )

        dispatch(
            {
                type: 'CLEAR_DICES_COUNT'
            }
        )
    }
};

export default getResult;
