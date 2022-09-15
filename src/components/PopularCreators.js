import React, {useContext} from "react"
import { Context } from "../Context"


export default function PopularCreators(props) {

    const {toggleFollow} = useContext(Context)

    return(
        <div className="top-list__swiper-card">
            <figure className="top-list__image-container">
                <img src={props.backgroundImg} className="top-list__img" />
            </figure>
            <div className="top-list__details">
                <figure className="top-list__photo-container">
                    <img src={props.authorPhoto} className="top-list__author-photo" alt="photo of author" />
                </figure>
                <h2 className="top-list__author-name">{props.authorName}</h2>
                <p className="top-list__visitors">
                    {(props.artworks/1000).toFixed(1)}K
                    <span className="top-list__visitors--highlight">
                        Artwork
                    </span>
                </p>
                <div className="top-list_cta-container">
                    <button onClick={() => toggleFollow(props.id)} 
                        className={props.isFollowed ? 
                        "btn top-list__followed__btn" : 
                        "btn top-list__follow__btn"}>

                        {props.isFollowed ? "Followed" : "Follow"}
                    </button>
                </div>
            </div>
        </div>
    )
}
