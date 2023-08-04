import * as actionTypes from "./actionTypes";

const initialState: SmartTrackState = {
  tab: "Doctors",
  isOpen: false,
};

const reducer = (
  state: SmartTrackState = initialState,
  action: TrackAction
) => {
  switch (action.type) {
    case actionTypes.CHANGE_TAB:
      return {
        ...state,
        tab: action.tab,
      };
    case actionTypes.OPEN_MODAL:
      return {
        ...state,
        isOpen: action.isOpen,
      };
  }
  return state;
};

export { reducer };
