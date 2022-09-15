import React, {useContext} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import FollowingCreators from "../components/FollowingCreators";

import { Context } from "../Context";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

export default function FollowingList() {

    const {topListCreators} = useContext(Context)

    const creatorsData = topListCreators.map(item => {
        if (item.isFollowed === true) {
            return(
                <SwiperSlide key={item.id}>
                    <FollowingCreators
                        key={item.id} 
                        id={item.id}
                        backgroundImg={item.backgroundImg}
                        authorPhoto={item.authorPhoto}
                        authorName={item.author}
                        artworks={item.artworks}
                        isFollowed={item.true}
                    />
                </SwiperSlide>
            )
        }
    })

  return (
    <section className="section following-list">
        <div className="following-list-wrapper">

        <Swiper
            slidesPerView={1}
            spaceBetween={10}
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
            
            {creatorsData.every(item => !item) ? <h2 className="no-followings-info">No followings yet</h2> : creatorsData}
        
        </Swiper>
            
        </div>
    </section>
  )
}

