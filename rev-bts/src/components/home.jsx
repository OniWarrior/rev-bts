/*
 * Author: Stephen Aranda
 * File  : home.jsx
 * Desc  : Component for the home page/landing page.
 */


import React from "react";
import '../styles/home.css'
import NavBar from './navbar';

const Home = () => {
    return (
        <div className="home-container">
            <NavBar />
            <br></br>
            <div className="mobile-hero-banner"></div>
            <div className="home-header">
                <h1>Bitcoin Transaction System</h1>
            </div>
            <div className="main-text">
                <p>
                    Welcome to Bitcoin Transaction System. The app that allows traders and clients to quickly and easily trade in Bitcoin crypto currency with an easy-to-use dashboard.
                    Traders can buy and sell Bitcoin on behalf of clients or clients can buy and sell directly.
                    Create a personal account to buy and sell Bitcoin today!
                </p>
            </div>


        </div>
    )

}

export default Home;