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
  deleteModalParameters: {},
  roomModalParameters: {},
  room: {},
  roomId: "",
  editedRoom: {},
  selectedDoctor: {},
  selectedRooms: [],
};

const reducer = (
  state: SmartTrackState = initialState,
  action: TrackAction
) => {
  const employees = JSON.parse(localStorage.getItem("employees") || "[]");
  const rooms = JSON.parse(localStorage.getItem("rooms") || "[]");

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
      console.log(action);
      const indexEditedEmployee = employees.findIndex((employee: Employee) => {
        return (
          employee.id == state.employeeData.id ||
          employee.id == action.editedEmployee.id
        );
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
        deleteModalParameters: action.deleteModalParameters,
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
    case actionTypes.OPEN_ADD_ROOM_MODAL:
      return {
        ...state,
        roomModalParameters: action.roomModalParameters,
      };
    case actionTypes.ADD_ROOM:
      const newRoomsList = action.room.name ? [...rooms, action.room] : [];
      const filteredRoomsList = getFilteredList(newRoomsList);
      window.localStorage.setItem("rooms", JSON.stringify(filteredRoomsList));
      console.log(rooms);
      return {
        ...state,
        room: action.room,
      };
    case actionTypes.DELETE_ROOM:
      const newDeletedRoomsList = rooms.filter(
        (room: Room) => room.id != action.roomId
      );
      window.localStorage.setItem("rooms", JSON.stringify(newDeletedRoomsList));

      return {
        ...state,
        roomId: action.roomId,
      };

    case actionTypes.EDIT_ROOM:
      const indexEditedRoom = rooms.findIndex((room: Room) => {
        return room.id == state.editedRoom.id;
      });

      rooms[indexEditedRoom] = action.editedRoom;

      window.localStorage.setItem("rooms", JSON.stringify(rooms));

      return {
        ...state,
        editedRoom: action.editedRoom,
      };
    case actionTypes.SELECT_DOCTOR:
      return {
        ...state,
        selectedDoctor: action.selectedDoctor,
      };

    case actionTypes.RENAME_ROOMS:
      rooms?.map((room: Room) => {
        action.selectedRooms?.map((selectedRoom: Room) => {
          if (selectedRoom.id == room.id) {
            const index = rooms.indexOf(room);
            rooms[index] = selectedRoom;
          }
        });
      });
      window.localStorage.setItem("rooms", JSON.stringify(rooms));

      return {
        ...state,
        selectedRooms: action.selectedRooms,
      };
  }
  return state;
};

export { reducer };
