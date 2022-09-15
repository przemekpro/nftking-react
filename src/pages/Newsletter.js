import React from "react"

export default function Newsletter() {
    return(
        <section id="newsletter" className="section newsletter">
            <div className="newsletter-wrapper">
                <section className="newsletter__column">

                    <header className="newsletter__header">
                        <h1 className="newsletter__title">Never miss a drop!</h1>
                    </header>

                    <div className="newsletter__body">
                        <p className="newsletter__body__desc">Subscribe to super-exclusive drop list and be the first to know about upcoming drops</p>
                    </div>

                    <form className="newsletter__form">
                        <input 
                            type="email" 
                            placeholder="Enter your email adress" 
                            aria-label="Enter your email adress"
                            name="email" 
                            className="newsletter__input" 
                        />
                        <button className="btn newsletter__subscribe__btn">Subscribe</button>
                    </form>
                </section>
            </div>
        </section>
    )
}