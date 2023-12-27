import React from 'react';
import plus from '../assets/images/icon-plus.svg';
export default function Accordian(props) {
  return (
    <section className="acc">
        <div className="question flex flex-row justify-between">
            <h1 className='text-[1rem]'>{props.question}</h1>
            <button><img src={plus} alt="plus" /></button>
        </div>
        <div className="ans text-[0.8rem]">
            <p>{props.answer}</p>
        </div>
    </section>
  )
}
