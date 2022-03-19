import React from "react";
import { useStatus } from "../hooks/useStatus";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

function StatusBarComponent() {
  const status = useStatus();

  return (
    <div className="flex justify-end items-center text-gray-400">
      API STATUS
      {status ? (
        <AiOutlineCheckCircle
          className="text-2xl m-1"
          style={{ color: "var(--color-blue-api)" }}
        />
      ) : (
        <AiOutlineCloseCircle
          className="text-2xl m-1"
          style={{ color: "var(--color-red-api)" }}
        />
      )}
    </div>
  );
}

export default StatusBarComponent;
