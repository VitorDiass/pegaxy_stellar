import React, { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import CardInfoComponent from "../component/cardInfo";
import LayoutComponent from "../component/layout";
import StatusBarComponent from "../component/statusbar";
import { totalPegaCountService } from "../services/endpoints/assets";
import {numberFormat} from '../utils/numberformat';

const OverviewComponent = () => {
  const [totalPegas, setTotalPegas] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTotalPegaCount = async () => {
      setLoading(true)
      return await totalPegaCountService();
    }

    fetchTotalPegaCount().then((response : any) => {
      setTotalPegas(response?.data?.pega || 0);
      setLoading(false)
    })
    
  },[])
  

  return (
    <LayoutComponent>
      <StatusBarComponent />
      <div className="flex flex-col flex-grow mx-6 xs:mx-12 md:mx-24 2xl:mx-30 mt-16 mb-6">
        <div className="flex flex-col mb-20">
          <div className="text-4xl tracking-wider font-bold">OVERVIEW</div>
          <div className="text-gray-300 text-md mt-1">
            Here you can find information about number of pegas, economic data
            and rankings.
          </div>
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 xs:gap-6 md:gap-8 xl:gap-14 2xl:gap-20 text-center">
            <CardInfoComponent>
              {loading ? <Loader active/> : <div className="flex flex-col">
                <div className="flex justify-start ml-6 mt-4 mb-6 text-xl color-text-secundary">
                  TOTAL PEGA
                </div>
                <div className="flex justify-end  mb-4 mr-6 text-xl">
                 {numberFormat(totalPegas)}
                </div>
              </div>
              }
            </CardInfoComponent>
            <CardInfoComponent>
            <div className="flex flex-col">
                <div className="flex justify-start ml-6 mt-4 mb-6 text-xl color-text-secundary">
                  BORN PEGA
                </div>
                {/*  <div className="flex justify-start ml-6 text-gray-500">
                  Today
                </div> */}
                <div className="flex justify-end mb-4 mr-6 text-xl">
                  {numberFormat(348263)}
                </div>
              </div>
            </CardInfoComponent>
            <CardInfoComponent>
            <div className="flex flex-col">
                <div className="flex justify-start ml-6 mt-4 mb-6 text-xl color-text-secundary">
                  SOLD PEGA
                </div>
                {/*  <div className="flex justify-start ml-6 text-gray-500">
                  Today
                </div> */}
                <div className="flex justify-end mb-4 mr-6 text-xl">
                  {numberFormat(2565463)}
                </div>
              </div>
            </CardInfoComponent>
            </div>
          </div>
        
    </LayoutComponent>
  );
}

export default OverviewComponent;
