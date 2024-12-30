"use client";

import React from "react"
import Header1 from "./components/header1";
import { GridPatternDashed } from "./components/gridpatterndashed";
import CamionsProducts1 from "./components/camions-products1";
import CamionsProducts2 from "./components/camions-products2";
import CamionsProducts3 from "./components/camions-products3";
import CamionsProducts4 from "./components/camions-products4";
import Faq from "../../components/ui/faq-section";


export default function LocationCamion(){
    return(
        <div>
            <Header1/>
            <GridPatternDashed/>
            <CamionsProducts1/>
            <CamionsProducts2/>
            <CamionsProducts3/>
            <CamionsProducts4/>
            <Faq/>
        </div>
    )
}