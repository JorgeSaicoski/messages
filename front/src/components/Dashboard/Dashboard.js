import React from "react";

import MessageList from "./MessageList/MessageList";


export default function Dashboard(){
    return (
            <section className="flex flex-col pt-3 w-4/12 bg-gray-50 min-h-full max-h-screen overflow-y-scroll">
                <label className="px-3">
                    <input
                        className="rounded-lg p-4 bg-gray-100 transition duration-200 focus:outline-none focus:ring-2 w-full"
                        placeholder="Search..."/>
                </label>
                <MessageList></MessageList>
            </section>

    )
}