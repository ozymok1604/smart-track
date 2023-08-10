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

export const openAddStuffModal = (stuffModalParameters: StuffModal) => {
  return {
    type: actionTypes.OPEN_ADD_STUFF_MODAL,
    stuffModalParameters,
  };
};

export const addNewEmployee = (employee: Employee) => {
  return {
    type: actionTypes.ADD_NEW_EMPLOYEE,
    employee,
  };
};

export const getEmployeeData = (employeeData: Employee) => {
  return {
    type: actionTypes.GET_EMPLOYEE_DATA,
    employeeData,
  };
};

export const editEmployee = (editedEmployee: Employee) => {
  return {
    type: actionTypes.EDIT_EMPLOYEE,
    editedEmployee,
  };
};

export const deleteEmployee = (employeeId?: number) => {
  return {
    type: actionTypes.DELETE_EMPLOYEE,
    employeeId,
  };
};

export const openDeleteModal = (
  deleteModalParameters: DeleteModalParameters
) => {
  return {
    type: actionTypes.OPEN_DELETE_MODAL,
    deleteModalParameters,
  };
};

export const openRoomModal = (roomModalParameters: RoomModalParameters) => {
  return {
    type: actionTypes.OPEN_ADD_ROOM_MODAL,
    roomModalParameters,
  };
};

export const addRoom = (room: Room) => {
  return {
    type: actionTypes.ADD_ROOM,
    room,
  };
};

export const deleteRoom = (roomId?: string) => {
  return {
    type: actionTypes.DELETE_ROOM,
    roomId,
  };
};

export const editRoom = (editedRoom?: Room) => {
  return {
    type: actionTypes.EDIT_ROOM,
    editedRoom,
  };
};
