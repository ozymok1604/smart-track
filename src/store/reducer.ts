import * as actionTypes from "./actionTypes";

const initialState: SmartTrackState = {
  tab: "Doctors",
  isOpenWardOptions: false,
  count: 0,
  isOpenAddStuffModal: false,
  employee: {},
};
const employees = JSON.parse(localStorage.getItem("employees") || "[]");

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
    case actionTypes.OPEN_OPTIONS_MODAL:
      return {
        ...state,
        isOpenWardOptions: action.isOpenWardOptions,
      };
    case actionTypes.CHANGE_COUNT:
      return {
        ...state,
        count: action.count,
      };
    case actionTypes.OPEN_ADD_STUFF_MODAL:
      return {
        ...state,
        isOpenAddStuffModal: action.isOpenAddStuffModal,
      };
    case actionTypes.ADD_NEW_STUFF:
      const newEmployeesList = action.employee.name
        ? [...employees, action.employee]
        : [];
      window.localStorage.setItem(
        "employees",
        JSON.stringify(newEmployeesList)
      );
      return {
        ...state,
        employee: action.employee,
      };
  }
  return state;
};

export { reducer };
