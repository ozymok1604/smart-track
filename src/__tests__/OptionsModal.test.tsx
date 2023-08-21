import { createStore } from "redux";
import { editEmployee, openWardOptionsModal, reducer } from "../store";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { OptionsModal } from "../layouts/OptionsModal";

test("Options Modal renders correctly", () => {
  const store = createStore(reducer);

  const dispatchMock = jest.fn();
  store.dispatch = dispatchMock;

  const allerts = JSON.parse(localStorage.getItem("allerts") || "[]");

  render(
    <Provider store={store}>
      <OptionsModal />
    </Provider>
  );

  allerts.map((option: any) => {
    const optionElement = screen.getByText(option.title);
    expect(optionElement).toBeInTheDocument();
    fireEvent.click(optionElement);
    expect(optionElement).toHaveStyle({ backgroundColor: "#6AC7BE66" });
    fireEvent.click(optionElement);
    expect(optionElement).toHaveStyle({ backgroundColor: "" });
  });

  const closeButton = screen.getByAltText("Close");
  expect(closeButton).toBeInTheDocument();
  fireEvent.click(closeButton);
  expect(dispatchMock(openWardOptionsModal(false)));
  expect(dispatchMock(editEmployee({})));
});
