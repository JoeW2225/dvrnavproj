import { useState, useEffect } from "react"

export default function Messages() {
const [messages, setMessages] = useState([])

    useEffect(() => {
        async function fetchMessages() {
            const res = await fetch(`http://localhost:8080/comments`)
            const messages = await res.json() 
            setMessages(messages)
        }

        fetchMessages()
    }, [])

    return (
        <div>
            {messages.map((message => ))}
        </div>
    )

}