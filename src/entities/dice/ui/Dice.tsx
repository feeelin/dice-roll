import { useEffect, useState, type MouseEvent, type ReactNode } from 'react';
import classes from './dice.module.css'
import {useDispatch, useSelector} from "react-redux";
import type { DicesCount, DiceType } from '../model/dicesCount'

interface DiceProps {
    image: ReactNode
    title: DiceType
}

const Dice = ({image, title}: DiceProps) => {

    const dicesCount = useSelector((state: { dices: DicesCount }) => state.dices)
    const [currentDiceCount, setCurrentDiceCount] = useState(dicesCount[title])
    const [diceChangeButtons, setDiceChangeButtons] = useState<ReactNode>(<div></div>)
    const dispatch = useDispatch()

    const addNumber = () => {
        const output = { ...dicesCount, [title]: dicesCount[title] + 1 }
        setCurrentDiceCount(output[title])

        dispatch(
            {
                type: 'SET_DICES_COUNT',
                payload: output
            }
        )
    }

    const clearNumber = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        const output = { ...dicesCount, [title]: 0 }
        setCurrentDiceCount(output[title])

        dispatch({
            type: 'SET_DICES_COUNT',
            payload: output
        })
    }

    const decrementNumber = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        const output = { ...dicesCount, [title]: Math.max(0, dicesCount[title] - 1) }
        setCurrentDiceCount(output[title])

        dispatch(
            {
                type: 'SET_DICES_COUNT',
                payload: output
            }
        )
    }


    useEffect(() => {
        if(currentDiceCount){
            setDiceChangeButtons(
                <div className={classes.counterButtonsContainer}>
                    <button className={classes.clearButton} onClick={(event) => {
                        clearNumber(event)
                    }}>
                        x
                    </button>
                    <button className={classes.minusButton} onClick={(event) => {
                        decrementNumber(event)
                    }}>
                        -
                    </button>
                </div>
            )
        }else{
            setDiceChangeButtons(<div></div>)
        }

    }, [currentDiceCount]);

    useEffect(() => {
        if(dicesCount[title] === 0){
            setCurrentDiceCount(0)
        }
    }, [dicesCount]);

    return (
            <div className={classes.diceContainer} onClick={addNumber}>
                <div className={classes.counterContainer}>
                        {diceChangeButtons}
                    <div className={classes.counterDisplayContainer}>
                        {currentDiceCount}
                    </div>
                </div>
                <div>
                    {image}
                </div>
                <p>k{title}</p>
            </div>
    );
};

export default Dice;
