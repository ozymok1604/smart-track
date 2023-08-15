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
  isShowingAllert: false,
  allertModalParameters: {
    isOpen: false,
    type: "",
  },
  allertData: {},
  allert: {},
  editedAllert: {},
};

const reducer = (
  state: SmartTrackState = initialState,
  action: TrackAction
) => {
  const employees = JSON.parse(localStorage.getItem("employees") || "[]");
  const rooms = JSON.parse(localStorage.getItem("rooms") || "[]");
  const allerts = JSON.parse(localStorage.getItem("allerts") || "[]");

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
        : [...employees];
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
        return employee.id == action.editedEmployee.id;
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

    case actionTypes.START_SHOWING_ALLERT:
      return {
        ...state,
        isShowingAllert: action.isShowingAllert,
      };
    case actionTypes.STOP_SHOWING_ALLERT:
      return {
        ...state,
        isShowingAllert: action.isShowingAllert,
      };
    case actionTypes.OPEN_ALLERT_MODAL:
      return {
        ...state,
        allertModalParameters: action.allertModalParameters,
      };
    case actionTypes.GET_ALLERT_DATA:
      return {
        ...state,
        allertData: action.allertData,
      };
    case actionTypes.ADD_ALLERT:
      const newAllertsList = action?.allert?.title
        ? [...allerts, action.allert]
        : [];
      const filteredAllertsList = getFilteredList(newAllertsList);
      window.localStorage.setItem(
        "allerts",
        JSON.stringify(filteredAllertsList)
      );
      return {
        ...state,
        allert: action.allert,
      };
    case actionTypes.EDIT_ALLERT:
      const indexEditedAllert = allerts.findIndex((allert: AllertData) => {
        return allert?.id == state.allertData?.id;
      });

      allerts[indexEditedAllert] = action.editedAllert;

      window.localStorage.setItem("allerts", JSON.stringify(allerts));

      return {
        ...state,
        editedAllert: action.editedAllert,
      };
    case actionTypes.GET_ROOM_DATA:
      return {
        ...state,
        room: action.room,
      };
  }
  return state;
};

export { reducer };
