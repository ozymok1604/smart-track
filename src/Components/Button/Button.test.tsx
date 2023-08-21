import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from ".";
import userEvent from "@testing-library/user-event";

test("Button primary renders correctly", () => {
  const onClickMock = jest.fn();

  const { getByText } = render(
    <Button type="primary" title="Primary" onClick={onClickMock} />
  );
  const buttonElement = getByText("Primary");
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass("primary");
  fireEvent.click(buttonElement);
  expect(onClickMock).toHaveBeenCalled();
});

test("Button add renders correctly", () => {
  const onClickMock = jest.fn();

  const onMouseOverMock = jest.fn();
  const onMouseOutMock = jest.fn();
  const onMouseDownMock = jest.fn();
  const onMouseUpMock = jest.fn();

  const { getByText } = render(
    <Button
      type="add"
      title="Add"
      onClick={onClickMock}
      onMouseOver={onMouseOverMock}
      onMouseOut={onMouseOutMock}
      onMouseDown={onMouseDownMock}
      onMouseUp={onMouseUpMock}
    />
  );
  const addButton = getByText("Add");
  expect(addButton).toBeInTheDocument();
  expect(addButton).toHaveClass("add");

  fireEvent.click(addButton);
  expect(onClickMock).toHaveBeenCalled();

  fireEvent.mouseOver(addButton);
  expect(onMouseOverMock).toHaveBeenCalled();

  fireEvent.mouseOut(addButton);
  expect(onMouseOutMock).toHaveBeenCalled();

  fireEvent.mouseDown(addButton);
  expect(onMouseDownMock).toHaveBeenCalled();

  fireEvent.mouseUp(addButton);
  expect(onMouseUpMock).toHaveBeenCalled();
});

test("Button addRoom renders correctly", () => {
  const onClickMock = jest.fn();

  const onMouseOverMock = jest.fn();
  const onMouseOutMock = jest.fn();
  const onMouseDownMock = jest.fn();
  const onMouseUpMock = jest.fn();

  const { getByText } = render(
    <Button
      type="addRoom"
      title="Add Room"
      onClick={onClickMock}
      onMouseOver={onMouseOverMock}
      onMouseOut={onMouseOutMock}
      onMouseDown={onMouseDownMock}
      onMouseUp={onMouseUpMock}
    />
  );
  const addRoomButton = getByText("Add Room");
  expect(addRoomButton).toBeInTheDocument();
  expect(addRoomButton).toHaveClass("add_room");

  fireEvent.click(addRoomButton);
  expect(onClickMock).toHaveBeenCalled();

  fireEvent.mouseOver(addRoomButton);
  expect(onMouseOverMock).toHaveBeenCalled();

  fireEvent.mouseOut(addRoomButton);
  expect(onMouseOutMock).toHaveBeenCalled();

  fireEvent.mouseDown(addRoomButton);
  expect(onMouseDownMock).toHaveBeenCalled();

  fireEvent.mouseUp(addRoomButton);
  expect(onMouseUpMock).toHaveBeenCalled();
});

test("Button secondary renders correctly", () => {
  const onClickMock = jest.fn();

  const { getByText } = render(
    <Button type="secondary" title="Secondary" onClick={onClickMock} />
  );
  const buttonElement = getByText("Secondary");
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass("secondary");
  fireEvent.click(buttonElement);
  expect(onClickMock).toHaveBeenCalled();
});

test("Button reset renders correctly", () => {
  const onClickMock = jest.fn();

  const { getByText } = render(
    <Button type="reset" title="Reset" onClick={onClickMock} />
  );
  const buttonElement = getByText("Reset");
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass("reset");
  fireEvent.click(buttonElement);
  expect(onClickMock).toHaveBeenCalled();
});

test("Button stop renders correctly", () => {
  const onClickMock = jest.fn();

  const { getByText } = render(
    <Button type="stop" title="Stop" onClick={onClickMock} />
  );
  const buttonElement = getByText("Stop");
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass("stop");
  fireEvent.click(buttonElement);
  expect(onClickMock).toHaveBeenCalled();
});

test("Button connect renders correctly", () => {
  const onClickMock = jest.fn();

  const { getByText } = render(
    <Button type="connect" title="Connect" onClick={onClickMock} />
  );
  const buttonElement = getByText("Connect");
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass("connect");
  fireEvent.click(buttonElement);
  expect(onClickMock).toHaveBeenCalled();
});

test("Button small renders correctly", () => {
  const onClickMock = jest.fn();

  const { getByText } = render(
    <Button type="small" title="Small" onClick={onClickMock} />
  );
  const buttonElement = getByText("Small");
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass("small");
  fireEvent.click(buttonElement);
  expect(onClickMock).toHaveBeenCalled();
});

test("Button signOut renders correctly", () => {
  const onClickMock = jest.fn();
  const onMouseDownMock = jest.fn();
  const onMouseUpMock = jest.fn();

  const { getByText } = render(
    <Button
      type="signOut"
      title="SignOut"
      onClick={onClickMock}
      onMouseDown={onMouseDownMock}
      onMouseUp={onMouseUpMock}
    />
  );
  const buttonElement = getByText("SignOut");
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass("sign_out");
  fireEvent.click(buttonElement);
  expect(onClickMock).toHaveBeenCalled();

  fireEvent.mouseDown(buttonElement);
  expect(onMouseDownMock).toHaveBeenCalled();

  fireEvent.mouseUp(buttonElement);
  expect(onMouseUpMock).toHaveBeenCalled();
});
