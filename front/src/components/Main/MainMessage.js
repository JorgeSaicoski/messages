import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import Navbar from "../Navbar/Navbar";
import Message from "../Message/Message";


export default function MainMessage(){
    return (
        <main className="flex w-full h-full shadow-lg rounded-3xl">
            <Navbar></Navbar>
            <Dashboard></Dashboard>
            <Message></Message>
        </main>
    )
}