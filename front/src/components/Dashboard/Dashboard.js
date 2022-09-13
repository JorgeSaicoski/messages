import React from "react";
import NewMessage from "./CardMessages/NewMessage/NewMessage";
import OpenMessage from "./CardMessages/OpenMessage/OpenMessage";
import ReadedMessage from "./CardMessages/ReadedMessage/ReadedMessage";

export default function Dashboard(){
    return (
            <section className="flex flex-col pt-3 w-4/12 bg-gray-50 min-h-full max-h-screen overflow-y-scroll">
                <label className="px-3">
                    <input
                        className="rounded-lg p-4 bg-gray-100 transition duration-200 focus:outline-none focus:ring-2 w-full"
                        placeholder="Search..."/>
                </label>

                <ul className="mt-6">
                    <OpenMessage title={"Titulo"} name={"Jorge"} date={"27/07/1995"}></OpenMessage>
                    <NewMessage title={"Titulo"} name={"Jorge"} date={"27/07/1995"}></NewMessage>
                    <ReadedMessage name={"Jorge"} date={"27/07/1995"} title={"Titulo"} ></ReadedMessage>

                </ul>
            </section>

    )
}