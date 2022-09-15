import React from "react";


export default function WeekTrending(props) {

    return(
        <div className="trending__card">
            <figure className="trending__img__container">
                <img src={props.img} className="trending__img" alt="NFT image" />
            </figure>
            <div className="trending__card__info">
                <div className="trending__card__details">
                    <h5 className="trending__card__author">{props.author}</h5>
                    <p className="trending__card__nickname">{props.nickname}</p>
                    <p className="trending__card__price">{props.price.toFixed(2)} {props.currency}</p>
                </div>
                <div className="trening__cta-container">
                    <a href="#" className="trending__collect__btn btn">Collect Now</a>
                </div>
            </div>
        </div>
    )
}