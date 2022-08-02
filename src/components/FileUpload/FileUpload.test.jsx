import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import FileUpload from "./FileUpload"

test("execute onLogFileChange on input change event", async () => {
  const props = {
    fileName: "test.log",
    onLogFileChange: jest.fn(),
  }
  render(<FileUpload {...props} />)

  const fileInput = screen.getByTestId("file-input")
  const logFile = { name: "test.log" }
  const mockFileEvent = {
    target: { files: [logFile] },
  }
  fireEvent.change(fileInput, mockFileEvent)

  expect(props.onLogFileChange).toHaveBeenCalledTimes(1)
  expect(props.onLogFileChange).toHaveBeenCalledWith([{ name: "test.log" }])
})
