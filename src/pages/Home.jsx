import React from 'react';
import Explore from "../components/Explore"
import Featured from "../components/Featured"
import Highlights from "../components/Highlights"
import Landing from "../components/Landing"
import Discounted from '../components/Discounted';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
        <Landing />
        <Highlights />
        <Featured />
        <Discounted />
        <Explore />
        <Link />
        </>
    )
}

export default Home