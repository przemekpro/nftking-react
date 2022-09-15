import React from "react";
import WeekTrending from "../components/WeekTrending";
import trendingData from "../trendingData"



export default function Trending() {

    const trending = trendingData.map(item => {
        return(
            <WeekTrending 
                key={item.id}
                img={item.img}
                author={item.author}
                nickname={item.nickname}
                price={item.price}
                currency={item.currency}
            />
        )
    })
    return(
        <section id="marketplace" className="section trending">
            <div className="trending-wrapper">
                <section className="trending__text-column">

                    <header className="trending__header">
                        <h1 className="trending__title">Trending This Week</h1>
                    </header>

                    <div className="trending__body">
                        <p className="trending__body__desc">Various kinds of Artwork categories that are trending this week. The trend will be reset every week. Don’t miss out on the best artworks every week</p>
                    </div>

                </section>
                <div className="trending__cards">
                    {trending}
                </div>
            </div>
        </section>
    )
}