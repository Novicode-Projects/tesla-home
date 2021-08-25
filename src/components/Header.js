import React from 'react'
import './Header.css'
import LogoTesla from '../assets/logo-tesla.png'

function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={LogoTesla} alt="Logo Tesla" />
            </div>
            <div className="header__center">
                <p>Model S</p>
                <p>Model 3</p>
                <p>Model X</p>
                <p>Model Y</p>
                <p>Powerwall</p>
                <p>Recharge</p>
            </div>

            <div className="header__right">
                <p>Shop</p>
                <p>Compte</p>
                <p>Menu</p>
            </div>
        </div>
    )
}

export default Header
