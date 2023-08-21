import { createStore } from "redux";
import { reducer } from "../../store";
import { render, screen } from "@testing-library/react";
import { Table } from ".";
import { Provider } from "react-redux";

test("Table renders correctly", () => {
  const store = createStore(reducer);

  const rowType = "doctor";
  const doctorRows = [
    {
      id: 4,
      countInLine: 2,
      stopped: false,
      type: "Doctors",
      name: "Doctor",
      email: "ozimok1604ua@gmail.com",
      phone: "0967070545",
      allerts: ["doctor", "financial", "allert7", "allert9"],
      rooms: [
        {
          id: "693",
          options: [],
          name: "r6",
          doctor: "Doctor",
        },
        {
          id: "561",
          options: [],
          name: "8j",
          doctor: "Doctor",
        },
      ],
    },
  ];

  const assistantRows = [
    {
      id: 4,

      type: "Assistants",
      name: "Assistant",
      email: "dfgdfgdfgdf.com",
      phone: "0967dfg0545",
    },
  ];

  const receptionistRows = [
    {
      id: 4,

      type: "Receptionists",
      name: "Receptionist12",
      email: "dfgdgffgfggdf.com",
      phone: "0967678567",
    },
  ];

  render(
    <Provider store={store}>
      <Table rows={doctorRows} rowType={rowType} />
    </Provider>
  );

  const doctorName = screen.getByText(doctorRows[0].name);
  expect(doctorName).toBeInTheDocument();

  const doctorEmail = screen.getByText(doctorRows[0].email);
  expect(doctorEmail).toBeInTheDocument();

  const doctorPhone = screen.getByText(doctorRows[0].phone);
  expect(doctorPhone).toBeInTheDocument();

  doctorRows[0].allerts.forEach((allert: string) => {
    const allertElement = screen.getByTitle(allert);
    expect(allertElement).toBeInTheDocument();
  });

  doctorRows[0].rooms.forEach((room: any) => {
    const roomElement = screen.getByText(room.name);
    expect(roomElement).toBeInTheDocument();
  });

  render(
    <Provider store={store}>
      <Table rows={assistantRows} rowType={"assistant"} />
    </Provider>
  );

  const assistantName = screen.getByText(assistantRows[0].name);
  expect(assistantName).toBeInTheDocument();

  const assistantEmail = screen.getByText(assistantRows[0].email);
  expect(assistantEmail).toBeInTheDocument();

  const assistantdoctorPhone = screen.getByText(assistantRows[0].phone);
  expect(assistantdoctorPhone).toBeInTheDocument();

  render(
    <Provider store={store}>
      <Table rows={receptionistRows} rowType={"receptionist"} />
    </Provider>
  );

  const receptionistName = screen.getByText(receptionistRows[0].name);
  expect(receptionistName).toBeInTheDocument();

  const receptionistEmail = screen.getByText(receptionistRows[0].email);
  expect(receptionistEmail).toBeInTheDocument();

  const receptionistPhone = screen.getByText(receptionistRows[0].phone);
  expect(receptionistPhone).toBeInTheDocument();
});
