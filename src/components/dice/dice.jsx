import React from 'react';
import classes from './dice.module.css'

const Dice = ({number, setNumber, image, title}) => {

    return(
        <div className={classes.container} onClick={() => setNumber(number + 1, 'k20')}>
            {image}
            <p className={classes.content}>{title}</p>
            <p>{number}</p>
        </div>
    )
}

export default Dice;