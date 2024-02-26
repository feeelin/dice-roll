import React, {useEffect, useState} from 'react';
import classes from './dice.module.css'
import {useDispatch, useSelector} from "react-redux";

const Dice = ({image, title}) => {

    let dicesCount = useSelector(state => state.dices)
    const [currentDiceCount, setCurrentDiceCount] = useState(dicesCount[title])
    const [diceChangeButtons, setDiceChangeButtons] = useState(<div></div>)
    const dispatch = useDispatch()

    const addNumber = () => {
        let output = dicesCount
        output[title] = dicesCount[title] + 1
        setCurrentDiceCount(output[title])

        dispatch(
            {
                type: 'SET_DICES_COUNT',
                payload: output
            }
        )
    }

    const clearNumber = (event) => {
        event.stopPropagation()
        let output = dicesCount
        output[title] = 0
        setCurrentDiceCount(output[title])

        dispatch({
            type: 'SET_DICES_COUNT',
            payload: output
        })
    }

    const decrementNumber = (event) => {
        event.stopPropagation()
        let output = dicesCount
        output[title] = dicesCount[title] - 1
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