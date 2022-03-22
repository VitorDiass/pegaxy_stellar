import React, { MouseEvent, useState } from "react";
import { Component } from "react";
import { Card, CardProps, Icon, Image } from "semantic-ui-react";
import styled from "styled-components";

interface CardComponent {
  cardColor : string;
  linearBgTop : string;
  linearBgBottom : string;
  cardTitle : string;
  icon? : any;
  to? : string;
  //className : string;
}

const StyledCard = styled(Card)`
  box-shadow : 0px 4px 24px rgba(0,0,0,0.25) !important;
  color : ${({cardColor}) => cardColor} !important;
  border-top : 6px solid ${({cardColor}) => cardColor} !important;
  background : linear-gradient(180deg, ${({linearBgTop}) => linearBgTop}, ${({linearBgBottom}) => linearBgBottom}) !important;
  /* background-color: #b1bfd8 !important;
  background-image: linear-gradient(315deg, #b1bfd8 0%, #6782b4 74%) !important;  */ 
  backdrop-filter: blur(20px);
  
  &:hover {
    //box-shadow : 0px 0px 5px 5px ${({linearBgTop}) => linearBgTop} !important;
    //text-shadow : ${({linearBgTop}) => linearBgTop} 0px 0px 10px;
  }
`;

const CardComponent = ({ cardColor, linearBgTop, linearBgBottom, cardTitle, icon, to, children }: CardComponent & CardProps) => {
  return (
    <>
      <StyledCard className="!w-96" cardColor={cardColor} linearBgTop={linearBgTop} linearBgBottom={linearBgBottom}>
        <div className="flex items-center justify-center h-32 2xl:h-40 text-2xl tracking-wider">
            {children}
            {/* <div className="text-2xl my-10">{icon}</div> */}
         {cardTitle}
        </div>
      </StyledCard>
    </>
  );
};

export default CardComponent;
