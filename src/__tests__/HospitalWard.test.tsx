import { createStore } from "redux";
import {
  getEmployeeData,
  getRoomData,
  openWardOptionsModal,
  reducer,
} from "../store";
import { fireEvent, getByText, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { HospitalWard } from "../Components/HospitalWard";

test("Hospital Ward renders correctly", () => {
  const store = createStore(reducer);

  const dispatchMock = jest.fn();
  store.dispatch = dispatchMock;

  const doctor = {
    id: 4,
    countInLine: 2,
    stopped: false,
    type: "Doctors",
    name: "Doctor Sample",
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

  const room = {
    id: "561",
    options: [{ title: "AssistantIn" }],
    name: "8j",
    doctor: "Doctor",
  };

  render(
    <Provider store={store}>
      <HospitalWard doctor={doctor} room={room} />
    </Provider>
  );

  const roomName = screen.getByText(room.name);
  expect(roomName).toBeInTheDocument();

  const optionChar = screen.getByText(room.options[0].title.charAt(0));
  expect(optionChar).toBeInTheDocument();

  const optionTitle = screen.getByText(room.options[0].title);
  expect(optionTitle).toBeInTheDocument();

  const hospitalWard = screen.getByTitle("ward");
  fireEvent.click(hospitalWard);

  expect(dispatchMock(openWardOptionsModal(true)));
  expect(dispatchMock(getRoomData(room)));
  expect(dispatchMock(getEmployeeData(doctor as Doctor)));

  const arrowElement = screen.getByAltText("arrow");
  expect(arrowElement).toBeInTheDocument();

  const timeElement = screen.getByText("10:25");
  expect(timeElement).toBeInTheDocument();
});
