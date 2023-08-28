import { createStore } from "redux";
import { reducer } from "../../store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Dashboard } from "./Dashboard";

test("Dashboard Page renders correctly", () => {
  const store = createStore(reducer);
  const employees = JSON.parse(localStorage.getItem("employees") || "[]");
  const getFilteredDoctors = (employees: Employee[]) => {
    return employees.filter(
      (employee: Employee) => employee.type === "Doctors"
    );
  };
  const filteredDoctors = getFilteredDoctors(employees);
  const dispatchMock = jest.fn();
  store.dispatch = dispatchMock;

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </Provider>
  );

  filteredDoctors.forEach((doctor: any) => {
    const doctorName = screen.getByText(doctor.name.split(" ")[0]);
    expect(doctorName).toBeInTheDocument();

    doctor.rooms.forEach((room: any) => {
      const roomNameElement = screen.getByText(room.name);
      expect(roomNameElement).toBeInTheDocument();
    });
  });
});
