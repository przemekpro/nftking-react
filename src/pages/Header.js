import React, { useEffect, useState } from "react";

export default function Header() {

    const [sticky, setSticky] = useState("");

    function isSticky() {
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 1 ? "header--sticky" : "";
        setSticky(stickyClass);
    };

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return() => {
        window.removeEventListener("scroll", isSticky);
        };
    }, []);


    useEffect(() => {
        document.querySelector('.header__nav__toggle').addEventListener('click', () => {
            document.body.classList.toggle('header__nav--open');
        });
    },[])

    useEffect(() => {
        document.querySelectorAll('.header__nav__link').forEach(link => {
            link.addEventListener('click', () => {
                document.body.classList.remove('header__nav--open');
            })
        })
    },[])
    

    return(
        <header className={`header ${sticky}`}>
            <div className="header-wrapper">

                <nav className="header__nav--mobile">
                    <button className="header__nav__toggle" aria-label="Menu">
                        <span className="header__nav__hamburger"></span>
                    </button>
                </nav>

                <nav className="header__nav">
                    <ul className="header__nav__list">
                        <li className="header__nav__item">
                            <a className="header__nav__link" href="#marketplace">Marketplace</a>
                        </li>

                        <li className="header__nav__item">
                            <a className="header__nav__link" href="#creators">Creators</a>
                        </li>

                        <li className="header__nav__item">
                            <a className="header__nav__link" href="#newsletter">Community</a>
                        </li>
                    </ul>
                </nav>

                <h1 className="header__logo">
                    <a href="/" className="header__logo__link">NFTKING</a>
                </h1>

                <nav className="header__cta">
                    <a href="#" className="btn header__cta__btn">Conect Wallet</a>
                </nav>

            </div>
        </header>
    )
}