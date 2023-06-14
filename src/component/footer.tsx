import React from "react";
import { FaDiscord, FaEnvelope, FaFile, FaHeart, FaPager } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="flex justify-center items-center mt-10 gap-x-1">
                Made with <FaHeart size={14} color="red" /> by Vitor Dias
            </div>
            <div className="flex justify-center items-center gap-x-1 flex-wrap">
                <FaDiscord size={14} /> Sherlock7#4380 | <FaEnvelope size={14} /> pegaxystellar@gmail.com | <Link to='/changelog' className="underline flex items-center gap-x-1"><FaFile size={13}/> Changelog</Link>
            </div>
            <div className="flex flex-wrap justify-center items-center">
                <span className="flex justify-center text-center">If you want to support the project : 0xF064d0C68Bf11E390B1Dc17037f135356D045590</span>
                
            </div>
        </>
    );
}

export default Footer;
