"use client";
import React, { ReactNode, MouseEvent } from "react";
interface FlotingBtnProps{
    children: ReactNode;
    className?: string;
    alignBtn?: "top-left"| "top-right"| "bottom-left" | "bottom-right"
    onclick: (event: MouseEvent)=>void;
}



const FloatingButton:React.FC<FlotingBtnProps> = ({
    children,
    className = "",
    alignBtn = "bottom-left",
    onclick,
}) => {
    const getalignBtn = (alignBtn:string)=>{
        switch (alignBtn){
            case "top-left": 
            return "top-5 left-5";
            case "top-right":
            return"top-5 right-5";
            case "bottom-left":
            return "bottom-5 left-5";
            case "bottom-right":
            return "bottom-5 right-5";
        }
    };
    const getalignBtnclass=getalignBtn(alignBtn);
    const combinedclass=`${getalignBtnclass} ${className} fixed`
  return (
    <div>
      <button onClick={onclick} className={combinedclass}>
        {children}
      </button>
    </div>
  )
}

export {FloatingButton}
