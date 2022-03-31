import React, { ReactChild, ReactChildren, ReactNode } from 'react'
import { Card, CardProps, Icon, Image } from "semantic-ui-react";
import styled from "styled-components";

const StyledCard = styled(Card)`
    //background-color : var(--color-card-bg) !important;
    background-color : var(--color-card-bg-alt) !important;
    //border: 1px solid rgba(6, 8, 14, 0.2) !important;
    //box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25) !important;
    box-shadow: none !important;
    //min-height : 111px !important;
    width : 100% !important;
    border : none !important;
    border-radius : 8px !important;
    padding : 20px !important;
    //margin-top : 10px !important;
`

interface Card{
    children : React.ReactNode
    classNames? : string
}

const CardInfoComponent : React.FC<Card & React.HTMLAttributes<HTMLDivElement>> = ({children}) => {
  return (
  <>
    <StyledCard>
        {children}
    </StyledCard>
  </>
  ) 
}

export default CardInfoComponent