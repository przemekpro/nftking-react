import React from "react";
import {Link} from "react-router-dom"


export default function TopList() {

  return (
    <section id="creators" className="section top-list">
        <div className="top-list-wrapper">
            <section className="top-list__text-column">

              <header className="top-list__header">
                <h1 className="top-list__title">
                    Top List Creator
                </h1>
              </header>

            </section>
            <div className="top-list__btns-container">

                <Link to="/">
                  <button className="btn top-list__popular__btn">Popular</button>
                </Link>

                <Link to="/following">
                  <button className="btn top-list__following_btn">Following</button>
                </Link>   

            </div> 
        </div>
    </section>
  )
}

