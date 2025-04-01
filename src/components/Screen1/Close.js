import React from "react";
import { Link } from "react-router-dom";

const Close = () =>{
    return (
        <div className="w-full h-[56px] py-[16px] pl-[24px] border-[1px] border-[#CFCFCF] fade-up">
            <Link to={'/home'} className="" aria-label="navigate to sign in page" title="back to sign in" >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 6L4 12M4 12L10 18M4 12H19" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </Link>
        </div>
    )
}

export default Close;