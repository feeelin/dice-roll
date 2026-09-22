interface ShowPopupAction {
    type: 'SHOW_POPUP'
}

interface HidePopupAction {
    type: 'HIDE_POPUP'
}

export type PopupVisibilityAction = ShowPopupAction | HidePopupAction

const popupReducer = (state: boolean = false, action: PopupVisibilityAction): boolean => {
    switch(action.type){
        case 'SHOW_POPUP':
            console.log(true)
            return true
        case 'HIDE_POPUP':
            console.log(false)
            return false
        default:
            return state
    }
}

export default popupReducer;
