import React from "react";
//scss
import './Writers.scss'

import { useLocation } from "react-router-dom";
import obj from "../main/object/objects"

import imgs from '../../assets/images/object/qodiriy.jpg'

export default function Users() {
  let location = useLocation();

{/* <div className="">
{obj.map((item) => {
  if(item.id === +location.pathname.split("/").at(-1)) {
    return <h1 style={{color: "red", fontSize: "100px"}}>{item.name}</h1>
  }
})}
</div> */}

  return(
    <section className="writers">
      <div className="container">
        {
          obj.map((item, key) => {
            if(item.id === +location.pathname.split("/").at(-1)) {
              return(
                <div key={key+98} className="writers__main d-flex justify-content-between">
                  <div className="writers__leftbox">
                    <div className="writers__imgbox">
                      <img className="writers__img" src={item.img} alt={item.name} />
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="">
                        <p className="writers__born">Tavallud sanasi</p>
                        <p className="writers__birth">5-Avg 1941</p>
                        <p className="writers__born">Toshkent, Uzbekistan</p>
                      </div>
                      <span className="writers__birth">-</span>
                      <div className="">
                        <p className="writers__born">Tavallud sanasi</p>
                        <p className="writers__birth">24-MAY 2013</p>
                        <p className="writers__born">Toshkent, Uzbekistan</p>
                      </div>
                    </div>
                  </div>
                  <div className="writers__infobox">
                    <h2 className="writers__title">{item.name}</h2>
                    <p className="writers__desc">{item.desc}</p>
                    <h3 className="writers__creation"><i className="bx bxs-bookmark writers__bookmark"></i> Ijod</h3>
                    <p className="writers__creation-text">Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor qaytmaydi“ qissasi boʻldi.</p>
                    <div className="writers__worksbox d-flex justify-content-between align-items-center">
                      <h3 className="writers__work">Asarlari</h3>
                      <a className="writers__workall" href="/">Barchasini ko'rish</a>
                    </div>
                    <ul className="writers__work-list d-flex justify-content-between">
                      <li className="writers__work-item">
                        <div className="writers__work-imgbox">
                          <img className="writers__work-img" src={imgs} alt="" />
                        </div>
                        <h3 className="writers__work-name">Dunyo ishlari</h3>
                        <p className="writers__work-comment"><i className='bx bxs-star writers__stars'></i> 4.1 • 3400 ta fikrlar</p>
                      </li>
                      <li className="writers__work-item">
                        <div className="writers__work-imgbox">
                          <img className="writers__work-img" src={imgs} alt="" />
                        </div>
                        <h3 className="writers__work-name">Dunyo ishlari</h3>
                        <p className="writers__work-comment"><i className='bx bxs-star writers__stars'></i> 4.1 • 3400 ta fikrlar</p>
                      </li>
                      <li className="writers__work-item">
                        <div className="writers__work-imgbox">
                          <img className="writers__work-img" src={imgs} alt="" />
                        </div>
                        <h3 className="writers__work-name">Dunyo ishlari</h3>
                        <p className="writers__work-comment"><i className='bx bxs-star writers__stars'></i> 4.1 • 3400 ta fikrlar</p>
                      </li>
                      <li className="writers__work-item">
                        <div className="writers__work-imgbox">
                          <img className="writers__work-img" src={imgs} alt="" />
                        </div>
                        <h3 className="writers__work-name">Dunyo ishlari</h3>
                        <p className="writers__work-comment"><i className='bx bxs-star writers__stars'></i> 4.1 • 3400 ta fikrlar</p>
                      </li>
                      <li className="writers__work-item">
                        <div className="writers__work-imgbox">
                          <img className="writers__work-img" src={imgs} alt="" />
                        </div>
                        <h3 className="writers__work-name">Dunyo ishlari</h3>
                        <p className="writers__work-comment"><i className='bx bxs-star writers__stars'></i> 4.1 • 3400 ta fikrlar</p>
                      </li>
                    </ul>
                  </div>
                </div>
              )
            }
          })
        }
      </div>
    </section>
  )
}
