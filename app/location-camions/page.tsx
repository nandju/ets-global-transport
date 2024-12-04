"use client";

import React from "react"
import Navbar from "../components/default/navbar"
import Header1 from "./components/header1";
import Searchbar1 from "./components/searchbar1";


export default function LocationCamion(){
    return(
        <div>
            <Navbar/>
            <Header1/>
            <Searchbar1/>
        </div>
    )
}