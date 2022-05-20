import React from "react";
//scss
import './Card.scss'
//images
import Object from "../object/objects";


export default function Card() {
  return(
    <ul className="cards d-flex">
      {
        Object.map((item, key) => {
          return(
            <li key={key+65} className="cards__item">
            <div className="cards__imgbox">
              <img className="cards__img" src={item.img} alt={item.name} />
            </div>
            <div className="cards__box d-flex flex-column align-items-center">
              <h3 className="cards__title">{item.name}</h3>
              <p className="cards__year">{item.birth}-{item.dead}</p>

              <div className="cards__seenbox d-flex justify-content-between align-items-center">
                <p className="cards__seen"><i className='bx bxs-book-alt cards__book'></i>34</p>
                <p className="cards__seen"><i className='bx bx-headphone cards__hphone'></i> 13</p>
              </div>
            </div>
          </li>
          )
        })
      }
    </ul>
  )
}