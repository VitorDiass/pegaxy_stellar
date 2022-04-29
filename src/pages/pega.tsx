import React, { useEffect, useState } from "react";
import { FaBirthdayCake, FaCalendar, FaFemale, FaHorse, FaStar, FaVenus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import CardInfoComponent from "../component/cardInfo";
import EnergyBarsComponent from "../component/bars/bars";
import LayoutComponent from "../component/layout";
import PegaStatusComponent from "../component/pegaStatus/pegaStatus";
import SingleStatusComponent from "../component/pegaStatus/singleStatus";
import StatusBarComponent from "../component/statusbar";
import { getPegaDesignService } from "../services/endpoints/game-api";
import { getPegaInfoService } from "../services/endpoints/pegas";
import { MAX_PEGA_ENERGY, MAX_PEGA_STATUS, timestampToHumanDate } from "../utils/utils";
import BarsComponent from "../component/bars/bars";
import { Divider, Label, Segment } from "semantic-ui-react";

const PegaComponent = () => {
    const { pegaid } = useParams();
    const [pegaDesign, setPegaDesign] = useState<any>();
    const [pegaInfo, setPegaInfo] = useState<any>();

    useEffect(() => {
        const getPegaDesign = async (pegaid: string) => {
            const response = await getPegaDesignService(pegaid);
            if (response) {
                setPegaDesign(response.data?.pega?.design);
            }
        };

        const getPegaInfo = async (pegaId: string) => {
            const response = await getPegaInfoService(pegaid);
            if (response) {
                setPegaInfo(response.data);
            }
        };

        getPegaDesign(pegaid);
        getPegaInfo(pegaid);
    }, []);

    return (
        <LayoutComponent>
            <StatusBarComponent gobackprop={true} />
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 p-20">
                <div className="row-span-6">
                    <CardInfoComponent hoverActive={true}>
                        <div className="flex flex-col justify-center items-center">
                            <span className="text-xl color-text-secundary">#{pegaid}</span>
                            <span className="text-3xl">{pegaInfo?.name}</span>
                        </div>
                        <div className="flex justify-center items-center pb-10">
                            <img src={pegaDesign?.avatar} width={450} height={450} alt="pega"></img>
                        </div>
                        <div className="grid grid-cols-4 text-base text-center">
                            <div className="flex items-center gap-x-1 justify-center">
                                <FaVenus />
                                {pegaInfo?.gender}
                            </div>
                            <div className="flex items-center gap-x-1 justify-center">
                                <FaHorse />
                                {pegaInfo?.bloodLine}
                            </div>
                            <div className="flex items-center gap-x-1 justify-center">
                                <FaStar />
                                {pegaInfo?.breedType}
                            </div>
                            <div className="flex items-center gap-x-1 justify-center">
                                <FaBirthdayCake />
                                {timestampToHumanDate(pegaInfo?.bornTime)}
                            </div>
                        </div>
                    </CardInfoComponent>
                </div>
                <div className="row-span-6 grid grid-cols-1 xl:grid-cols-2 gap-5">
                    <div className="flex">
                        <CardInfoComponent hoverActive={true}>
                            <h2 className="text-2xl mb-10">PLACE STATS</h2>
                            <div className="flex">
                                <div className="text-lg mr-10">WINRATE</div>
                                <div className="text-lg">{((pegaInfo?.win / pegaInfo?.pegaTotalRaces) * 100).toFixed(3)} %</div>
                            </div>
                            <div className="flex mt-8">
                                <div className="text-lg mr-10">WIN</div>
                                <div className="text-lg">{pegaInfo?.win}</div>
                            </div>
                            <div className="flex mt-8">
                                <div className="text-lg mr-10">LOST</div>
                                <div className="text-lg">{pegaInfo?.lose}</div>
                            </div>
                        </CardInfoComponent>
                    </div>
                    <div className="flex">
                        <CardInfoComponent hoverActive={true}>
                            <h2 className="text-2xl mb-10">STATUS</h2>
                            <div className="grid grid-cols-6 gap-y-8 mb-6">
                                <span className="col-span-2 text-lg">SPEED</span>
                                <span className="pega-status-speed text-lg">{pegaInfo?.speed}</span>
                                <SingleStatusComponent value={pegaInfo?.speed} totalProgress={MAX_PEGA_STATUS} className="col-span-3 status-speed !bg-transparent !m-0" />
                                <span className="col-span-2 text-lg">STRENGTH</span>
                                <span className="pega-status-strength text-lg">{pegaInfo?.strength}</span>
                                <SingleStatusComponent value={pegaInfo?.strength} totalProgress={MAX_PEGA_STATUS} className="col-span-3 status-strength !bg-transparent !m-0" />
                                <span className="col-span-2 text-lg">LIGHTNING</span>
                                <span className="pega-status-lightning text-lg">{pegaInfo?.lightning}</span>
                                <SingleStatusComponent value={pegaInfo?.lightning} totalProgress={MAX_PEGA_STATUS} className="col-span-3 status-lightning !bg-transparent !m-0" />
                                <span className="col-span-2 text-lg">WIND</span>
                                <span className="pega-status-wind text-lg">{pegaInfo?.wind}</span>
                                <SingleStatusComponent value={pegaInfo?.wind} totalProgress={MAX_PEGA_STATUS} className="col-span-3 status-wind !bg-transparent !m-0" />
                                <span className="col-span-2 text-lg">WATER</span>
                                <span className="pega-status-water text-lg">{pegaInfo?.water}</span>
                                <SingleStatusComponent value={pegaInfo?.water} totalProgress={MAX_PEGA_STATUS} className="col-span-3 status-water !bg-transparent !m-0" />
                                <span className="col-span-2 text-lg">FIRE</span>
                                <span className="pega-status-fire text-lg">{pegaInfo?.fire}</span>
                                <SingleStatusComponent value={pegaInfo?.fire} totalProgress={MAX_PEGA_STATUS} className="col-span-3 status-fire !bg-transparent !m-0" />
                            </div>
                            <Divider/>
                            <div className="flex gap-x-10 items-center mt-6">
                                <span className="text-lg">ENERGY</span>
                                <SingleStatusComponent progressType="ratio" value={pegaInfo?.energy} totalProgress={MAX_PEGA_ENERGY} className="flex flex-1 inverted !m-0 pega-energy" />
                            </div>
                            <div className="flex gap-x-1 mt-10">
                                <span className="text-lg mr-10">BREEDS</span>
                                <BarsComponent currentlvl={pegaInfo?.breedCount} maxlvl={7} />
                            </div>
                            <div className="flex mt-10">
                                <span className="text-lg mr-10">SERVICE</span>
                                <Label>{pegaInfo?.inService}</Label>
                            </div>
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
