import React, {useEffect, useState} from "react"
import classes from './popup.module.css'
import {useDispatch, useSelector} from "react-redux";

const Popup = () => {

    let rootClasses = [classes.myModal]
    let totalClasses = []
    let visible = useSelector(state => state.popup)
    let content = useSelector(state => state.popupContent)
    let [popupContent, setPopupContent] = useState(content)
    const dispatch = useDispatch()

    useEffect(() => {
        setPopupContent(content)
    }, [content]);


    if(visible){
        rootClasses.push(classes.active)
    }

    if(popupContent.type === 'win'){
        totalClasses.push(classes.win)
    } else if(popupContent.type === 'loss'){
        totalClasses.push(classes.loss)
    } else{
        totalClasses.push(classes.simple)
    }
    totalClasses.push(classes.total)
    console.log(totalClasses.join(' '))


    return(
        <div className={rootClasses.join(' ')} onClick={(event) => dispatch({type: 'HIDE_POPUP'})}>
            <div className={classes.myModalContent}>
                <div>
                    <p className={classes.title}>Result</p>
                    <p className={classes.values}>{popupContent.values}</p>
                    <p className={classes.description}>{popupContent.description}</p>
                </div>
                <p className={totalClasses.join(' ')} >{popupContent.total}</p>
            </div>
        </div>
    )
}

export default Popup;