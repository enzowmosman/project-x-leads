import './Home.css'

import React from 'react'
import Header from "../components/ui/header/Header.jsx";
import HomeFirstBlock from "../components/ui/home/HomeFirstBlock.jsx";

export default function Home () {

    return (
        <div className={'homeWrapper'}>
            <Header />
            <HomeFirstBlock />
        </div>
    )
}