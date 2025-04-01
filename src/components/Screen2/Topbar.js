import React , {useRef} from "react";
import { Link } from "react-router-dom";

const Topbar = () =>{

    const starRef = useRef(null);

    function handleStarClick(){
        if(starRef.current){
            const path = starRef.current.querySelector('path');
            if(path){
                const currentFill = path.getAttribute('fill');
                if(currentFill === "gold"){
                    path.setAttribute('fill', "#111111");
                }else{
                    path.setAttribute('fill', "gold");
                }
            }
        }
    }
    
    return(
        <>
            <div 
                className="w-[100vw] bg-white  fixed h-[56px] py-[16px] px-[24px] flex justify-between items-center text-[18px] border-[1px] border-[#white]"
            >
                <Link to={'/signin'} className="" aria-label="navigate to sign in page" title="back to sign in" >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 6L4 12M4 12L10 18M4 12H19" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Link>
                <text className="w-[71px] h-[26px] font-semibold tracking-wide text-zinc-700">
                        $25,350.0
                </text>
                <button onClick={handleStarClick} title="like" aria-label="click to give star">
                    <svg ref={starRef} width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  fill="#111111" d="M6.76253 4.41838C7.28694 3.11105 7.54914 2.45738 8.00002 2.45738C8.45091 2.45738 8.71311 3.11105 9.23751 4.41838L9.26193 4.47926C9.55819 5.21784 9.70632 5.58713 10.0082 5.81159C10.3101 6.03604 10.7064 6.07154 11.499 6.14252L11.6423 6.15535C12.9395 6.27153 13.5881 6.32962 13.7269 6.74227C13.8657 7.15493 13.384 7.59316 12.4207 8.46962L12.0991 8.76213C11.6115 9.20581 11.3676 9.42765 11.254 9.7184C11.2328 9.77264 11.2152 9.82821 11.2012 9.88475C11.1265 10.1879 11.1979 10.5097 11.3407 11.1533L11.3852 11.3537C11.6476 12.5366 11.7789 13.128 11.5497 13.3831C11.4641 13.4784 11.3529 13.5471 11.2292 13.5808C10.8984 13.6711 10.4288 13.2884 9.48949 12.523C8.87271 12.0204 8.56432 11.7691 8.21025 11.7126C8.07098 11.6903 7.92906 11.6903 7.78979 11.7126C7.43572 11.7691 7.12733 12.0204 6.51055 12.523C5.57125 13.2884 5.1016 13.6711 4.7708 13.5808C4.64719 13.5471 4.53591 13.4784 4.4503 13.3831C4.22118 13.128 4.3524 12.5366 4.61485 11.3537L4.6593 11.1533C4.80211 10.5097 4.87351 10.1879 4.79881 9.88475C4.78487 9.82821 4.76725 9.77264 4.74605 9.7184C4.6324 9.42765 4.38856 9.20581 3.90089 8.76213L3.57937 8.46962C2.61601 7.59316 2.13433 7.15493 2.27311 6.74227C2.4119 6.32962 3.0605 6.27153 4.35771 6.15535L4.50101 6.14252C5.29362 6.07154 5.68992 6.03604 5.99182 5.81159C6.29372 5.58713 6.44185 5.21784 6.73811 4.47926L6.76253 4.41838Z" />
                    </svg>
                </button>
            </div>
        </>
    )
}

export default Topbar;