import { createStore } from "redux";
import { addRoom, editRoom, openRoomModal, reducer } from "../../store";
import { fireEvent, render, screen } from "@testing-library/react";
import { RoomModal } from ".";
import { Provider } from "react-redux";
import { getRandomNumber } from "../../utils/getRandomNumber";

test("Add Room Modal renders correctly", () => {
  const store = createStore(reducer);

  const dispatchMock = jest.fn();
  store.dispatch = dispatchMock;

  render(
    <Provider store={store}>
      <RoomModal type="add" />
    </Provider>
  );

  const header = screen.getByText("Add new Room");
  expect(header).toBeInTheDocument();

  const fieldName = screen.getByPlaceholderText("Name");
  fireEvent.change(fieldName, { target: { value: "123" } });
  expect(fieldName).toHaveDisplayValue("123");

  const closeButton = screen.getByAltText("Close");
  expect(closeButton).toBeInTheDocument();
  fireEvent.click(closeButton);
  expect(dispatchMock(openRoomModal({ isOpenRoomModal: false })));

  const roomId = getRandomNumber(1000).toString();
  const saveButton = screen.getByText("Save");
  expect(saveButton).toBeInTheDocument();
  fireEvent.click(saveButton);
  expect(
    dispatchMock(addRoom({ options: [], name: "123", doctor: "", id: roomId }))
  );
});

test("Edit Room Modal renders correctly", () => {
  const store = createStore(reducer);

  const dispatchMock = jest.fn();
  store.dispatch = dispatchMock;

  render(
    <Provider store={store}>
      <RoomModal type="edit" />
    </Provider>
  );

  const header = screen.getByText("Edit Room");
  expect(header).toBeInTheDocument();

  const fieldName = screen.getByPlaceholderText("Name");
  fireEvent.change(fieldName, { target: { value: "123" } });
  expect(fieldName).toHaveDisplayValue("123");

  const closeButton = screen.getByAltText("Close");
  expect(closeButton).toBeInTheDocument();
  fireEvent.click(closeButton);
  expect(dispatchMock(openRoomModal({ isOpenRoomModal: false })));

  const roomId = getRandomNumber(1000).toString();
  const saveButton = screen.getByText("Edit");
  expect(saveButton).toBeInTheDocument();
  fireEvent.click(saveButton);
  expect(
    dispatchMock(
      editRoom({
        options: [],
        name: "123",
        doctor: "",
      })
    )
  );
});
