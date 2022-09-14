import React from "react";
import MessageList from "../Dashboard/MessageList/MessageList";
import Hero from "./Hero";
export default function Main(){
    return (
        <main className="flex flex-col w-full h-full shadow-lg rounded-3xl">
            <Hero></Hero>
            <MessageList></MessageList>
        </main>
    )
}