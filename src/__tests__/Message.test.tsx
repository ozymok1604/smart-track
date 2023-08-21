import { createStore } from "redux";
import { reducer, stopShowingAllert } from "../store";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Message } from "../layouts/Message";

test("Message renders correctly", () => {
  const store = createStore(reducer);

  const dispatchMock = jest.fn();
  store.dispatch = dispatchMock;

  render(
    <Provider store={store}>
      <Message />
    </Provider>
  );

  const messageText = screen.getByText("Sequence is created.");
  expect(messageText).toBeInTheDocument();

  const closeButton = screen.getByAltText("Close");
  expect(closeButton).toBeInTheDocument();
  fireEvent.click(closeButton);

  expect(dispatchMock(stopShowingAllert(false)));
});
