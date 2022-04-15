import React, { useEffect, useState } from "react";
import { FaTimes, FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getItemStorage, removeStorageElementFromItem } from "../../utils/utils";
import CardInfoComponent from "../cardInfo";

const StyledLink = styled(Link)`
    color : white !important;

    &:hover {
        color : var(--color-text-secundary-hover) !important;
    }
`

const RecentWalletComponent = () => {
    const [wallets, setWallets] = useState<string[]>([]);

    useEffect(() => {
        setWallets(getItemStorage("wallets")?.split(";"));
    }, []);

    const syncWalletsLocalStorage = () => {
        setWallets(getItemStorage('wallets')?.split(";"));
    }

    return (
        <div className="flex justify-center items-center mt-14">
            <div className="w-5/12">
                <CardInfoComponent>
                    <div className="flex flex-col justify-center items-center color-text-secundary gap-x-2 mb-12 text-base">
                        <div className="flex items-center gap-x-2 text-base"><FaWallet className="mb-0.5" size={15} /> RECENT WALLETS</div>
                        <div className="flex"><small>Your address is just saved on your browser, Pegaxy Stellar does not save anything internally</small></div>
                    </div>
                    <div className="flex flex-col justify-center">
                        {wallets?.length > 0 ? (
                            wallets.map((wallet: string) => {
                                return (
                                    <div className="flex justify-center items-center gap-x-1">
                                        <StyledLink to={`/${wallet}`}>{wallet}</StyledLink> <FaTimes onClick={() => {removeStorageElementFromItem('wallets', wallet); syncWalletsLocalStorage()}} className="color-text-secundary color-text-secundary-hover mb-0.5"/>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="flex items-center justify-center">NO WALLETS TO SHOW</div>
                        )}
                    </div>
                </CardInfoComponent>
            </div>
        </div>
    );
};

export default RecentWalletComponent;
