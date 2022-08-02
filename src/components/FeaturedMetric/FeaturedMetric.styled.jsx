import styled from "styled-components"

export const StyledMetric = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  flex-basis: 100%;
  max-width: 100%;
  @media screen and (min-width: 768px) {
    flex-basis: 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .inner {
    border: 1px dashed green;
    border-radius: 8px;
    height: 100%;
  }

  span {
    display: block;
    font-size: 30px;
    margin-bottom: 20px;
  }

  ol,
  ul {
    text-align: left;
    padding-left: 60px;
  }
`
