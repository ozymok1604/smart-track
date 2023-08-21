import { createStore } from "redux";
import { openAddStuffModal, reducer } from "../../store";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Stuff } from ".";

test("Stuff Page renders correctly", () => {
  const store = createStore(reducer);

  const dispatchMock = jest.fn();
  store.dispatch = dispatchMock;

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Stuff />
      </BrowserRouter>
    </Provider>
  );

  const addNewButton = screen.getByText("Add new");
  expect(addNewButton).toBeInTheDocument();
  fireEvent.click(addNewButton);
  expect(dispatchMock(openAddStuffModal({ type: "add", isOpen: true })));

  const doctorsButton = screen.getByText("Doctors");
  expect(doctorsButton).toBeInTheDocument();
  fireEvent.click(doctorsButton);
});
