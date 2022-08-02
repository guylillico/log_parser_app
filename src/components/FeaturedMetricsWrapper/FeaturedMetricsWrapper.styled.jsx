import styled from "styled-components"

export const StyledMetricsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
