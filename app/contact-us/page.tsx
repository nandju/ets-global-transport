"use client"

import React from "react";
import Navbar from "../components/default/navbar";
import Footer from "../components/ui/footer";
import Header1 from "./components/header1";
import ContactUsComponent from "./components/contact-us";
import Maps from "./components/maps";

export default function ContactUsPage(){
    return(
        <div>
            <Navbar/>
            <Header1/>
            <ContactUsComponent/>
            <Maps/>
            <Footer/>
        </div>
    )
}