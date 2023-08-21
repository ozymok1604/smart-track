import { render, fireEvent, screen } from "@testing-library/react";

import { AllertOption } from "../Components/AllertOption";

import { useDispatch } from "react-redux";
import { openAllertModal, getAllertData } from "../store";

jest.mock("react-redux");

test("Allert option renders correctly", () => {
  const dispatchMock = jest.fn();
  const dispatch = useDispatch as any;
  dispatch.mockImplementation(() => dispatchMock);

  const index = 1;
  const allert = { title: "Allert", style: "allert1" };

  const { getByAltText } = render(
    <AllertOption index={index} allert={allert} />
  );

  const allertStyle = screen.getByTitle(allert.style);
  expect(allertStyle).toBeInTheDocument();
  expect(allertStyle).toHaveClass(allert.style);

  const editButton = getByAltText("Edit");
  fireEvent.click(editButton);
  expect(dispatchMock).toHaveBeenCalledWith(
    openAllertModal({ isOpen: true, type: "edit" })
  );
  expect(dispatchMock).toHaveBeenCalledWith(getAllertData(allert));
});
