"use client";

import React from "react"
import Navbar from "../components/default/navbar"
import Header1 from "./components/header1";
import Searchbar1 from "./components/searchbar1";
import CamionsProducts from "./components/camions-products";
import Faq from "../components/ui/faq-section";
import Footer from "../components/ui/footer";


export default function LocationCamion(){
    return(
        <div>
            <Navbar/>
            <Header1/>
            <Searchbar1/>
            <CamionsProducts/>
            <Faq/>
            <Footer/>
        </div>
    )
}