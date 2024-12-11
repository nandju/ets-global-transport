"use client"
import React from "react"

import Navbar from "../../components/default/navbar";
import Header1 from "./components/header1";
import Searchbar1 from "./components/searchbar1";
import TransportItems from "./components/transport-items";
import Footer from "../../components/ui/footer";
import Faq from "../../components/ui/faq-section";

export default function TransportMarchandises() {
    return (
        <div>
            <Navbar/>
            <Header1/>
            <Searchbar1/>
            <TransportItems/>
            <Faq/>
            <Footer/>
        </div>
    );
}