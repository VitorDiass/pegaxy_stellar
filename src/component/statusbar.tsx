import React, { useEffect, useState } from "react";
import { useStatus } from "../hooks/useStatus";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import GoBackComponent from "./goBack";

interface StatusBar{
  gobackprop? : boolean;
}

const StatusBarComponent = ({gobackprop} : StatusBar) => {
  const [goback, setGoBack] = useState<boolean>(gobackprop || false);
  const status = useStatus();

  

  return (
    <div className="flex justify-between items-center text-gray-400">
      {/* mx-6 xs:mx-12 md:mx-20 2xl:mx-30 */}
      <span className="flex justify-start">
      {goback && <GoBackComponent/>}
      </span>
      <span className="flex items-center">
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
      </span>
    </div>
  );
}

export default StatusBarComponent;
