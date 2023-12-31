import React, { useState } from "react";
import plus from "../assets/images/icon-plus.svg";
import minus from "../assets/images/icon-minus.svg";
import {Collapse} from 'react-collapse';
export default function Accordian(props) {
  const [open, setOpen] = useState(false);
  return (
    <section className="acc">
      <div className="question flex flex-row justify-between text-[#2f1533] font-bold">
        <h1 className="text-[1rem] hover:text-[#b256d4] cursor-pointer  w-[17rem]">
          {props.question}
        </h1>
        <button
          className="cursor-pointer hover:text-[#ffffff]  transition-all duration-300 ease-linear"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? (
            <img
              className="cursor-pointer  transition-all duration-300 ease-linear"
              src={minus}
              alt="plus"
            />
          ) : (
            <img
              className="cursor-pointer  transition-all duration-300 ease-linear"
              src={plus}
              alt="plus"
            />
          )}
        </button>
      </div>
      <Collapse isOpened={open}>
      <div
        className="ans text-[0.8rem] text-[#8c6991] anidown  transition-all duration-500 ease-linear"
      >
        <p>{props.answer}</p>
      </div>
        
      </Collapse>
      
    </section>
  );
}
