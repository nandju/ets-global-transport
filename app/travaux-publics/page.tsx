"use client";

import React from "react"
import Navbar from "../../components/default/navbar";
import Searchbar1 from "./components/searchbar1";
import Footer from "../../components/ui/footer";
import Faq from "../../components/ui/faq-section";
import Header1 from "./components/header1";
import PublicsWork from "./components/publics-work";

export default function TravauxPublics(){
    return(
        <div>
            <Navbar/>
            <Header1/>
            <Searchbar1/>
            <PublicsWork/>
            <Faq/>
            <Footer/>
        </div>
    )
}