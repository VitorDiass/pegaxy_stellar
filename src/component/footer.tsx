import React from "react";
import { FaDiscord, FaEnvelope, FaHeart } from "react-icons/fa";

function Footer() {
    return (
        <>
            {/*     <div className="flex text-base justify-center items-center gap-x-1 mt-10">
    
    </div> */}
        
                <div className="flex justify-center items-center mt-10">
                    <span className="flex justify-center items-center gap-x-1">
                        Made with <FaHeart size={14} color="red" /> by Vitor Dias
                    </span>
                </div>
                <div className="flex justify-center items-center">
                    <span className="flex justify-center items-center gap-x-1 flex-wrap">
                        <FaDiscord size={14} /> Sherlock7#4380 | <FaEnvelope size={14} /> pegaxystellar@gmail.com
                    </span>
                </div>
                <div className="flex justify-center items-center">
                    <span className="flex justify-center items-center flex-wrap text-center">If you like the project and want to donate : 0xF064d0C68Bf11E390B1Dc17037f135356D045590</span>
                </div>
        

            {/*    <div className='grid grid-cols-1 md:grid-cols-3 px-20'>
      <span className='flex items-center justify-center gap-x-1'>Made with <FaHeart size={14} color="red"/> by Vitor Dias</span>

    </div>
   */}
            {/* <div className='flex text-base justify-between items-center'>
    </div> */}
        </>
    );
}

export default Footer;
