import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders header title", () => {
  render(<App />)
  const titleElement = screen.getByText(/Log parser app/i)
  expect(titleElement).toBeInTheDocument()
})
