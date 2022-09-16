import React from "react";

export default function ReadedMessage(props){
    return(
        <li className="py-5 border-b px-3 transition hover:bg-indigo-100">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{props.name}</h3>
                <p className="text-md text-gray-400">{props.date}</p>
            </div>
            <div className="text-md italic text-gray-400">{props.title}</div>
        </li>
    )
}