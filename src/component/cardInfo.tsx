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

    &:hover{
      background-color : ${(props) => props.hoverActive ? "#06080eb5 !important" : "var(--color-card-bg-alt)"} ;
      //0px 0px 20px 0px grey !important;
    }
`

interface Card{
    children : React.ReactNode
    className? : string
    hoverActive? : boolean
}

const CardInfoComponent : React.FC<Card & React.HTMLAttributes<HTMLDivElement>> = ({children, hoverActive = false, className} : Card) => {
  return (
  <>
    <StyledCard hoverActive={hoverActive} className={`${className}`}>
        {children}
    </StyledCard>
  </>
  ) 
}

export default CardInfoComponent