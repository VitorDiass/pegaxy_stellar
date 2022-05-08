import React from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";

const GoBackComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="cursor-pointer" onClick={() => navigate(-1)}>
      <IoChevronBackOutline className="text-4xl"/>
    </div>
  );
};

export default GoBackComponent;
