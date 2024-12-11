"use client";

import React from "react"
import Searchbar1 from "./components/searchbar1";
import Faq from "../../components/ui/faq-section";
import Header1 from "./components/header1";
import PublicsWork from "./components/publics-work";

export default function TravauxPublics(){
    return(
        <div>
            <Header1/>
            <Searchbar1/>
            <PublicsWork/>
            <Faq/>
        </div>
    )
}