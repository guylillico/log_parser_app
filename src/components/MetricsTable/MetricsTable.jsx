import React from "react"
import { convertToSlug } from "../../util/logParser"
import { TableWrapper, Table } from "./MetricsTable.styled"

const MetricsTable = ({ title, body, header, metric }) => {
  return (
    <TableWrapper>
      <h3>{title}</h3>
      <Table>
        <thead>
          <tr>
            {header.map((head) => {
              const headSlug = convertToSlug(head)
              return (
                <th data-testid={`th-${headSlug}`} key={headSlug}>
                  {head}
                </th>
              )
            })}
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
      </Table>
    </TableWrapper>
  )
}

export default MetricsTable
