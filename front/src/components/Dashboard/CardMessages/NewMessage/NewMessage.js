import React from "react";

export default function NewMessage(props){
    return(
        <li className="py-5 border-b px-3 transition bg-indigo-300 hover:bg-indigo-200">
            <a href="#" className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{props.name}</h3>
                <p className="text-md text-gray-400">{props.date}</p>
            </a>
            <div className="text-md italic text-gray-400">{props.title}</div>
        </li>
    )
}