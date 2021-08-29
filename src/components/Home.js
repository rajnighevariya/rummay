import React from 'react';
import Headerrr from './Headerrr';
import Slider from './slider';
import Cards from './Cards';
import Innersection from './Innersction';
import Anothergamesection from './Anothergamesection';
import Footer from './Footer';

export default function Home() {
    return (
        <>
            <Headerrr></Headerrr>
            <Slider></Slider>
            <Cards></Cards>
            <Innersection></Innersection>
            <Cards></Cards>
            <Anothergamesection></Anothergamesection>
            <Footer></Footer>
        </>
    )
}
