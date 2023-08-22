import { createStore } from "redux";
import { openAddStuffModal, reducer } from "../../store";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Stuff } from ".";

test("Stuff Page renders correctly", async () => {
  const store = createStore(reducer);

  const dispatchMock = jest.fn();
  store.dispatch = dispatchMock;

  const employees = [
    {
      id: 828,
      countInLine: 2,
      stopped: false,
      type: "Doctors",
      name: "Doctor ALex",
      email: "ozimok1604ua@gmail.com",
      phone: "0967070209",
      allerts: ["doctor", "financial", "allert3", "allert5"],
      rooms: [
        {
          id: "748",
          name: "8j",
          doctor: "Doctor ALex",
          options: [
            {
              id: "6",
              title: "Financial In",
              style: "financialIn",
            },
            {
              id: "46",
              title: "TYPE",
              style: "allert4",
            },
          ],
        },
        {
          id: "576",
          name: "r6",
          doctor: "Doctor ALex",
          options: [],
        },
      ],
    },
    {
      id: 596,
      countInLine: 0,
      stopped: false,
      type: "Assistants",
      name: "lmlml",
      email: "",
      phone: "",
      allerts: [],
    },
    {
      id: 521,
      countInLine: 0,
      stopped: false,
      type: "Receptionists",
      name: "oop",
      email: "",
      phone: "",
      allerts: [],
    },
  ];

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Stuff testData={employees} />
      </BrowserRouter>
    </Provider>
  );

  const doctorsButton = screen.getByText("Doctors");
  expect(doctorsButton).toBeInTheDocument();
  fireEvent.click(doctorsButton);
  expect(doctorsButton).toHaveClass("navigationItem selected");
  expect(screen.getByText("Rooms")).toBeInTheDocument();

  const assistantsButton = screen.getByText("Assistants");
  expect(assistantsButton).toBeInTheDocument();
  fireEvent.click(assistantsButton);

  await (() => {
    expect(assistantsButton).toHaveClass("navigationItem selected");
    expect(screen.getByAltText("Assistant")).toBeInTheDocument();
  });

  const receptionistsButton = screen.getByText("Receptionists");
  expect(receptionistsButton).toBeInTheDocument();
  fireEvent.click(receptionistsButton);
  await (() => {
    expect(receptionistsButton).toHaveClass("selected");
    expect(screen.getByAltText("Assistant")).toBeNull();
  });

  const addNewButton = screen.getByText("Add new");
  expect(addNewButton).toBeInTheDocument();
  fireEvent.click(addNewButton);
  expect(dispatchMock(openAddStuffModal({ type: "add", isOpen: true })));
});
