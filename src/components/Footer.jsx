import React from 'react'
import Logo from '../assets/Strawhat  Library.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="row row__column">
                <Link to="/">
                <figure className="footer__logo">
                    <img src={Logo} className="footer__logo--img" alt="" />
                </figure>
                </Link>
                <div className="footer__list">
                    <span className="footer__link no-cursor">About</span>
                    <Link to="/books" className="footer__link">Books</Link>
                    <Link to="/cart" className="footer__link">Cart</Link>
                </div>
                <div className="footer__copyright">
                    Copyright &copy; 2026 Library
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer