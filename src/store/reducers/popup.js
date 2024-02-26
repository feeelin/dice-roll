
const popupReducer = (state, action) => {
    switch(action.type){
        case 'SHOW_POPUP':
            console.log(true)
            return true
        case 'HIDE_POPUP':
            console.log(false)
            return false
        default:
            return false
    }
}

export default popupReducer;