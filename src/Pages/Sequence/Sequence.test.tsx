import { createStore } from "redux";
import {
  editEmployee,
  openRoomModal,
  reducer,
  renameRooms,
  startShowingAllert,
} from "../../store";
import { fireEvent, render, screen } from "@testing-library/react";
import { Sequence } from "./Sequence";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

test("Sequence Page renders correctly", async () => {
  const store = createStore(reducer);

  const dispatchMock = jest.fn();
  store.dispatch = dispatchMock;
  const data = [
    { id: "187", name: "r6", options: [], doctor: "Doctor ALex" },
    { id: "828", name: "8j", options: [], doctor: "Doctor ALex" },
    { id: "335", options: [], name: "9o", doctor: "" },
  ];
  const doctors = [
    {
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
    },
    {
      id: 4,
      countInLine: 2,
      stopped: false,
      type: "Doctors",
      name: "Andrew",
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
    },
  ];

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Sequence testRooms={data} testEmployees={doctors} />
      </BrowserRouter>
    </Provider>
  );

  const headerTitle = screen.getByText("Choose a Doctor");
  expect(headerTitle).toBeInTheDocument();

  const selectPlaceholder = screen.getByText("Select");
  expect(selectPlaceholder).toBeInTheDocument();
  fireEvent.click(selectPlaceholder);
  const doctorOption = screen.getByText("Doctor");
  await (() => {
    expect(doctorOption).toBeInTheDocument();
  });
  fireEvent.click(doctorOption);

  const doctorRooms = screen.getByTitle("doctorRooms");
  expect(doctorRooms).toBeInTheDocument();

  data?.forEach((room: any) => {
    const roomName = screen.getByText(room.name);
    expect(roomName).toBeInTheDocument();
  });

  const firstRoom = screen.getByText(data[0].name);

  fireEvent.dragStart(firstRoom);
  fireEvent.dragEnter(doctorRooms);
  fireEvent.drop(doctorRooms);

  expect(screen.getByText(data[0].name)).toBeInTheDocument();

  const addRoomButton = screen.getByText("Add a Room");
  expect(addRoomButton).toBeInTheDocument();
  fireEvent.click(addRoomButton);
  expect(dispatchMock(openRoomModal({ isOpenRoomModal: true })));

  const saveButton = screen.getByText("Save");
  expect(saveButton).toBeInTheDocument();
  fireEvent.click(saveButton);
  expect(dispatchMock(editEmployee({})));
  expect(dispatchMock(renameRooms([])));
  expect(dispatchMock(startShowingAllert()));
});
