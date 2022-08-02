import React from "react"
import { StyledMetric } from "./FeaturedMetric.styled"

const FeaturedMetric = ({ title, children }) => {
  return (
    <StyledMetric>
      <div className="inner">
        <h4 data-testid="metric-title">{title}</h4>
        <div>{children}</div>
      </div>
    </StyledMetric>
  )
}

export default FeaturedMetric
