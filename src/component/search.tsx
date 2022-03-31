import React, { useEffect, useState } from "react";
import { Icon, Input } from "semantic-ui-react";
import { FaWallet } from "react-icons/fa";

import styled from "styled-components";

const StyledInput = styled(Input)`
    background: none !important;
    border: none !important;
    color: black !important;
    min-height: 50px !important;
    font-size: 15px !important;

    input {
        color: black !important;
        border-radius: 50px !important;
    }
`;

interface Search {
    handleSearchInput: Function;
}

const SearchComponent = ({ handleSearchInput }: Search) => {
    const [textInput, setTextInput] = useState("");

    const handleKeyEvent = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === "Enter") {
            handleSearchInput(textInput);
        }
    };

    return (
        <div className="flex justify-center mt-14">
            <StyledInput
                loading={false}
                iconPosition="left"
                className="w-5/12"
                placeholder="Type your wallet address here..."
                onChange={(event: any) => {
                    //console.log(event.target.value)
                    if (event.target.value === "") {
                        handleSearchInput(event.target.value);
                    }
                    setTextInput(event?.target?.value || "");
                }}
            >
                <Icon name="search" link onClick={() => handleSearchInput(textInput)} />

                <input onKeyUp={handleKeyEvent} />

                {/* <Icon className="!flex !items-center !opacity-100"> <FaWallet size={25} alignmentBaseline="middle" color="var(--color-success)"/> </Icon>
                 */}
            </StyledInput>
        </div>
    );
};

export default SearchComponent;
