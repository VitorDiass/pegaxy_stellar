import React, { useEffect, useState } from "react";
import { FaBirthdayCake, FaCalendar, FaFemale, FaHorse, FaStar, FaVenus } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import CardInfoComponent from "../component/cardInfo";
import EnergyBarsComponent from "../component/bars/bars";
import LayoutComponent from "../component/layout";
import PegaStatusComponent from "../component/pegaStatus/pegaStatus";
import SingleStatusComponent from "../component/pegaStatus/singleStatus";
import StatusBarComponent from "../component/statusbar";
import { getPegaDesignService, getPegaRaceHistoryService } from "../services/endpoints/game-api";
import { getPegaInfoService, pegaEarningsService } from "../services/endpoints/pegas";
import { MAX_PEGA_ENERGY, MAX_PEGA_STATUS, REWARDS_UPDATE_TIMESTAMP, timestampToHumanDate } from "../utils/utils";
import BarsComponent from "../component/bars/bars";
import { Divider, Label, Segment } from "semantic-ui-react";
import SearchComponent from "../component/search";
import { MyToaster, TOAST_TYPE } from "../toast/toast";

const PegaComponent = () => {
    const { pegaid } = useParams();
    const navigate = useNavigate();
    const [pegaDesign, setPegaDesign] = useState<any>();
    const [pegaInfo, setPegaInfo] = useState<any>();
    const [pegaEarnings, setPegaEarnings] = useState<any>();
    const [avgVisDay, setAvgVisDay] = useState(0);
    const [avgVisRace, setAvgVisRace] = useState(0);

    useEffect(() => {
        const getPegaDesign = async (pegaId: string) => {
            const response = await getPegaDesignService(pegaId);
            if (response) {
                setPegaDesign(response.data?.pega?.design);
            }
        };

        const getPegaInfo = async (pegaId: string) => {
            const response = await getPegaInfoService(pegaId);
            if (response) {
                setPegaInfo(response.data);
            }
        };

        const getPegaEarnings = async (pegaId: string) => {
            const response = await pegaEarningsService(pegaId, REWARDS_UPDATE_TIMESTAMP);
            if (response) {
                let totalRewards = 0;
                let totalDays = response.data?.length || 0;

                response.data?.map((epoch: any) => {
                    totalRewards += epoch["ownerPegaRewards"] + epoch["renterPegaRewards"];
                });
                const avgvisday = totalDays !== 0 ? totalRewards / totalDays : 0;
                setAvgVisDay(avgvisday);
            }
        };

        const getPegaRaceHistory = async (pegaId: string) => {
            const response = await getPegaRaceHistoryService(pegaId);
            if (response) {
                let totalRewardsRaces = 0;
                let totalRaces = response.data?.data?.length || 0;

                response.data?.data?.map((race: any) => {
                    totalRewardsRaces += race["reward"];
                });
                console.log(totalRaces, totalRewardsRaces);
                const avgvisrace = totalRaces !== 0 ? totalRewardsRaces / totalRaces : 0;
                setAvgVisRace(avgvisrace);
            }
        };

        getPegaDesign(pegaid);
        getPegaInfo(pegaid);
        getPegaEarnings(pegaid);
        getPegaRaceHistory(pegaid);
    }, [pegaid]);

    const handleSearchPegaInput = (input : string) => {
        if(typeof input === 'string' && input){
            
            const pegaIdRegex = new RegExp("^[0-9]+$");
            const isValidInput = pegaIdRegex.test(input);
      
            if(isValidInput){
              navigate(`/pega/${input}`)
            }else{
              MyToaster('NOT A VALID PEGA ID','pega_input',TOAST_TYPE.ERROR);
            }
          }
    }

    return (
        <LayoutComponent>
            <StatusBarComponent gobackprop={true} />
            <SearchComponent handleSearchInput={handleSearchPegaInput} placeholder='Type pega ID here...' className="w-1/4"/>
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
                            <div className="grid grid-cols-2 gap-y-8">
                                <div className="text-lg">WINRATE</div>
                                <div className="text-lg">{((pegaInfo?.win / pegaInfo?.pegaTotalRaces) * 100).toFixed(3)} %</div>
                                <div className="text-lg">WIN</div>
                                <div className="text-lg">{pegaInfo?.win}</div>
                                <div className="text-lg">LOST</div>
                                <div className="text-lg">{pegaInfo?.lose}</div>
                                <div className="text-lg">AVG VIS/DAY</div>
                                <span className="flex items-center gap-x-2">
                                    <img className="mb-0.5" src="/images/vis.png" width={20} />
                                    <div className="text-lg">{avgVisDay.toFixed(2)}</div>
                                </span>
                                <div className="text-lg">AVG VIS/RACE</div>
                                <span className="flex items-center gap-x-2">
                                    <img className="mb-0.5" src="/images/vis.png" width={20} />
                                    <div className="text-lg">{avgVisRace.toFixed(2)}</div>
                                </span>
                            </div>
                            <div className="grid grid-cols-2 gap-y-8"></div>
                            <Divider className="!my-6" />
                            <h2 className="text-2xl mb-10">PARENTS</h2>
                            <div className="grid grid-cols-2 gap-y-8">
                                <div className="text-lg">MOTHER</div>
                                <div className="text-lg"><Link to={`/pega/${pegaInfo?.motherId}`} className="underline">{pegaInfo?.motherId}</Link></div>
                            <div className="text-lg">FATHER</div>
                            <div className="text-lg"><Link to={`/pega/${pegaInfo?.fatherId}`} className="underline">{pegaInfo?.fatherId}</Link></div>
                            </div>

                            {/*  <div className="flex mt-8"></div>
                            <div className="flex mt-8"></div> */}
                        </CardInfoComponent>
                    </div>
                    <div className="flex">
                        <CardInfoComponent hoverActive={true}>
                            <h2 className="text-2xl mb-10">STATUS</h2>
                            <div className="grid grid-cols-6 gap-y-8">
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
                            <Divider className="!my-6" />
                            <div className="flex gap-x-10 items-center">
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
