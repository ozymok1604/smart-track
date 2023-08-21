import {
  render,
  screen,
  fireEvent,
  getByPlaceholderText,
} from "@testing-library/react";
import { Field } from "../Components/Field";

test("Field renders correctly", () => {
  const onChangeMock = jest.fn();
  const fieldName = "username";
  const fieldValue = "testuser";
  const fieldPlaceholder = "Enter your username";

  const { getByPlaceholderText } = render(
    <Field
      title="Username"
      name={fieldName}
      value={fieldValue}
      placeholder={fieldPlaceholder}
      onChange={onChangeMock}
    />
  );

  const inputElement = getByPlaceholderText("Enter your username");

  fireEvent.change(inputElement, { target: { value: "newuser" } });
  expect(onChangeMock).toHaveBeenCalled();

  // Ensure that the name and value are rendered correctly
  expect(inputElement).toHaveAttribute("name", fieldName);
  expect(inputElement).toHaveValue(fieldValue);
});
