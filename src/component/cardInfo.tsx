import React from 'react';
import { Card } from "semantic-ui-react";
import styled from "styled-components";

const StyledCard = styled(Card)`
    background-color : var(--color-card-bg-alt) !important;
    box-shadow: none !important;
    min-height : 85px !important;
    width : 100% !important;
    border : none !important;
    border-radius : 8px !important;
    padding : 20px !important;
`

interface Card{
    children : React.ReactNode
    className? : string
}

const CardInfoComponent : React.FC<Card & React.HTMLAttributes<HTMLDivElement>> = ({children, className}) => {
  return (
  <>
    <StyledCard>
        {children}
    </StyledCard>
  </>
  ) 
}

export default CardInfoComponent