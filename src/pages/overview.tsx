import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Loader } from "semantic-ui-react";
import CardInfoComponent from "../component/cardInfo";
import LayoutComponent from "../component/layout";
import StatusBarComponent from "../component/statusbar";
import { totalPegaCountService, bornPegaTodayService } from "../services/endpoints/assets";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { rentalDistribution } from "../services/endpoints/stats";
import { numberFormat, getCurrentTimestamp } from "../utils/utils";

ChartJS.register(ArcElement, Tooltip,Legend);

const OverviewComponent = () => {
  const [totalPegas, setTotalPegas] = useState<number | string>(0);
  const [loading, setLoading] = useState(false);

  const [bornPega, setBornPega] = useState<number | string>(0);

  const data = {
    labels : ['0','10','20'],
    datasets : [
      {
        label : 'distribution',
        data : [20,405,162],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
      }
    ]
  }

  useEffect(() => {
    /* const fetchTotalPegaCount = async () => {
      setLoading(true);
      return await totalPegaCountService();
    };

    fetchTotalPegaCount().then((response: any) => {
      setTotalPegas(response?.data?.pega || "N/A");
      setLoading(false);
    });

    const fetchBornPegaToday = async () => {
      const todayTimestamp = getCurrentTimestamp();
      return await bornPegaTodayService(todayTimestamp);
    };

    fetchBornPegaToday().then((response: any) => {
      setBornPega(response?.data[0]?.pega);
    }); */

    const fetchRentalDistribution = async () => {
      return await rentalDistribution();
    }

    fetchRentalDistribution().then((response : any) => {
      if(response){
        console.log(response.data)
      }
    })

  }, []);

  return (
    <LayoutComponent>
      <StatusBarComponent gobackprop={true}/>
      <div className="flex flex-col flex-grow mt-16 mb-6">
      {/* mx-6 xs:mx-12 md:mx-24 2xl:mx-30 */}
        <div className="flex flex-col mb-20">
          <div className="text-4xl tracking-wider font-bold">OVERVIEW</div>
          <div className="text-gray-300 text-md mt-1">Here you can find information about number of pegas, economic data and rankings.</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 xs:gap-6 md:gap-8 xl:gap-14 2xl:gap-20 text-center">
          <CardInfoComponent>
            {loading ? (
              <Loader active />
            ) : (
              <div className="flex flex-col">
                <div className="flex justify-start ml-6 mt-4 text-xl color-text-secundary">TOTAL PEGA</div>
                <div className="flex justify-start ml-6 color-text-subsecundary text-xs">All</div>
                <div className="flex justify-end  mb-4 mr-6 text-xl">{numberFormat(totalPegas)}</div>
              </div>
            )}
          </CardInfoComponent>
          <CardInfoComponent>
            <div className="flex flex-col">
              <div className="flex justify-start ml-6 mt-4 text-xl color-text-secundary">BORN PEGA</div>
              <div className="flex justify-start ml-6 color-text-subsecundary text-xs">Today</div>
              {/*  <div className="flex justify-start ml-6 text-gray-500">
                  Today
                </div> */}
              <div className="flex justify-end mb-4 mr-6 text-xl">{numberFormat(bornPega)}</div>
            </div>
          </CardInfoComponent>
          <CardInfoComponent>
            <div className="flex flex-col">
             {/*  <div className="flex justify-start ml-6 mt-4 mb-6 text-xl color-text-secundary">SOLD PEGA</div>
             
              <div className="flex justify-end mb-4 mr-6 text-xl">{numberFormat(2565463)}</div> */}
              <Doughnut data={data} />
            </div>
          </CardInfoComponent>
        </div>
      </div>
    </LayoutComponent>
  );
};

export default OverviewComponent;
