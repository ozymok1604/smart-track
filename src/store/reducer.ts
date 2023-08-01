import * as actionTypes from "./actionTypes";

const initialState: SmartTrackState = {
  tab: "",
};

const reducer = (state: SmartTrackState = initialState, action: TabAction) => {
  switch (action.type) {
    case actionTypes.CHANGE_TAB:
      return {
        ...state,
        tab: action.tab,
      };
  }
  return state;
};

export { reducer };
