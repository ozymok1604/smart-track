import { createStore } from "redux";
import { reducer } from "../store";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Select } from "../Components/Select";

test("Select renders correctly", () => {
  const store = createStore(reducer);

  const dispatchMock = jest.fn();
  store.dispatch = dispatchMock;

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
      <Select doctors={doctors} />
    </Provider>
  );

  const valueContainer = screen.getByText("Select");
  expect(valueContainer).toBeInTheDocument();

  fireEvent.click(valueContainer);

  doctors.forEach((doctor: any) => {
    const option = screen.getByText(doctor.name);
    expect(option).toBeInTheDocument();

    fireEvent.click(option);
    expect(valueContainer.textContent).toBe(doctor.name);
    fireEvent.click(valueContainer);
  });
});
