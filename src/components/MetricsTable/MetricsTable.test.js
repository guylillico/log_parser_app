import React from "react"
import { render, screen } from "@testing-library/react"

import MetricsTable from "./MetricsTable"

test("populate table with expected metrics data", () => {
  const props = {
    title: "Requests per IP Address",
    body: {
      0: { count: 3, ip: "177.71.128.21" },
      1: { count: 3, ip: "168.41.191.40" },
      2: { count: 1, ip: "168.41.191.34" },
    },
    header: ["IP", "No. of Requests"],
    metric: "ip",
  }

  render(<MetricsTable {...props} />)

  const thIp = screen.getByTestId("th-ip")
  const thNoOfRequests = screen.getByTestId("th-no-of-requests")
  expect(thIp).toBeInTheDocument()
  expect(thNoOfRequests).toBeInTheDocument()

  const firstIp = screen.getByText("177.71.128.21")
  const firstIpCount = screen.getByTestId("td-count-0")
  expect(firstIp).toBeInTheDocument()
  expect(firstIpCount).toHaveTextContent("3")

  const secondIp = screen.getByText("168.41.191.40")
  const secondIpCount = screen.getByTestId("td-count-1")
  expect(secondIp).toBeInTheDocument()
  expect(secondIpCount).toHaveTextContent("3")

  const title = screen.getByText("Requests per IP Address")
  expect(title).toBeInTheDocument()
})
