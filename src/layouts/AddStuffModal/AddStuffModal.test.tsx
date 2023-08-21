import { createStore } from "redux";
import { addNewEmployee, openAddStuffModal, reducer } from "../../store";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { AddStuffModal } from ".";
import { getRandomNumber } from "../../utils/getRandomNumber";

test("Add Stuff Modal renders correctly", () => {
  const allerts = [
    { title: "Assistant", value: "assistant" },
    { title: "Doctor", value: "doctor" },
    { title: "Finances", value: "financial" },
    { title: "Patient", value: "patient" },
    { title: "Emergency", value: "emergency" },
    { title: "Empty", value: "empty" },
  ];

  const additionalAllerts = [
    { title: "Allert", style: "allert1", value: "allert1" },
    { title: "Allert", style: "allert2", value: "allert2" },
    { title: "Allert", style: "allert3", value: "allert3" },
    { title: "Allert", style: "allert4", value: "allert4" },
    { title: "Allert", style: "allert5", value: "allert5" },
    { title: "Allert", style: "allert6", value: "allert6" },
    { title: "Allert", style: "allert7", value: "allert7" },
    { title: "Allert", style: "allert8", value: "allert8" },
    { title: "Allert", style: "allert9", value: "allert9" },
    { title: "Allert", style: "allert10", value: "allert10" },
  ];

  const store = createStore(reducer);

  const dispatchMock = jest.fn();
  store.dispatch = dispatchMock;

  render(
    <Provider store={store}>
      <AddStuffModal />
    </Provider>
  );

  const closeButton = screen.getByAltText("Close");
  expect(closeButton).toBeInTheDocument();
  fireEvent.click(closeButton);
  expect(dispatchMock(openAddStuffModal({ type: "close", isOpen: false })));

  const fieldName = screen.getByPlaceholderText("Name");
  fireEvent.change(fieldName, { target: { value: "UserName" } });
  expect(fieldName).toHaveDisplayValue("UserName");

  const fieldEmail = screen.getByPlaceholderText("example@mail.com");
  fireEvent.change(fieldEmail, { target: { value: "UserEmail" } });
  expect(fieldEmail).toHaveDisplayValue("UserEmail");

  const fieldPhone = screen.getByPlaceholderText("+380967970607");
  fireEvent.change(fieldPhone, { target: { value: "UserPhone" } });
  expect(fieldPhone).toHaveDisplayValue("UserPhone");

  allerts.forEach((allert: any) => {
    const allertElement = screen.getByText(allert.title);
    expect(allertElement).toBeInTheDocument();
    fireEvent.click(allertElement);
    const deleteButton = screen.getByAltText("Delete");
    expect(deleteButton).toBeInTheDocument();

    fireEvent.click(deleteButton);
    const deletedSvg = screen.queryByAltText("Delete");
    expect(deletedSvg).toBeNull();
  });

  const addAdditional = screen.getByText("Add an Allert");
  expect(addAdditional).toBeInTheDocument();
  fireEvent.click(addAdditional);
  const addittionalTitle = screen.getByText("Choose allert");
  expect(addittionalTitle).toBeInTheDocument();

  additionalAllerts.forEach((additionalAllert: any) => {
    const additionalElement = screen.getByTitle(additionalAllert.value);
    expect(additionalElement).toBeInTheDocument();
    fireEvent.click(additionalElement);
    expect(additionalElement).toHaveStyle({ border: "2px solid #6ac7be" });
    fireEvent.click(additionalElement);
    expect(additionalElement).toHaveStyle({ border: "" });
  });

  const saveButton = screen.getByText("Save");
  expect(saveButton).toBeInTheDocument();
  fireEvent.click(saveButton);
  expect(
    dispatchMock(
      addNewEmployee({
        id: getRandomNumber(1000),
        countInLine: 0,
        stopped: false,
        type: "Doctors",
        name: "UserName",
        email: "UserEmail",
        rooms: [],
        phone: "UserPhone",
        allerts: [...allerts, ...additionalAllerts],
      })
    )
  );
});
