import React from "react";
import OpenMessage from "../CardMessages/OpenMessage/OpenMessage";
import NewMessage from "../CardMessages/NewMessage/NewMessage";
import ReadedMessage from "../CardMessages/ReadedMessage/ReadedMessage";

export default function MessageList(){
    return(
        <ul className="mt-6 w-full">
            <OpenMessage title={"Titulo"} name={"Jorge"} date={"27/07/1995"}></OpenMessage>
            <NewMessage title={"Titulo"} name={"Jorge"} date={"27/07/1995"}></NewMessage>
            <ReadedMessage name={"Jorge"} date={"27/07/1995"} title={"Titulo"} ></ReadedMessage>
        </ul>
    )
}
