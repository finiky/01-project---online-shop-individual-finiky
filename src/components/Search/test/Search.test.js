import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import Search from "../Search";

afterEach(cleanup);

test("calls the setSearch callback when the input changes", () => {
  const setSearchMock = jest.fn();

  const { container } = render(<Search setSearch={setSearchMock} />);

  // This is not best practice with React Testing Library
  // But as the component is empty, we cannot predict how students
  // will create the HTML structure. The search box HAS to be an input though.
  const input = container.querySelector("input");
  const value = "abc";

  fireEvent.change(input, { target: { value } });

  expect(setSearchMock).toHaveBeenCalledTimes(1);
  expect(setSearchMock).toHaveBeenCalledWith(value);
});

test("does NOT call the setSearch callback if value is less than 3 characters", () => {
  const setSearchMock = jest.fn();

  const { container } = render(<Search setSearch={setSearchMock} />);
  const input = container.querySelector("input");
  const value = "ab";

  fireEvent.change(input, { target: { value } });

  expect(setSearchMock).not.toHaveBeenCalled();
});

test("call the setSearch callback if value is an empty string", () => {
  const setSearchMock = jest.fn();

  const { container } = render(<Search setSearch={setSearchMock} />);
  const input = container.querySelector("input");
  const value = "";

  // set the change event to fire by giving it something
  // different than the default value
  fireEvent.change(input, { target: { value: "ab" } });
  fireEvent.change(input, { target: { value } });

  expect(setSearchMock).toHaveBeenCalledTimes(1);
  expect(setSearchMock).toHaveBeenCalledWith(value);
});
