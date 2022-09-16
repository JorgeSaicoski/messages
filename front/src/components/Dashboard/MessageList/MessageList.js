import React, {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import OpenMessage from "../CardMessages/OpenMessage/OpenMessage";
import NewMessage from "../CardMessages/NewMessage/NewMessage";
import ReadedMessage from "../CardMessages/ReadedMessage/ReadedMessage";
import data from "../../../data/data";
const db = data()

export default function MessageList(){
    const mainMessage = useParams()
    const [messages, setMessages] = useState([])
    useEffect(()=>{
        setMessages(db)
    })
    return(
        <ul className="mt-6 w-full">
            {messages.map(message=> `${message.id}` === mainMessage.messageId?
                <Link to={`/${message.id}`}><OpenMessage key={message.id} title={message.title} name={message.name} date={message.date}></OpenMessage></Link>
                :
                message.new? <Link to={`/${message.id}`}><NewMessage key={message.id} title={message.title} name={message.name} date={message.date}></NewMessage></Link>

                : <Link to={`/${message.id}`}><ReadedMessage key={message.id} title={message.title} name={message.name} date={message.date} ></ReadedMessage></Link>
            )}

        </ul>
    )
}
