import * as actionTypes from "./actionTypes";

export const changeTab = (tab: Tab) => {
  return {
    type: actionTypes.CHANGE_TAB,
    tab,
  };
};

export const openModal = (isOpen: IsOpen) => {
  return {
    type: actionTypes.OPEN_MODAL,
    isOpen,
  };
};
