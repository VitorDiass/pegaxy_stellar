import React, { useEffect, useState } from "react";
import { Popup, Progress, Table } from "semantic-ui-react";
import styled from "styled-components";
import { checkIfHorseIsBreedable, checkIfHorseIsRaceable, EnergyValueToColor, getCurrentTimestamp, getCurrentTimestampMidnight } from "../../utils/utils";
import { BsLightningFill } from "react-icons/bs";
import { AiOutlineCheck, AiOutlineClose, AiOutlineInfoCircle } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { PEGAXY_GAME_ENDPOINTS } from "../../services/apiconfig";
import { HiOutlineExternalLink } from "react-icons/hi";

const StyledTable = styled(Table)`
    background-color: var(--color-card-bg-alt) !important;
    color: white !important;
`;

const StyledTableHeader = styled(Table.HeaderCell)`
    background-color: var(--color-card-bg-alt) !important;
    color: white !important;
    letter-spacing: 2px;
    text-align: center !important;
`;

interface TableProps {
    data?: object[];
    title?: string;
}

interface HeaderMapping {
    [key: string]: string;
}

const TableComponent = ({ data, title }: TableProps) => {
    const [tableHeaders, setTableHeaders] = useState([
        "No",
        "ID",
        "Name",
        "Bloodline",
        "Gender",
        "Winrate | Races",
        "Raceable",
        "Breadable",
        "Rented",
        "Breed",
        <Popup content="Speed" trigger={<div>🏇</div>} />,
        <Popup content="Strength" trigger={<div>✊</div>} />,
        <Popup content="Lightning" trigger={<div>⚡</div>} />,
        <Popup content="Wind" trigger={<div>💨</div>} />,
        <Popup content="Water" trigger={<div>🌊</div>} />,
        <Popup content="Fire" trigger={<div>🔥</div>} />,
        "🥇",
        "🥈",
        "🥉",
        "Energy",
    ]);
    const [objectHeaderNames, setObjectHeaderNames] = useState(["no", "id", "name", "bloodLine", "energy", "gender", "winRate", "renterAddress"]);
    const [tableData, setTableData] = useState([]);

    /**[
        { id: 34324, name: "Fio", bloodLine: "Zan", energy: 9, gender: "Female", winRate: 0.25, renterAddress: "0xda46C0D6125C132393EFdc60d9F19DAa7E972674", canRaceAt: 1647649381, breedCount: 1, lightning: 6.25 },
        { id: 34324, name: "Fio", bloodLine: "Zan", energy: 9, gender: "Female", winRate: 0.25, renterAddress: "0xda46C0D6125C132393EFdc60d9F19DAa7E972674", canRaceAt: 1648820527 },
        { id: 34324, name: "Fio", bloodLine: "Zan", energy: 16, gender: "Female", winRate: 0.25, renterAddress: "0xda46C0D6125C132393EFdc60d9F19DAa7E972674" },
        { id: 34324, name: "Fio", bloodLine: "Zan", energy: 25, gender: "Female", winRate: 0.25, renterAddress: "0xda46C0D6125C132393EFdc60d9F19DAa7E972674" },
    ]*/

    const headermapping: HeaderMapping = {
        no: "No",
        id: "ID",
        name: "PEGA",
        bloodLine: "Bloodline",
        energy: "Energy",
        gender: "Gender",
        winRate: "Winrate",
        renterAddress: "Renter Wallet",
    };

    useEffect(() => {
        setTableData(data);
    }, [data]);

    return (
        <>
            <div className="flex ml-3 tracking-wider text-xl color-text-secundary">{title}</div>
            <div className="w-full overflow-x-scroll">
                <StyledTable size="small" unstackable padded compact selectable inverted>
                    <Table.Header>
                        <Table.Row>
                            {tableHeaders.map((header: string) => {
                                return <StyledTableHeader>{header}</StyledTableHeader>;
                            })}
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {tableData.map((row: any, index: number) => {
                            const currentTimeStamp = getCurrentTimestamp();
                            const isHorseRaceable = checkIfHorseIsRaceable(row['canRaceAt'], currentTimeStamp);
                            const isHorseBreadable = checkIfHorseIsBreedable(row['lastBreedTime'],currentTimeStamp, row['bornTime'],row['bloodLine']);
                            let raceable;
                            let breedable;
                            let energyColor = EnergyValueToColor(row['energy']);

                            isHorseRaceable ? (raceable = <AiOutlineCheck className="text-green-500 text-2xl mx-auto" />) : (raceable = <AiOutlineClose className="text-red-500 text-2xl mx-auto" />);
                            isHorseBreadable ? (breedable = <AiOutlineCheck className="text-green-500 text-2xl mx-auto" />) : (breedable = <AiOutlineClose className="text-red-500 text-2xl mx-auto" />);
                            //currentTimeStamp > row["canRaceAt"] 

                            return (
                                <Table.Row>
                                    <Table.Cell textAlign="center">{index}</Table.Cell>
                                    <Table.Cell textAlign="center" className="text-center cursor-pointer" onClick={() => window.open(`https://${PEGAXY_GAME_ENDPOINTS.PEGAXY}/${PEGAXY_GAME_ENDPOINTS.MYASSETS}/${PEGAXY_GAME_ENDPOINTS.PEGA}/${row["id"]}`, "_blank")}>
                                        <div className="flex justify-center items-center gap-x-2">
                                            {row["id"]} <HiOutlineExternalLink size={14} />
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell textAlign="center">{row["name"]}</Table.Cell>
                                    <Table.Cell textAlign="center">{row["bloodLine"]}</Table.Cell>
                                    <Table.Cell textAlign="center">{row["gender"]?.charAt(0)}</Table.Cell>
                                    <Table.Cell textAlign="center"><span className="flex justify-center items-center gap-x-1">{Math.round(row["winRate"] * 100)}% <span>| {row['totalRaces']}</span></span></Table.Cell>
                                    <Table.Cell textAlign="center">{raceable}</Table.Cell>
                                    <Table.Cell textAlign="center">{breedable}</Table.Cell>
                                    <Table.Cell textAlign="center">{row['renterAddress'] ? <AiOutlineCheck className="text-green-500 text-2xl mx-auto" /> : <AiOutlineClose className="text-red-500 text-2xl mx-auto"/>}</Table.Cell>
                                    <Table.Cell textAlign="center">{row["breedCount"]}</Table.Cell>
                                    {/* <Table.Cell textAlign="center"><Popup content={<BsLightningFill/>} trigger={<span>{power}</span>}/></Table.Cell> */}
                                    <Table.Cell textAlign="center">{row["speed"]}</Table.Cell>
                                    <Table.Cell textAlign="center">{row["strength"]}</Table.Cell>
                                    <Table.Cell textAlign="center">{row["lightning"]}</Table.Cell>
                                    <Table.Cell textAlign="center">{row["wind"]}</Table.Cell>
                                    <Table.Cell textAlign="center">{row["water"]}</Table.Cell>
                                    <Table.Cell textAlign="center">{row["fire"]}</Table.Cell>
                                    <Table.Cell textAlign="center">{row["gold"]}</Table.Cell>
                                    <Table.Cell textAlign="center">{row["silver"]}</Table.Cell>
                                    <Table.Cell textAlign="center">{row["bronze"]}</Table.Cell>
                                    <Table.Cell textAlign="center" className={energyColor}>
                                        <div className="flex justify-center items-center">
                                            {row["energy"]}
                                            <BsLightningFill />
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                            )
                        })}
                    </Table.Body>
                </StyledTable>
            </div>
        </>
    );
};

export default TableComponent;
