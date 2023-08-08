import { getFilteredList } from "../utils/getFilteredList";
import * as actionTypes from "./actionTypes";

const initialState: SmartTrackState = {
  tab: "Doctors",
  isOpenWardOptions: false,
  count: 0,
  stuffModalParameters: {},
  employee: {},
  employeeData: {},
  editedEmployee: {},
  employeeId: 0,
  isOpenDeleteModal: false,
};

const reducer = (
  state: SmartTrackState = initialState,
  action: TrackAction
) => {
  const employees = JSON.parse(localStorage.getItem("employees") || "[]");
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
        stuffModalParameters: action.stuffModalParameters,
      };
    case actionTypes.ADD_NEW_EMPLOYEE:
      const newEmployeesList = action.employee.name
        ? [...employees, action.employee]
        : [];
      const filteredList = getFilteredList(newEmployeesList);
      window.localStorage.setItem("employees", JSON.stringify(filteredList));
      return {
        ...state,
        employee: action.employee,
      };

    case actionTypes.GET_EMPLOYEE_DATA:
      return {
        ...state,
        employeeData: action.employeeData,
      };
    case actionTypes.EDIT_EMPLOYEE:
      const indexEditedEmployee = employees.findIndex((employee: Employee) => {
        return employee.id == state.employeeData.id;
      });

      employees[indexEditedEmployee] = action.editedEmployee;
      window.localStorage.setItem("employees", JSON.stringify(employees));

      return {
        ...state,
        editedEmployee: action.editedEmployee,
      };

    case actionTypes.OPEN_DELETE_MODAL:
      return {
        ...state,
        isOpenDeleteModal: action.isOpenDeleteModal,
      };
    case actionTypes.DELETE_EMPLOYEE:
      const newList = employees.filter(
        (item: Employee) => item.id != action.employeeId
      );
      window.localStorage.setItem("employees", JSON.stringify(newList));
      console.log(action.employeeId);
      return {
        ...state,
        employeeId: action.employeeId,
      };
  }
  return state;
};

export { reducer };
