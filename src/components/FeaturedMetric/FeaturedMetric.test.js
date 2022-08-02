import { render, screen } from "@testing-library/react"
import FeaturedMetric from "./FeaturedMetric"

test("renders featured metric title", () => {
  render(<FeaturedMetric title="Total unique IP addresses" />)
  const titleElement = screen.getByTestId("metric-title")
  expect(titleElement).toHaveTextContent("Total unique IP addresses")
})
