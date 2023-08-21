import { createStore } from "redux";
import { editEmployee, reducer } from "../store";
import { fireEvent, render, screen } from "@testing-library/react";
import { DoctorCard } from "../Components/DoctorCard";
import { Provider } from "react-redux";

test("Doctor Card renders correctly", () => {
  const store = createStore(reducer);

  const dispatchMock = jest.fn();
  const minusMock = jest.fn();
  const addMock = jest.fn();
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

  render(
    <Provider store={store}>
      <DoctorCard doctor={doctor} />
    </Provider>
  );

  const countElement = screen.getByText(doctor.countInLine);
  expect(countElement).toBeInTheDocument();

  const resetElement = screen.getByText("Reset");
  expect(resetElement).toBeInTheDocument();
  fireEvent.click(resetElement);
  expect(dispatchMock(editEmployee({ ...doctor, rooms: [] })));

  const doctorName = screen.getByText(doctor.name.split(" ")[0]);
  expect(doctorName).toBeInTheDocument();

  const doctorSurame = screen.getByText(doctor.name.split(" ")[1]);
  expect(doctorSurame).toBeInTheDocument();

  const doctorProfession = screen.getByText("Therapist");
  expect(doctorProfession).toBeInTheDocument();

  const minusElement = screen.getByText("-");
  expect(minusElement).toBeInTheDocument();
  fireEvent.click(minusElement);
  expect(countElement.textContent).toBe("1");
  expect(
    dispatchMock(editEmployee({ ...doctor, countInLine: doctor.countInLine }))
  );

  const addElement = screen.getByText("+");
  expect(addElement).toBeInTheDocument();

  fireEvent.click(addElement);
  expect(countElement.textContent).toBe("2");
  expect(
    dispatchMock(editEmployee({ ...doctor, countInLine: doctor.countInLine }))
  );

  const stopElement = screen.getByText("stop the line");
  expect(stopElement).toBeInTheDocument();
  fireEvent.click(stopElement);
  expect(dispatchMock(editEmployee({ ...doctor, stopped: !doctor.stopped })));
});
