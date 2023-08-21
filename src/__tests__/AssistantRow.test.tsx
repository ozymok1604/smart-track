import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import {
  getEmployeeData,
  openAddStuffModal,
  openDeleteModal,
  reducer,
} from "../store";
import { AssistantRow } from "../Components/AssistantRow";

test("Assistant and Receptionist Row renders correctly", () => {
  const store = createStore(reducer);
  const dispatchMock = jest.fn();
  store.dispatch = dispatchMock;

  const index = 1;
  const row = {
    id: 4,
    type: "Assistants",
    name: "Doctor",
    email: "ozimok1604ua@gmail.com",
    phone: "0967070545",
  };

  render(
    <Provider store={store}>
      <AssistantRow row={row} index={index} receptionistRow={false} />
    </Provider>
  );

  const indexElement = screen.getByText(index + 1);
  expect(indexElement).toBeInTheDocument();

  const assistantName = screen.getByText(row.name);
  expect(assistantName).toBeInTheDocument();

  const assistantEmail = screen.getByText(row.email);
  expect(assistantEmail).toBeInTheDocument();

  const assistantPhone = screen.getByText(row.phone);
  expect(assistantPhone).toBeInTheDocument();

  const assistantSVG = screen.getByAltText("Assistant");
  expect(assistantSVG).toBeInTheDocument();

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
