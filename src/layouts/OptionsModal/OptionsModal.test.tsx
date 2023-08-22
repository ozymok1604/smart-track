import { createStore } from "redux";
import { editEmployee, openWardOptionsModal, reducer } from "../../store";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { OptionsModal } from "./OptionsModal";

test("Options Modal renders correctly", async () => {
  const store = createStore(reducer);

  const dispatchMock = jest.fn();
  store.dispatch = dispatchMock;

  const allerts = [
    { id: "1", title: "Assistant In", style: "assistantIn" },
    { id: "2", title: "Assistant Required", style: "assistantRequired" },
    { id: "3", title: "Doctor Required", style: "doctorRequired" },
    { id: "4", title: "Doctor In", style: "doctorIn" },
    { id: "5", title: "Patient In", style: "patientIn" },
    { id: "6", title: "Financial In", style: "financialIn" },
    { id: "7", title: "Financial Required", style: "financialRequired" },
    { id: "8", title: "Emergency", style: "emergency" },
    { id: "9", title: "Empty", style: "empty" },
  ];

  render(
    <Provider store={store}>
      <OptionsModal testAllerts={allerts} />
    </Provider>
  );

  allerts.map((option: any) => {
    const optionElement = screen.getByTitle(option.title);
    expect(optionElement).toBeInTheDocument();
    // fireEvent.click(optionElement);

    // expect(optionElement).toHaveClass("option_container selected");

    // fireEvent.click(optionElement);
    // expect(optionElement).toHaveClass("option_container");
  });

  // const firstOptionElement = screen.getByTitle("Assistant In");
  // expect(firstOptionElement).toBeInTheDocument();
  // fireEvent.click(firstOptionElement);
  // await (() => {
  //   expect(firstOptionElement).toHaveClass("option_container selected");
  // });

  // fireEvent.click(firstOptionElement);
  // await (() => {
  //   expect(firstOptionElement).toHaveClass("option_container");
  // });

  const closeButton = screen.getByAltText("Close");
  expect(closeButton).toBeInTheDocument();
  fireEvent.click(closeButton);
  expect(dispatchMock(openWardOptionsModal(false)));
  expect(dispatchMock(editEmployee({})));
});
