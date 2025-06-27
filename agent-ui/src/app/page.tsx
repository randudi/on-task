"use client"
import { useChat } from "@ai-sdk/react"
import AIResponseComponent from "./components/chat/AIResponseComponent"
import UserQueryComponent from "./components/chat/UserQueryComponent"

const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    maxSteps: 2,
    api: "/api/chat",
  })
  return (
    <div className="flex flex-col w-full max-w-5xl py-24 mx-auto stretch">
      {messages.map((message) => {
        const textPart = message.parts.find((part) => part.type === "text")
        const messageText = textPart ? textPart.text : ""
        const timestamp = message.createdAt ? new Date(message.createdAt).toLocaleTimeString() : undefined
        return (
          <div key={message.id}>
            {message.role === "user" ? (
              <UserQueryComponent message={messageText} timestamp={timestamp} />
            ) : (
              <AIResponseComponent message={messageText} timestamp={timestamp} isTyping={!messageText} />
            )}
          </div>
        )
      })}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed dark:bg-zinc-900 bottom-0 w-full max-w-5xl p-2 mb-8 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  )
}

export default Chat
