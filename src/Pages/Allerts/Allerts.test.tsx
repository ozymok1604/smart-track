import { createStore } from "redux";
import { openAllertModal, reducer } from "../../store";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Allerts } from ".";
import { BrowserRouter } from "react-router-dom";

test("Allerts Page renders correctly", () => {
  const options = [
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

  const store = createStore(reducer);

  const dispatchMock = jest.fn();
  store.dispatch = dispatchMock;
  const allerts = JSON.parse(
    localStorage.getItem("allerts") || JSON.stringify(options)
  );

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Allerts />
      </BrowserRouter>
    </Provider>
  );

  allerts.forEach((allert: any) => {
    const allertTitle = screen.getByText(allert.title);
    expect(allertTitle).toBeInTheDocument();
  });

  const addNewButton = screen.getByText("Add New");
  expect(addNewButton).toBeInTheDocument();
  fireEvent.click(addNewButton);
  expect(dispatchMock(openAllertModal({ type: "add", isOpen: true })));
});
