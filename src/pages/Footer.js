import React from "react"
const currentYear = new Date().getFullYear()

export default function Footer() {
    return(
        <footer className="footer">
            <p className="footer__info">© 2018 - {currentYear} NFTKING, Inc</p>
        </footer>
    )
}