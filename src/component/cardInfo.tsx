import React from 'react'
import { Card, CardProps, Icon, Image } from "semantic-ui-react";
import styled from "styled-components";

const StyledCard = styled(Card)`
    background-color : var(--color-card-bg) !important;
    //border: 1px solid rgba(6, 8, 14, 0.2) !important;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25) !important;
    //max-height : 150px !important;
    width : 100% !important;
    border-radius : 8px !important;
    padding : 10px !important;
`

const CardInfoComponent = ({children} : CardProps) => {
  return (
  <>
    <StyledCard>
        {children}
    </StyledCard>
  </>
  ) 
}

export default CardInfoComponent