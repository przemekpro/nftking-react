import React from "react"
import hero1 from "../images/hero-1.png"
import hero2 from "../images/hero-2.png"
import hero3 from "../images/hero-3.png"

import metamask from "../images/metamask.png"
import binance from "../images/binance.png"
import coinbase from "../images/coinbase.png"


export default function Hero() {
    return(
        <section className="section hero">
            <div className="hero-wrapper">
                <section className="hero__text-column">
                    <header className="hero__header">
                        <h1 className="hero__title">
                            Discover & Collect 
                            <span className="hero__title__block">
                                <span className="hero__title__block--highlight">Super Rare</span> Digital    
                            </span> 
                            Artworks
                        </h1>
                    </header>

                    <div className="hero__body">
                        <p className="hero__body__desc">The largest NFT marketplace. Authentic and truly unique digital creation. Signed and issued by the creator, made possible by blockchain technology</p>
                    </div>

                    <footer className="hero__footer">
                        <div className="hero__footer__cta-container">
                            <a href="#" className="btn hero__explore__btn">Let's Explore</a>
                            <a href="#" className="btn hero__sell__btn ">Sell NFT</a>
                        </div>
                    </footer>
                </section>

                <div className="hero__images-container">
                    <figure className="hero__images__cards">
                        <img src={hero1} className="hero__card-1__img" alt="NFT card" />

                        <img src={hero2} className="hero__card-2__img" alt="NFT card" />

                        <img src={hero3} className="hero__card-3__img" alt="NFT card" />
                    </figure>


                    <div className="hero__wallet">
                        <figure className="hero__wallet__logos">
                            <img src={metamask} className="hero__wallet__logo-1" alt="metamask logo" />
                            <img src={binance} className="hero__wallet__logo-2" alt="binance logo" />
                            <img src={coinbase} className="hero__wallet__logo-3" alt="coinbase logo" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}