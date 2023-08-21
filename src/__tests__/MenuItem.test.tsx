import { createStore } from "redux";
import { reducer } from "../store";
import { fireEvent, render, screen } from "@testing-library/react";
import { MenuItem } from "../Components/MenuItem";
import { Provider } from "react-redux";
import Sequence from "../assets/Sequence.svg";
import { BrowserRouter } from "react-router-dom";

test("Menu Element renders correctly", async () => {
  const store = createStore(reducer);
  const dispatchMock = jest.fn();
  store.dispatch = dispatchMock;

  const menuItemData = {
    title: "Sequence",
    img: Sequence,
    link: "/",
  };

  render(
    <BrowserRouter>
      <Provider store={store}>
        <MenuItem menuItem={menuItemData} />
      </Provider>
    </BrowserRouter>
  );

  const menuItemElement = screen.getByTitle("menuElement");
  fireEvent.click(menuItemElement);
  await (() => {
    expect(screen.getByText("Choose a Doctor")).toBeInTheDocument();
  });

  const imgElement = screen.getByAltText("Sequence");
  expect(imgElement).toBeInTheDocument();
});
