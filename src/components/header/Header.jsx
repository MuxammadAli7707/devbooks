import React from "react";
//scss
import './Header.scss'
//images
import havatar from '../../assets/images/header-avatar.jpg'
import { Link, NavLink } from "react-router-dom";


export default function Header() {

  let navg = [
    {
      link: "/",
      title: "Bosh sahifa",
      class: true
    },

    {
      link: "adiblar",
      title: "Adiblar",
      class: false
    },

    {
      link: "kitoblar",
      title: "Kitoblar",
      class: false
    },

    {
      link: "maqolalar",
      title: "Maqolalar",
      class: false
    },

    {
      link: "forum",
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
                    <li key={key+82} className="header__item">
                      <NavLink className={({ isActive }) =>
                        isActive ? "header__link header__activ" : "header__link"
                      } to={item.link}>{item.title}</NavLink>
                    </li>
                  )
                })
              }
            </ul>
          </nav>

          <div className="header__usersbox d-flex justify-content-between align-items-center">
            <Link className="header__btn" to="/signup"><img src={havatar} alt="avatar" /></Link>
            {/* <button className="header__btn"><img src={havatar} alt="avatar" /></button> */}
            <button className="header__btndown"><i className='bx bx-chevron-down header__icondown'></i></button>
          </div>
        </div>
      </div>
    </header>
  )
}