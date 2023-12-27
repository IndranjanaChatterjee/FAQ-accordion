import React from 'react';
import plus from '../assets/images/icon-plus.svg';
export default function Accordian(props) {
  return (
    <section className="acc">
        <div className="question flex flex-row justify-between text-[#2f1533] font-bold">
            <h1 className='text-[1rem] hover:text-[#b256d4] cursor-pointer'>{props.question}</h1>
            <button><img src={plus} alt="plus" /></button>
        </div>
        <div className="ans text-[0.8rem] text-[#8c6991]">
            <p>{props.answer}</p>
        </div>
    </section>
  )
}
