import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "../../data";
import "./Review.css";
import { FiGithub } from "react-icons/fi";


const Review = () => {
  const [index, setIndex] = useState(0);

  const {name, job, image, text , github} = people[index];

  const checkNumber = (number) => {
    if (number > people.length -1) {
      return 0;
    }
    if (number < 0) {
      return people.length -1
    }
    return number;
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      // return newIndex;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      // return newIndex;
      return checkNumber(newIndex)
    });
  };

//   const randomPerson = () => {
//     let randomNumber = Math.floor(Math.random() * people.length)
//     if (randomNumber === index) {
//       randomNumber = index + 1
//     }
//     setIndex(checkNumber(randomNumber))
//   }

  return (
    <>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="name">{name}</h4>
        <p className="job">{job}</p>
        <p className="desc">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
          <button className="random-btn">
            <FiGithub /> {github}
          </button>
      </article>
    </>
  );
};

export default Review;