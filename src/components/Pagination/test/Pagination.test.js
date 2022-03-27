import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import Pagination from "../Pagination";

afterEach(cleanup);

test("renders the list correctly and calls the setCurrentPage callback when buttons are clicked", () => {
  const setCurrentPageMock = jest.fn();

  render(
    <Pagination pageList={[1, 2, 3]} setCurrentPage={setCurrentPageMock} />
  );

  const button1 = screen.getByText("1");
  fireEvent.click(button1);
  expect(setCurrentPageMock).toHaveBeenCalledTimes(1);
  expect(setCurrentPageMock).toHaveBeenCalledWith(1);

  const button2 = screen.getByText("2");
  fireEvent.click(button2);
  expect(setCurrentPageMock).toHaveBeenCalledTimes(2);
  expect(setCurrentPageMock).toHaveBeenCalledWith(1);

  const button3 = screen.getByText("3");
  fireEvent.click(button3);
  expect(setCurrentPageMock).toHaveBeenCalledTimes(3);
  expect(setCurrentPageMock).toHaveBeenCalledWith(1);
});
