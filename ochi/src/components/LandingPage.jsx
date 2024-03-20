import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textStructure mt-[12rem] px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
                <div className="w-fit flex items-end">
                    {index === 1 && (<div className="w-[8vw] mr-[1vw] h-[5.8vw] rounded-md relative top-[0vw] bg-red-500"></div>)}
                    <h1 key={index} className="uppercase text-[9vw] h-full leading-[7vw] font-['FoundersGrotesk'] ">
                        {item}
                    </h1>
                </div>
            </div>
          );
        })}
        
      </div>

      <div className="border-t-[1px]  border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {["For public and private companies","From the first pitch to IPO"].map((item,index)=>{
            return <p key={index} className="text-md font-light tracking-tight leading-none">{item}</p>
        })}
      <div className="start flex items-center gap-5">
        <div className="px-4 uppercase py-2 border-[1px] border-zinc-400 font-light text-medium rounded-full">Start the project</div>
        <div className="w-10 h-10 rounded-full border-[1px] flex items-center justify-center border-zinc-500">
            <span className="rotate-[45deg]">
                <FaArrowUpLong/>
            </span>
        </div>
      </div>
      </div>
    </div>
  );
}

export default LandingPage;
