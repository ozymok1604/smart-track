import * as actionTypes from "./actionTypes";

export const changeTab = (tab: Tab) => {
  return {
    type: actionTypes.CHANGE_TAB,
    tab,
  };
};

export const openWardOptionsModal = (isOpenWardOptions: IsOpen) => {
  return {
    type: actionTypes.OPEN_OPTIONS_MODAL,
    isOpenWardOptions,
  };
};

export const changeCount = (count: Count) => {
  return {
    type: actionTypes.CHANGE_COUNT,
    count,
  };
};

export const openAddStuffModal = (isOpenAddStuffModal: IsOpen) => {
  return {
    type: actionTypes.OPEN_ADD_STUFF_MODAL,
    isOpenAddStuffModal,
  };
};

export const addNewStuff = (worker: Doctor) => {
  return {
    type: actionTypes.ADD_NEW_STUFF,
    worker,
  };
};
