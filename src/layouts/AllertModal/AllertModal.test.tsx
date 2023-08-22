import { createStore } from "redux";
import { addAllert, editAllert, openAllertModal, reducer } from "../../store";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { AllertModal } from ".";

test("Add Allert Modal renders correctly", () => {
  const allerts = [
    "allert1",
    "allert2",
    "allert3",
    "allert4",
    "allert5",
    "allert6",
  ];
  const store = createStore(reducer);

  const dispatchMock = jest.fn();
  store.dispatch = dispatchMock;

  render(
    <Provider store={store}>
      <AllertModal actionType="add" />
    </Provider>
  );

  const header = screen.getByText("Add New");
  expect(header).toBeInTheDocument();

  allerts.forEach((allert: any) => {
    const allertElement = screen.getByTitle(allert);
    expect(allertElement).toBeInTheDocument();
    expect(allertElement).toHaveClass(allert);
    fireEvent.click(allertElement);
    expect(allertElement).toHaveClass("ordered");
  });

  const closeButton = screen.getByAltText("Close");
  expect(closeButton).toBeInTheDocument();
  fireEvent.click(closeButton);
  expect(dispatchMock(openAllertModal({ type: "", isOpen: false })));

  const fieldName = screen.getByPlaceholderText("Name");
  fireEvent.change(fieldName, { target: { value: "123" } });
  expect(fieldName).toHaveDisplayValue("123");

  const saveButton = screen.getByText("Save");
  expect(saveButton).toBeInTheDocument();
  fireEvent.click(saveButton);
  expect(dispatchMock(addAllert({ id: "12", title: "123", style: "allert6" })));
  expect(dispatchMock(openAllertModal({ type: "", isOpen: false })));
});

test("Edit Allert Modal renders correctly", () => {
  const store = createStore(reducer);

  const allerts = [
    "allert1",
    "allert2",
    "allert3",
    "allert4",
    "allert5",
    "allert6",
  ];

  const dispatchMock = jest.fn();
  store.dispatch = dispatchMock;

  render(
    <Provider store={store}>
      <AllertModal actionType="edit" />
    </Provider>
  );

  allerts.forEach((allert: any) => {
    const allertElement = screen.getByTitle(allert);
    expect(allertElement).toBeInTheDocument();
    expect(allertElement).toHaveClass(allert);
    fireEvent.click(allertElement);
    expect(allertElement).toHaveClass("ordered");
  });

  const closeButton = screen.getByAltText("Close");
  expect(closeButton).toBeInTheDocument();
  fireEvent.click(closeButton);
  expect(dispatchMock(openAllertModal({ type: "", isOpen: false })));

  const fieldName = screen.getByPlaceholderText("Name");
  fireEvent.change(fieldName, { target: { value: "123" } });
  expect(fieldName).toHaveDisplayValue("123");

  const saveButton = screen.getByText("Save");
  expect(saveButton).toBeInTheDocument();
  fireEvent.click(saveButton);
  expect(
    dispatchMock(editAllert({ id: "12", title: "123", style: "allert6" }))
  );
  expect(dispatchMock(openAllertModal({ type: "", isOpen: false })));
});
