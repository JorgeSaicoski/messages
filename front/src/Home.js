import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Message from "./components/Message/Message";

export default function Home(){
    return (
        <main className="flex w-full h-full shadow-lg rounded-3xl">
            <Navbar></Navbar>
            <Dashboard></Dashboard>
            <Message></Message>
        </main>
    )
}