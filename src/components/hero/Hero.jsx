import React, { useState } from "react";
//scss
import './Hero.scss'
//images
import hback from '../../assets/images/hero-back.png'

let herobtn = [
  {
    id: "one",
    name: "Temuriylar davri adabiyoti",
    class: true
  },
  {
    id: "two",
    name: "Jadid davri adabiyoti",
    class: false
  },
  {
    id: "three",
    name: "Sovet davri adabiyoti",
    class: false
  },
  {
    id: "four",
    name: "Mustaqillik davri adabiyoti",
    class: false
  },
]

export default function Hero() {
  return(
    <section className="hero">
      <div className="conatiner">
        <div className="hero__div">
        <ul className="hero__list d-flex">
          {
            herobtn.map((item, key) => {
              return(
                <li key={key+89} className="hero__main">
                  <div className="hero__div2">
                  <div className="hero__box">
                  <h2 className="hero__title">
                    {item.name}
                  </h2>
                  <div className="d-flex align-items-center">
                    {
                      herobtn.map((items, keys) => {
                        return(
                          <button
                          key={keys+12}
                          id={items.id}
                          className={`hero__btn ${items.class ? "hero__activ" : ""}`}></button>
                        )
                      })
                    }
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