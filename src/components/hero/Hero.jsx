import React, { useState } from "react";
//scss
import './Hero.scss'

let herobtn = [
  {
    id: "one",
    name: "Temuriylar davri adabiyoti",
  },
  {
    id: "two",
    name: "Jadid davri adabiyoti",
  },
  {
    id: "three",
    name: "Sovet davri adabiyoti",
  },
  {
    id: "four",
    name: "Mustaqillik davri adabiyoti",
  },
]

export default function Hero() {
  let [px, setPx] = useState("one")

  const btnHandlerOne = () => {
    setPx("one");
  };
  const btnHandlerTwo = () => {
    setPx("two");
  };
  const btnHandlerThree = () => {
    setPx("three");
  };
  const btnHandlerFour = () => {
    setPx("four");
  };

  return(
    <section className="hero">
      <div className="conatiner">
        <div className="hero__main">
        <ul className="hero__list d-flex">
          {
            herobtn.map((item, key) => {
              return(
                <li key={key+89} className="hero__item">
                  <div
                  className={`${
                    px === "one"
                    ? "hero__one"
                    : px === "two"
                    ? "hero__two"
                    : px === "three"
                    ? "hero__three"
                    : px === "four"
                    ? "hero__four"
                    : px === ""
                  } hero__itembox`}>
                    <div className="hero__box">
                    <h2 className="hero__title">
                      {item.name}
                    </h2>
                    <div className="d-flex align-items-center">
                    <button
                      onClick={btnHandlerOne}
                      className={`hero__btn ${px === "one" ? "hero__activ" : ""}`}
                    ></button>
                    <button
                      onClick={btnHandlerTwo}
                      className={`hero__btn ${px === "two" ? "hero__activ" : ""}`}
                    ></button>
                    <button
                      onClick={btnHandlerThree}
                      className={`hero__btn ${px === "three" ? "hero__activ" : ""}`}
                    ></button>
                    <button
                      onClick={btnHandlerFour}
                      className={`hero__btn ${px === "four" ? "hero__activ" : ""}`}
                    ></button>
                    </div>
                  </div>
                </div>
              </li>
            )})
          }
        </ul>
      </div>
      </div>
    </section>
  )
}
