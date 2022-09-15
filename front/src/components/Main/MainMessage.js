import React, {useEffect, useState} from "react";
import Dashboard from "../Dashboard/Dashboard";
import Navbar from "../Navbar/Navbar";
import Message from "../Message/Message";
import data from "../../data/data";

const db = data()

export default function MainMessage(){
    const [message, setMessages] = useState(db)
    

    return (
        <main className="flex w-full h-full shadow-lg rounded-3xl">
            <Navbar></Navbar>
            <Dashboard></Dashboard>
            <Message></Message>
        </main>
    )
}