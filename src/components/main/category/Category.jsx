import React from "react";
//scss
import './Category.scss'

let category = [
  {
    id: "temuriylar",
    name: "Temuriylar davri",
    class: false
  },
  {
    id: "jadid",
    name: "Jadid adabiyoti",
    class: true
  },
  {
    id: "sovet",
    name: "Sovet davri",
    class: false
  },
  {
    id: "mustaqillik",
    name: "Mustaqillik davri",
    class: false
  },
]

export default function Category() {

  let btnClick = (e) => {
    category.map(item => {
      if(e.target.id == item.id) {
        item.class = true
      }
      else {
        item.class = false
      }
    })
  }

  return(
    <ul className="category d-flex">
      {category.map((item, key) => (
        <li key={key+97} className="category__item">
          <button onClick={btnClick} id={item.id} className={`category__btn ${item.class ? 'category__activ': ''}`}>{item.name}</button>
        </li>
      ))}
    </ul>
  )
}