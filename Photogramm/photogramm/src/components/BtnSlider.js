import React from "react";
import leftArrow from "../assets/ledt-arrow.png";
import rightArrow from "../assets/right-arrow.png";

export default function BtnSlider({ direction, moveSlide, image }) {

    return (
       <div className={"slide_btn_wrap"}>
           <div className="overlay"></div>
           <img className={"slide_btn_image"} src={image} alt=""/>
           <button
               onClick={moveSlide}
               className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
           >
               <img src={direction === "next" ?    rightArrow : leftArrow} />
           </button>
       </div>
    );
}