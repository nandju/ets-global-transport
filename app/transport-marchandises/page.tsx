"use client"
import React from "react"

import Header1 from "./components/header1";
import Searchbar1 from "./components/searchbar1";
import TransportItems from "./components/transport-items";
import Faq from "../../components/ui/faq-section";

export default function TransportMarchandises() {
    return (
        <div>
            <Header1/>
            <Searchbar1/>
            <TransportItems/>
            <Faq/>
        </div>
    );
}