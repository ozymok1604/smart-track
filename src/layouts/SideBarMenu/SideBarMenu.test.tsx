import { render, screen } from "@testing-library/react";
import Allerts from "../assets/Allerts.svg";
import Dashboard from "../assets/Dashboard.svg";
import Sequence from "../assets/Sequence.svg";
import Stuff from "../assets/Stuff.svg";
import { createStore } from "redux";
import { reducer } from "../../store";
import { Provider } from "react-redux";
import { SideBarMenu } from ".";
import { BrowserRouter } from "react-router-dom";

test("SideBarMenu renders correctly", () => {
  const store = createStore(reducer);

  render(
    <Provider store={store}>
      <BrowserRouter>
        <SideBarMenu />
      </BrowserRouter>
    </Provider>
  );

  const dashboardElement = screen.getByText("Dashboard");
  expect(dashboardElement).toBeInTheDocument();

  const stuffElement = screen.getByText("Stuff");
  expect(stuffElement).toBeInTheDocument();

  const allertsElement = screen.getByText("Allerts");
  expect(allertsElement).toBeInTheDocument();

  const sequenceElement = screen.getByText("Sequence");
  expect(sequenceElement).toBeInTheDocument();
});
