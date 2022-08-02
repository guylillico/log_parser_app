import styled from "styled-components"

export const TableWrapper = styled.div`
  margin: 40px 0;
`

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 0;
  overflow-x: auto;

  th,
  td {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
    width: 50%;
  }

  th {
    background-color: #eee;
  }
`
