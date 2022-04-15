import React, { SyntheticEvent, useEffect, useState } from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { BsLightningFill } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Dropdown, Popup, Table } from "semantic-ui-react";
import styled from "styled-components";
import { PEGAXY_GAME_ENDPOINTS } from "../../services/apiconfig";
import { checkIfHorseIsBreedable, checkIfHorseIsRaceable, getCurrentTimestamp } from "../../utils/utils";

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

const StyledDropdown = styled(Dropdown)`
    //color : var(--color-text-secundary);
`;

interface TableProps {
    data?: object[];
    title?: string;
}

interface HeaderMapping {
    [key: string]: string;
}

const TableComponent = ({ data, title }: TableProps) => {
    const [sortdir, setSortdir] = useState("ascending");
    const [sortby, setSortby] = useState("name");

    const [tableHeaders, setTableHeaders] = useState([
        { key: "orderby", text: "Order by", value: "orderby", disabled: true, isHeader: false },
        { key: "no", text: "No", value: "no", disabled: true },
        { key: "id", text: "ID", value: "id" },
        { key: "name", text: "Name", value: "name" },
        { key: "bloodline", text: "Bloodline", value: "bloodLine" },
        { key: "breedType", text: "Rarity", value: "breedType" },
        { key: "gender", text: "Gender", value: "gender" },
        { key: "winrate", text: "Winrate", value: "winRate" },
        { key: "totalraces", text: "Races", value: "totalRaces", isHeader: false },
        { key: "raceable", text: "Raceable", value: "canRaceAt" },
        { key: "breedable", text: "Breedable", value: "canBreedAt" },
        { key: "rented", text: "Rented", value: "renterAddress" },
        { key: "breed", text: "Breed", value: "breedCount" },
        { key: "speed", text: <Popup content="Speed" trigger={<div>🏇</div>} />, value: "speed" },
        { key: "strength", text: <Popup content="Strength" trigger={<div>✊</div>} />, value: "strength" },
        { key: "lightning", text: <Popup content="Lightning" trigger={<div>⚡</div>} />, value: "lightning" },
        { key: "wind", text: <Popup content="Wind" trigger={<div>💨</div>} />, value: "wind" },
        { key: "water", text: <Popup content="Water" trigger={<div>🌊</div>} />, value: "water" },
        { key: "fire", text: <Popup content="Fire" trigger={<div>🔥</div>} />, value: "fire" },
        { key: "gold", text: "🥇", value: "gold" },
        { key: "silver", text: "🥈", value: "silver" },
        { key: "bronze", text: "🥉", value: "bronze" },
        { key: "energy", text: "Energy", value: "energy" },
    ]);

    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        setTableData(sortdata(sortdir, sortby, data));
    }, [data]);

    const sortdata = (direction: string, column: string, data: any) => {
        let sorted = data.sort((a: any, b: any) => {
            if (typeof a[column] === "string") {
                return a[column].localeCompare(b[column]);
            } else {
                if (a[column] < b[column]) {
                    return -1;
                }
                if (a[column] > b[column]) {
                    return 1;
                }
                return 0;
            }
        });

        if (direction === "descending") {
            sorted = sorted.reverse();
        }
        return sorted;
    };

    useEffect(() => {
        let sortedData = new Array();
        sortedData = sortdata(sortdir, sortby, data).slice();
        setTableData(sortedData);
    }, [sortdir, sortby]);

    return (
        <>
            <div className="flex ml-3 tracking-wider text-xl color-text-secundary">{title}</div>
            <div className="flex justify-start items-center gap-x-3 mb-2">
                <StyledDropdown
                    scrolling
                    inline
                    placeholder="Sort Direction"
                    value={sortdir}
                    options={[
                        { key: "sortdirection", text: "Sort Direction", value: "sortdirection", disabled: true },
                        { key: "ascending", text: "Ascending", value: "ascending" },
                        { key: "descending", text: "Descending", value: "descending" },
                    ]}
                    onChange={(event: SyntheticEvent, data: any) => {
                        setSortdir(data.value);
                    }}
                />
                <StyledDropdown
                    scrolling
                    inline
                    placeholder="Sort by"
                    value={sortby}
                    options={tableHeaders}
                    onChange={(event: SyntheticEvent, data: any) => {
                        setSortby(data.value);
                    }}
                />
            </div>
            <div className="w-full overflow-x-scroll">
                <StyledTable size="small" unstackable padded compact selectable inverted>
                    <Table.Header>
                        <Table.Row>
                            {tableHeaders.map((header: any) => {
                                return header.isHeader !== false && <StyledTableHeader>{header.text}</StyledTableHeader>;
                            })}
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {tableData?.length === 0 ? (
                            <Table.Row>
                                <Table.Cell textAlign="center" colSpan={tableHeaders.length}>
                                    NO DATA TO SHOW
                                </Table.Cell>
                            </Table.Row>
                        ) : (
                            tableData.map((row: any, index: number) => {
                                const currentTimeStamp = getCurrentTimestamp();
                                const isHorseRaceable = checkIfHorseIsRaceable(row["canRaceAt"], currentTimeStamp);
                                const isHorseBreadable = checkIfHorseIsBreedable(row["lastBreedTime"], currentTimeStamp, row["bornTime"], row["bloodLine"]);
                                let raceable;
                                let breedable;
                                let color = "#000000";
                                const energylvl = row["energy"];

                                if (energylvl >= 0 && energylvl <= 25) {
                                    if (energylvl >= 0 && energylvl < 10) {
                                        color = "bg-green-700";
                                    } else if (energylvl >= 10 && energylvl < 19) {
                                        color = "bg-yellow-700";
                                    } else {
                                        color = "bg-red-700";
                                    }
                                }

                                isHorseRaceable ? (raceable = <AiOutlineCheck className="text-green-500 text-2xl mx-auto" />) : (raceable = <AiOutlineClose className="text-red-500 text-2xl mx-auto" />);
                                isHorseBreadable ? (breedable = <AiOutlineCheck className="text-green-500 text-2xl mx-auto" />) : (breedable = <AiOutlineClose className="text-red-500 text-2xl mx-auto" />);

                                return (
                                    <Table.Row key={index}>
                                        <Table.Cell  textAlign="center">{index}</Table.Cell>
                                        <Table.Cell textAlign="center" className="text-center cursor-pointer" onClick={() => window.open(`https://${PEGAXY_GAME_ENDPOINTS.PEGAXY}/${PEGAXY_GAME_ENDPOINTS.MYASSETS}/${PEGAXY_GAME_ENDPOINTS.PEGA}/${row["id"]}`, "_blank")}>
                                            <div className="flex justify-center items-center gap-x-2">
                                                {row["id"]} <HiOutlineExternalLink size={14} />
                                            </div>
                                        </Table.Cell>
                                        <Table.Cell textAlign="center">{row["name"]}</Table.Cell>
                                        <Table.Cell textAlign="center">{row["bloodLine"]}</Table.Cell>
                                        <Table.Cell textAlign="center">{row["breedType"]}</Table.Cell>
                                        <Table.Cell textAlign="center">{row["gender"]?.charAt(0)}</Table.Cell>
                                        <Table.Cell textAlign="center">
                                            <span className="flex justify-center items-center gap-x-1">
                                                {Math.round(row["winRate"] * 100)}% <span>| {row["totalRaces"]}</span>
                                            </span>
                                        </Table.Cell>
                                        <Table.Cell textAlign="center">{raceable}</Table.Cell>
                                        <Table.Cell textAlign="center">{breedable}</Table.Cell>
                                        <Table.Cell textAlign="center">{row["renterAddress"] ? <AiOutlineCheck className="text-green-500 text-2xl mx-auto" /> : <AiOutlineClose className="text-red-500 text-2xl mx-auto" />}</Table.Cell>
                                        <Table.Cell textAlign="center">{row["breedCount"]}</Table.Cell>
                                        <Table.Cell textAlign="center" className="pega-status-speed">
                                            {row["speed"]}
                                        </Table.Cell>
                                        <Table.Cell textAlign="center" className="pega-status-strength">
                                            {row["strength"]}
                                        </Table.Cell>
                                        <Table.Cell textAlign="center" className="pega-status-lightning">
                                            {row["lightning"]}
                                        </Table.Cell>
                                        <Table.Cell textAlign="center" className="pega-status-wind">
                                            {row["wind"]}
                                        </Table.Cell>
                                        <Table.Cell textAlign="center" className="pega-status-water">
                                            {row["water"]}
                                        </Table.Cell>
                                        <Table.Cell textAlign="center" className="pega-status-fire">
                                            {row["fire"]}
                                        </Table.Cell>
                                        <Table.Cell textAlign="center">{row["gold"]}</Table.Cell>
                                        <Table.Cell textAlign="center">{row["silver"]}</Table.Cell>
                                        <Table.Cell textAlign="center">{row["bronze"]}</Table.Cell>
                                        <Table.Cell textAlign="center" className={color}>
                                            <div className="flex justify-center items-center">
                                                {row["energy"]}
                                                <BsLightningFill />
                                            </div>
                                        </Table.Cell>
                                    </Table.Row>
                                );
                            })
                        )}
                    </Table.Body>
                </StyledTable>
            </div>
        </>
    );
};

export default TableComponent;
