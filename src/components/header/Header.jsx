import React from "react";
//scss
import './Header.scss'
//images
import havatar from '../../assets/images/header-avatar.jpg'


export default function Header() {

  let navg = [
    {
      title: "Bosh sahifa",
      class: true
    },

    {
      title: "Nashr",
      class: false
    },

    {
      title: "Nazm",
      class: false
    },

    {
      title: "Maqolalar",
      class: false
    },

    {
      title: "Forum",
      class: false
    },
  ]

  let navBtn = (e) => {
    e.preventDefault()
    navg.map((item) => {
      if(e.target.innerText === item.title) {
        item.class = true
        console.log("ishladi")
      } else {
        item.class = false
        console.log("ishlamadi")
      }
    })
  }

  return(
    <header className="header">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="header__logobox">
            <a className="header__logo" href="/">Badiiyat</a>
          </div>

          <nav className="header__nav">
            <ul className="header__list d-flex justify-content-between align-items-center">
              {
                navg.map((item, key) => {
                  return(
                    <li key={key+82} onClick={navBtn} className={`header__item ${item.class ? "header__activ" : ""}`}><a className="header__link" href="/">{item.title}</a></li>
                  )
                })
              }
            </ul>
          </nav>

          <div className="header__usersbox d-flex justify-content-between align-items-center">
            <button className="header__btn"><img src={havatar} alt="avatar" /></button>
            <button className="header__btndown"><i className='bx bx-chevron-down header__icondown'></i></button>
          </div>
        </div>
      </div>
    </header>
  )
}