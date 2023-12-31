import React from "react";
import Accordian from "./Accordian";
import star from '../assets/images/icon-star.svg';
export default function Faqs() {
  return (
    <div className="md:w-[32rem] w-[20rem] m-[1rem] font-['Work_Sans'] flex flex-col justify-start gap-[1rem] bg-[#ffffff] p-[2rem] shadow-lg rounded-[1rem]" >
        <span className="flex flex-row justify-start gap-[1rem]">
            <img src={star} alt="star" />
            <h1 className="text-3xl text-[#2f1533] font-extrabold">FAQs</h1>
        </span>
      <Accordian
        question="What is Frontend Mentor, and how will it help me?"
        answer="Frontend Mentor offers realistic coding challenges to help developers improve their 
  frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
  all levels and ideal for portfolio building."
      />
      <Accordian
        question=" Is Frontend Mentor free?"
        answer="Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
        option providing access to a range of projects suitable for all skill levels."
      />
      <Accordian
        question="Can I use Frontend Mentor projects in my portfolio?"
        answer="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
        way to showcase your skills to potential employers!"
      />
      <Accordian
        question="How can I get help if I'm stuck on a Frontend Mentor challenge?"
        answer="The best place to get help is inside Frontend Mentor's Discord community. There's a help 
        channel where you can ask questions and seek support from other community members."
      />
    </div>
  );
}
