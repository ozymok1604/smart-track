import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { DoctorRow } from ".";
import { Provider } from "react-redux";
import {
  getEmployeeData,
  openAddStuffModal,
  openDeleteModal,
} from "../../store";
import { useDispatch } from "react-redux";
import { createStore } from "redux";
import { reducer } from "../../store/reducer";

test("DoctorRow renders correctly", () => {
  const store = createStore(reducer);

  const dispatchMock = jest.fn();
  store.dispatch = dispatchMock;

  const index = 1;
  const row = {
    id: 4,
    countInLine: 2,
    stopped: false,
    type: "Doctors",
    name: "Doctor",
    email: "ozimok1604ua@gmail.com",
    phone: "0967070545",
    allerts: ["doctor", "financial", "allert7", "allert9"],
    rooms: [
      {
        id: "693",
        options: [],
        name: "r6",
        doctor: "Doctor",
      },
      {
        id: "561",
        options: [],
        name: "8j",
        doctor: "Doctor",
      },
    ],
  };

  render(
    <Provider store={store}>
      <DoctorRow row={row} index={index} />
    </Provider>
  );

  const indexElement = screen.getByText(index + 1);
  expect(indexElement).toBeInTheDocument();

  const doctorName = screen.getByText(row.name);
  expect(doctorName).toBeInTheDocument();

  const doctorEmail = screen.getByText(row.email);
  expect(doctorEmail).toBeInTheDocument();

  const doctorPhone = screen.getByText(row.phone);
  expect(doctorPhone).toBeInTheDocument();

  row.allerts.forEach((allert: string) => {
    const allertElement = screen.getByTitle(allert);
    expect(allertElement).toBeInTheDocument();
  });

  row.rooms.forEach((room: any) => {
    const roomElement = screen.getByText(room.name);
    expect(roomElement).toBeInTheDocument();
  });

  const editButton = screen.getByAltText("Edit");
  fireEvent.click(editButton);
  expect(dispatchMock).toHaveBeenCalledWith(getEmployeeData(row));
  expect(dispatchMock(openAddStuffModal({ type: "edit", isOpen: true })));

  const deleteButton = screen.getByAltText("Delete");
  fireEvent.click(deleteButton);
  expect(dispatchMock).toHaveBeenCalledWith(
    openDeleteModal({ isOpenDeleteModal: true })
  );
  expect(dispatchMock).toHaveBeenCalledWith(getEmployeeData(row));
});
