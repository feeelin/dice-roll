export type RollResultType = "win" | "loss" | "simple";

export interface PopupContent {
  values: string;
  description: string;
  total: number;
  type: RollResultType;
}

interface SetPopupContentAction {
  type: "SET_POPUP_CONTENT";
  payload: PopupContent;
}

export type PopupContentAction = SetPopupContentAction;

const defaultState: PopupContent = {
  values: "",
  description: "",
  total: 0,
  type: "simple",
};

const popupContentReducer = (
  state: PopupContent = defaultState,
  action: PopupContentAction,
): PopupContent => {
  switch (action.type) {
    case "SET_POPUP_CONTENT":
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default popupContentReducer;
