import React, { useEffect, useState } from "react";
import { FaBirthdayCake, FaCalendar, FaFemale, FaHorse, FaStar, FaVenus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import CardInfoComponent from "../component/cardInfo";
import LayoutComponent from "../component/layout";
import PegaStatusComponent from "../component/pegaStatus/pegaStatus";
import SingleStatusComponent from "../component/pegaStatus/singleStatus";
import StatusBarComponent from "../component/statusbar";
import { getPegaInfoService } from "../services/endpoints/game-api";
import { MAX_PEGA_STATUS, timestampToHumanDate } from "../utils/utils";

const PegaComponent = () => {
    const { pegaid } = useParams();
    const [pegaInfo, setPegaInfo] = useState<any>();

    useEffect(() => {
        const getPegaInfo = async (pegaid: string) => {
            const response = await getPegaInfoService(pegaid);
            if (response) {
                setPegaInfo(response.data?.pega);
            }
        };

        getPegaInfo(pegaid);
    }, []);

    return (
        <LayoutComponent>
            <StatusBarComponent gobackprop={true} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-20">
                <div className="row-span-6">
                    <CardInfoComponent>
                        <div className="flex flex-col justify-center items-center">
                            <span className="text-xl color-text-secundary">#{pegaInfo?.id}</span>
                            <span className="text-3xl">{pegaInfo?.name}</span>
                        </div>
                        <div className="flex justify-center items-center pb-10">
                            <img src={pegaInfo?.design?.avatar} width={450} height={450} alt="pega"></img>
                        </div>
                        <div className="grid grid-cols-4 text-base">
                            <div className="flex items-center gap-x-1 justify-center"><FaVenus/>{pegaInfo?.gender}</div>
                            <div className="flex items-center gap-x-1 justify-center"><FaHorse/>{pegaInfo?.bloodLine}</div>
                            <div className="flex items-center gap-x-1 justify-center"><FaStar/>{pegaInfo?.breedType}</div>
                            <div className="flex items-center gap-x-1 justify-center"><FaBirthdayCake/>{timestampToHumanDate(pegaInfo?.bornTime)}</div>
                        </div>
                    </CardInfoComponent>
                </div>
                <div className="row-span-6 grid grid-cols-2 gap-x-5">
                    <div className="flex">
                        <CardInfoComponent>
                            <div className="flex flex-col gap-y-12">
                            <div className="flex items-center gap-x-5"><span className="text-lg">SPEED</span><span className="pega-status-speed text-lg">{pegaInfo?.speed}</span></div><SingleStatusComponent value={pegaInfo?.speed} totalProgress={MAX_PEGA_STATUS} className="status-speed !bg-transparent !m-0"/>
                            <div className="flex items-center gap-x-5"><span className="text-lg">STRENGTH</span><span className="pega-status-strength text-lg">{pegaInfo?.strength}</span><SingleStatusComponent value={pegaInfo?.strength} totalProgress={MAX_PEGA_STATUS} className="status-strength !bg-transparent !m-0"/></div>
                            <SingleStatusComponent value={pegaInfo?.lightning} totalProgress={MAX_PEGA_STATUS} className="status-lightning !bg-transparent !m-0"/>
                            <SingleStatusComponent value={pegaInfo?.wind} totalProgress={MAX_PEGA_STATUS} className="status-wind !bg-transparent !m-0"/>
                            <SingleStatusComponent value={pegaInfo?.water} totalProgress={MAX_PEGA_STATUS} className="status-water !bg-transparent !m-0"/>
                            <SingleStatusComponent value={pegaInfo?.fire} totalProgress={MAX_PEGA_STATUS} className="status-fire !bg-transparent !m-0"/>
                            </div>
                        </CardInfoComponent>
                    </div>
                    <div className="flex">
                        <CardInfoComponent>

                        </CardInfoComponent>
                    </div>
                </div>
             {/*    <CardInfoComponent>
                    <div className="flex items-center">
                    <div className="grid grid-cols-5 text-center color-text-secundary">
                        <div>ID</div>
                        <div>NAME</div>
                        <div>GENDER</div>
                        <div>BLOODLINE</div>
                        <div>RARITY</div>
                    </div>
                    <div className="grid grid-cols-5 text-center text-lg">
                        <div>#{pegaInfo?.id}</div>
                        <div>{pegaInfo?.name}</div>
                        <div>{pegaInfo?.gender}</div>
                        <div>{pegaInfo?.bloodLine}</div>
                        <div>{pegaInfo?.breedType}</div>
                    </div>
                    </div>
                </CardInfoComponent> */}

              
            </div>
        </LayoutComponent>
    );
};

export default PegaComponent;
