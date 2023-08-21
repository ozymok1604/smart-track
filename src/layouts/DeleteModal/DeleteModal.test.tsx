import { createStore } from "redux";
import { deleteEmployee, openDeleteModal, reducer } from "../../store";
import { fireEvent, render, screen } from "@testing-library/react";
import { DeleteModal } from ".";
import { Provider } from "react-redux";
import { store } from "../../store";

test("DeleteModal renders correctly", () => {
  const dispatchMock = jest.fn();

  render(
    <Provider store={store}>
      <DeleteModal type="stuff" />{" "}
    </Provider>
  );

  const closeButton = screen.getByAltText("Close");
  expect(closeButton).toBeInTheDocument();
  fireEvent.click(closeButton);
  expect(dispatchMock(openDeleteModal({ isOpenDeleteModal: false })));

  const deleteButton = screen.getByText("Delete");
  expect(deleteButton).toBeInTheDocument();
  fireEvent.click(deleteButton);
  expect(dispatchMock(deleteEmployee(123)));

  const cancelButton = screen.getByText("Cancel");
  expect(cancelButton).toBeInTheDocument();
  fireEvent.click(cancelButton);
  expect(dispatchMock(openDeleteModal({ isOpenDeleteModal: false })));

  const header = screen.getByTitle("header");
  expect(header).toBeInTheDocument();

  const text = screen.getByTitle("text");
  expect(text).toBeInTheDocument();
});
