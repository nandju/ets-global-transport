"use client";

import React from "react";
import Navbar from "../../components/default/navbar";
import Footer from "../../components/ui/footer";
import Paiement from "./components/paiement";

export default function PaiementLocationCamions(){
    return(
        <div>
            <Navbar/>
            <Paiement/>
            <Footer/>
        </div>
    )
}