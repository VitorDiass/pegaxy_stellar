import React, { useEffect, useState } from "react";
import { Popup, Progress, Table } from "semantic-ui-react";
import styled from "styled-components";
import { getCurrentTimestamp } from "../../utils/utils";
import { BsLightningFill } from "react-icons/bs";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

const StyledTable = styled(Table)`
    background-color: var(--color-card-bg-alt) !important;
    color: white !important;
   
`;

const StyledTableHeader = styled(Table.HeaderCell)`
    background-color: var(--color-card-bg-alt) !important;
    letter-spacing: 2px;
    color: white !important;
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
        "Winrate",
        "Raceable",
        "Breed",
        "Energy",
        <Popup content="Speed" trigger={<div>🏇</div>} />,
        <Popup content="Strength" trigger={<div>✊</div>} />,
        <Popup content="Lightning" trigger={<div>⚡</div>} />,
        <Popup content="Wind" trigger={<div>💨</div>} />,
        <Popup content="Water" trigger={<div>🌊</div>} />,
        <Popup content="Fire" trigger={<div>🔥</div>} />
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
        console.log("data",data);
        setTableData(data);
    }, [data]);

    return (
        <>
            <div className="flex ml-3 tracking-wider text-xl color-text-secundary">{title}</div>
            <StyledTable  size="small" padded compact collapsing>
                <Table.Header>
                    <Table.Row>
                        {tableHeaders.map((header: string) => {
                            return <StyledTableHeader>{header}</StyledTableHeader>;
                        })}
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {tableData.map((row: any, index: number) => {
                        const currentTimpeStamp = getCurrentTimestamp();
                        const energy = row["energy"];
                        let raceable;
                        let color = "#000000";
                        let power = row["lightning"];

                        currentTimpeStamp > row["canRaceAt"] || !row["canRaceAt"] ? (raceable = <AiOutlineCheck className="text-green-500 text-2xl mx-auto" />) : (raceable = <AiOutlineClose className="text-red-500 text-2xl mx-auto" />);

                        if (energy < 10) {
                            color = "bg-green-600";
                        } else if (energy >= 10 && energy < 20) {
                            color = "bg-yellow-600";
                        } else {
                            color = "bg-red-600";
                        }

                        return (
                            <Table.Row>
                                <Table.Cell width="1" textAlign="center">
                                    {index}
                                </Table.Cell>
                                <Table.Cell width="1" textAlign="center">
                                    {row["id"]}
                                </Table.Cell>
                                <Table.Cell width="1" textAlign="center">
                                    {row["name"]}
                                </Table.Cell>
                                <Table.Cell width="1" textAlign="center">
                                    {row["bloodLine"]}
                                </Table.Cell>
                                <Table.Cell width="1" textAlign="center">
                                    {row["gender"]?.charAt(0)}
                                </Table.Cell>
                                <Table.Cell width="1" textAlign="center">
                                    {Math.round(row["winRate"] * 100)}%
                                </Table.Cell>
                               {/*  <Table.Cell width="1" textAlign="center">
                                    {row["renterAddress"]}
                                </Table.Cell> */}
                                <Table.Cell width="1" textAlign="center">
                                    {raceable}
                                </Table.Cell>
                                <Table.Cell width="1" textAlign="center">
                                    {row["breedCount"]}
                                </Table.Cell>
                                <Table.Cell width="1" textAlign="center" className={color}>
                                    {" "}
                                    <div className="flex justify-center items-center">
                                        {row["energy"]}
                                        <BsLightningFill />
                                    </div>
                                </Table.Cell>
                                {/* <Table.Cell width="1" textAlign="center"><Popup content={<BsLightningFill/>} trigger={<span>{power}</span>}/></Table.Cell> */}
                                <Table.Cell width="1" textAlign="center">
                                    {row["speed"]}
                                </Table.Cell>
                                <Table.Cell width="1" textAlign="center">
                                    {row["strength"]}
                                </Table.Cell>
                                <Table.Cell width="1" textAlign="center">
                                    {row["lightning"]}
                                </Table.Cell>
                                <Table.Cell width="1" textAlign="center">
                                    {row["wind"]}
                                </Table.Cell>
                                <Table.Cell width="1" textAlign="center">
                                    {row["water"]}
                                </Table.Cell>
                                <Table.Cell width="1" textAlign="center">
                                    {row["fire"]}
                                </Table.Cell>
                            </Table.Row>
                        );
                    })}

                    {/*   <Table.Row>
                        <Table.Cell>POWER OUTPUT</Table.Cell>
                        <Table.Cell>POWER OUTPUT</Table.Cell>
                        <Table.Cell>POWER OUTPUT</Table.Cell>
                        <Table.Cell>POWER OUTPUT</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>POWER OUTPUT</Table.Cell>
                        <Table.Cell>POWER OUTPUT</Table.Cell>
                        <Table.Cell>POWER OUTPUT</Table.Cell>
                        <Table.Cell>POWER OUTPUT</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>POWER OUTPUT</Table.Cell>
                        <Table.Cell>POWER OUTPUT</Table.Cell>
                        <Table.Cell>POWER OUTPUT</Table.Cell>
                        <Table.Cell>POWER OUTPUT</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>POWER OUTPUT</Table.Cell>
                        <Table.Cell>POWER OUTPUT</Table.Cell>
                        <Table.Cell>POWER OUTPUT</Table.Cell>
                        <Table.Cell>POWER OUTPUT</Table.Cell>
                    </Table.Row> */}
                </Table.Body>
            </StyledTable>
        </>
    );
};

export default TableComponent;
