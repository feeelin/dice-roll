import React from "react"
import classes from './modal.module.css'

const Modal = ({value, visible, setVisible, keys}) => {

    const rootClasses = [classes.myModal]

    if(visible){
        rootClasses.push(classes.active)
    }

    return(
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.myModalContent} onClick={(event) => event.stopPropagation()}>
                <p className={classes.title}>Result</p>
                {value}
                <p className={classes.title}>{keys}</p>
            </div>
        </div>
    )
}

export default Modal;