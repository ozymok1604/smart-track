import { Provider } from "react-redux";
import { DoctorLine } from "../Components/DoctorLine";
import { render, screen } from "@testing-library/react";
import { store } from "../store";

test("Doctor Line renders correctly", () => {
  const doctor = {
    name: "Alex Sample",
    rooms: [
      { id: 1, name: "Room1" },
      { id: 2, name: "Room2" },
    ],
  };

  render(
    <Provider store={store}>
      <DoctorLine doctor={doctor} />
    </Provider>
  );

  const doctorNameElement = screen.getByText(doctor.name.split(" ")[0]);
  const doctorSurnameElement = screen.getByText(doctor.name.split(" ")[1]);
  expect(doctorNameElement).toBeInTheDocument();
  expect(doctorSurnameElement).toBeInTheDocument();

  doctor.rooms.forEach((room) => {
    const roomNameElement = screen.getByText(room.name);
    expect(roomNameElement).toBeInTheDocument();
  });
});
