import React from "react"
import { TableWrapper } from "./MetricsTable.styled"

const MetricsTable = ({ title, body, header, metric }) => {
  return (
    <TableWrapper>
      <h3>{title}</h3>
      <table>
        <thead>
          <tr>
            {header.map((head) => (
              <th data-testid={`th-${head}`} key={head}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(body).map((key) => (
            <tr key={key}>
              {metric === "ip" && <td data-testid={`td-ip-${key}`}>{body[key]?.ip}</td>}
              {metric === "url" && <td data-testid={`td-url-${key}`}>{body[key]?.url}</td>}
              <td data-testid={`td-count-${key}`}>{body[key]?.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  )
}

export default MetricsTable
