import React, {useContext} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PopularCreators from "../components/PopularCreators";

import { Context } from "../Context";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

export default function PopularList() {

    const {topListCreators} = useContext(Context)

    const creatorsData = topListCreators.map(item => {
        return(
            <SwiperSlide key={item.id}>
                <PopularCreators 
                    key={item.id}
                    id={item.id}
                    backgroundImg={item.backgroundImg}
                    authorPhoto={item.authorPhoto}
                    authorName={item.author}
                    artworks={item.artworks}
                    isFollowed={item.isFollowed}
                />
            </SwiperSlide>
        )
    })

  return (
    <section className="section popular-list">
        <div className="popular-list-wrapper">
            <section className="popular-list__cards">
                <Swiper
                    slidesPerView={1}
                    initialSlide={1}
                    spaceBetween={10}
                    loop
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    "@1.50": {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                    }}
                    modules={[Pagination]}
                >
                    
                <div className="popular-list__card">
                    {creatorsData}
                </div>
                
                </Swiper>

            </section>

            
        </div>
    </section>
  )
}

