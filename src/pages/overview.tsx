import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Divider, Loader, Popup } from "semantic-ui-react";
import CardInfoComponent from "../component/cardInfo";
import LayoutComponent from "../component/layout";
import StatusBarComponent from "../component/statusbar";
import { totalPegaCountService, bornPegaTodayService } from "../services/endpoints/assets";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { rentalDistribution } from "../services/endpoints/stats";
import { economicDataUsersByTime } from "../services/endpoints/earnings";
import { numberFormat, getCurrentTimestamp, checkIfSomeLoading } from "../utils/utils";
import { AiOutlineInfoCircle } from "react-icons/ai";
import BarChartComponent from "../component/charts/bar";

ChartJS.register(ArcElement, Tooltip, Legend);

const OverviewComponent = () => {
    const [totalPegas, setTotalPegas] = useState<number | string>(0);
    const [loadingTotalPegas, setLoadingTotalPegas] = useState(false);

    const [isReady, setIsReady] = useState(false);

    const [bornPega, setBornPega] = useState<number | string>(0);
    const [loadingBornPega, setLoadingBornPega] = useState(false);

    const [soldPega, setSoldPega] = useState<number | string>(0);
    const [loadingSoldPega, setLoadingSoldPega] = useState(false);

    const [labels, setLabels] = useState([]);
    const [datasets, setDatasets] = useState([]);

    const [isDataReady, setIsDataReady] = useState(false);

    const [economicData, setEconomicData] = useState<any>({});

    /*   let data : any = {
    labels : ['0','0','0','0','0','0','0','0','0','0',],
    datasets : [
      {
        label : 'distribution',
        data : [271800, 108665, 63032, 15352, 19779, 2195, 938, 568, 940, 5629],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
      }
    ],
  } */

    useEffect(() => {
        /*  const fetchTotalPegaCount = async () => {
      setLoadingTotalPegas(true);
      return await totalPegaCountService();
    };

    fetchTotalPegaCount().then((response: any) => {
      setTotalPegas(response?.data?.pega || "N/A");
      setLoadingTotalPegas(false);
    });

    const fetchBornPegaToday = async () => {
      setLoadingBornPega(true);
      const todayTimestamp = getCurrentTimestamp();
      return await bornPegaTodayService(todayTimestamp);
    };

    fetchBornPegaToday().then((response: any) => {
      setBornPega(response?.data[0]?.pega);
      setLoadingBornPega(false)
    }); 
    
     const fetchEconomicDataUsers = async () => {
      setLoadingSoldPega(true)
       const todayTimestamp = getCurrentTimestamp();
       return await economicDataUsersByTime(todayTimestamp);
     }
 
     fetchEconomicDataUsers().then((response : any) => {
       if(response){
        setSoldPega(response.data[0].totalPegaSellCount || 'N/A')
        setLoadingSoldPega(false)
       }
     }) */

        const fetchRentalDistribution = async () => {
            const currentTimestamp = getCurrentTimestamp();
            const response = await rentalDistribution(currentTimestamp);
            if (response) {
                const [labels, dataset] = [response.data.map((x: any) => x["distribution"]), response.data.map((x: any) => x["count"])];

                setLabels(labels);
                setDatasets([
                    {
                        label: "Rental Distribution",
                        data: dataset,
                        backgroundColor : ["#5887A5"],
                        borderColor : ["#659BB3"],
                        //backgroundColor: ["#5887A5", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)"],
                        //borderColor: ["#5887A5", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
                        borderWidth: 0,
                    },
                ]);

                //console.log(labels, dataset)
            }
        };
        fetchRentalDistribution();

        const economicDataUsers = async () => {
            const currentTimestamp = getCurrentTimestamp();
            const response = await economicDataUsersByTime(currentTimestamp);
            if (response) {
                //console.log(economicData.totalPegaBuyCount)
                setEconomicData(response.data[0]);
            }
        };

        //economicDataUsers();

        /*  fetchRentalDistribution().then((response : any) => {
      if(response){
        console.log(response)
      }
      
    }).finally(() => {
   
    }) */
    }, []);

    /* 
  useEffect(() => {
    setIsDataReady(true);
  },[datasets,labels])
 */
    useEffect(() => {
        checkIfSomeLoading([loadingBornPega, loadingSoldPega, loadingTotalPegas]) ? setIsReady(false) : setIsReady(true);
    }, [loadingBornPega, loadingSoldPega, loadingTotalPegas]);

    return (
        <LayoutComponent>
            <StatusBarComponent gobackprop={true} />
            <div className="flex flex-col flex-grow mt-16 mb-6">
                {/* mx-6 xs:mx-12 md:mx-24 2xl:mx-30 */}
                <div className="flex flex-col mb-20">
                    <div className="text-4xl tracking-wider font-bold">OVERVIEW</div>
                    <div className="text-gray-300 text-md mt-1">Here you can find information about number of pegas, economic data and rankings.</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 xs:gap-6 md:gap-8 xl:gap-14 2xl:gap-20 text-center mb-10">
                    <CardInfoComponent>
                        {isReady ? (
                            <div className="flex flex-col">
                                <div className="flex justify-start ml-6 mt-4 text-xl color-text-secundary">TOTAL PEGA</div>
                                <div className="flex justify-start ml-6 color-text-subsecundary text-xs">All</div>
                                <div className="flex justify-end  mb-4 mr-6 text-xl">{numberFormat(totalPegas)}</div>
                            </div>
                        ) : (
                            <Loader active />
                        )}
                    </CardInfoComponent>
                    <CardInfoComponent>
                        {isReady ? (
                            <div className="flex flex-col">
                                <div className="flex justify-start ml-6 mt-4 text-xl color-text-secundary">BORN PEGA</div>
                                <div className="flex justify-start ml-6 color-text-subsecundary text-xs">Today</div>
                                {/*  <div className="flex justify-start ml-6 text-gray-500">
                  Today
                </div> */}
                                <div className="flex justify-end mb-4 mr-6 text-xl">{numberFormat(bornPega)}</div>
                            </div>
                        ) : (
                            <Loader active />
                        )}
                    </CardInfoComponent>
                    <CardInfoComponent>
                        {isReady ? (
                            <div className="flex flex-col">
                                <div className="flex justify-start ml-6 mt-4 text-xl color-text-secundary">SOLD PEGA</div>
                                <div className="flex justify-start ml-6 color-text-subsecundary text-xs">Today</div>
                                <div className="flex justify-end mb-4 mr-6 text-xl">{numberFormat(soldPega)}</div>
                            </div>
                        ) : (
                            <Loader active />
                        )}
                    </CardInfoComponent>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6 md:gap-8 xl:gap-14 2xl:gap-20 text-center">
                    <CardInfoComponent>
                        <div className="flex justify-start ml-6 mt-4 text-xl color-text-secundary">RENTAL DISTRIBUTION</div>
                        <div className="flex justify-start ml-6 color-text-subsecundary text-xs">Today</div>
                        <Divider />
                        <BarChartComponent classNames="max-h-60 mx-6 mt-6" options={{ plugins: { legend: { position: "bottom" } } }} labelsprop={labels} datasetsprop={datasets} />
                    </CardInfoComponent>
                    <CardInfoComponent>
                        <div className="flex flex-1 flex-col mx-6 mt-4">
                            <div className="flex justify-start text-xl color-text-secundary">ECONOMIC DATA</div>
                            <div className="flex justify-start color-text-subsecundary text-xs">Today</div>
                            <Divider />

                            <div className="flex flex-1 flex-col justify-around gap-y-2">
                                <div className="flex justify-between">
                                    <span className="">Total Pega Buy</span> {numberFormat(economicData.totalPegaBuyCount) || "N/A"}
                                </div>
                                <div className="flex justify-between">
                                    <span className="">Total Pega Buy USDT</span> $ {numberFormat(Math.round(economicData?.totalPegaBuyUSDT)) || "N/A"}
                                </div>
                                <div className="flex justify-between">
                                    <span className="flex gap-x-1">
                                        Rentee Share
                                        <span className="flex items-center">
                                            <Popup content="The one who rented the horse" trigger={<AiOutlineInfoCircle className="text-lg" />} />
                                        </span>
                                    </span>
                                    VIS {numberFormat(Math.round(economicData?.renteeVisShare)) || "N/A"}
                                </div>
                                <div className="flex justify-between">
                                    <span className="flex gap-x-1">
                                        Renter Share
                                        <span className="flex items-center">
                                            <Popup content="The one who picked the horse" trigger={<AiOutlineInfoCircle className="text-lg" />} />
                                        </span>
                                    </span>
                                    VIS {numberFormat(Math.round(economicData?.renterVisShare)) || "N/A"}
                                </div>
                            </div>
                            {/*  
                            <div className="flex flex-col gap-y-6">
                              
                                <div className="flex">
                                    <span className="">Total Pega Buy</span> {numberFormat(economicData.totalPegaBuyCount) || "N/A"}
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="">Total Pega Buy USDT</span> $ {numberFormat(Math.round(economicData?.totalPegaBuyUSDT)) || "N/A"}
                                </div>
                                <div className="flex items-center justify-between">
                                <div className="flex gap-x-2">
                                        <span>Rentee Share</span>
                                        <span className="flex items-center"><Popup content="The one who rented the horse" trigger={<AiOutlineInfoCircle className='text-lg'/>} /></span>
                                    </div>
                                    VIS {numberFormat(Math.round(economicData?.renteeVisShare)) || "N/A"}
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-x-2">
                                        <span>Renter Share</span>
                                        <span className="flex items-center"><Popup content="The one who picked the horse" trigger={<AiOutlineInfoCircle className='text-lg'/>} /></span>
                                    </div>
                                    VIS {numberFormat(Math.round(economicData?.renterVisShare)) || "N/A"}
                                    </div>
                                
                            </div> */}
                        </div>
                    </CardInfoComponent>
                </div>
            </div>
        </LayoutComponent>
    );
};

export default OverviewComponent;
