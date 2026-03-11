import React from 'react';
import Discounts from "../components/Discounted"
import Explore from "../components/Explore"
import Featured from "../components/Featured"
import Highlights from "../components/Highlights"
import Landing from "../components/Landing"

const Home = () => {
    return (
        <>
        <Landing />
        <Highlights />
        <Featured />
        <Discounts />
        <Explore />
        </>
    )
}

export default Home