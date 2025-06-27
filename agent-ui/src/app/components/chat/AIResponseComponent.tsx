import { Bot } from "lucide-react"
import { AIResponseComponentProps } from "./QueryComponent.Model"

const AIResponseComponent = ({ message, timestamp, isTyping = false }: AIResponseComponentProps) => {
  return (
    <div className="flex justify-start mb-4">
      <div className="flex items-start space-x-3 max-w-3xl">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-primary-background-ai-background rounded-full flex items-center justify-center">
            <Bot size={16} className="text-foreground" />
          </div>
        </div>
        <div className="bg-background text-foreground rounded-2xl rounded-bl-md px-1 py-4">
          {isTyping ? (
            <div className="flex items-center space-x-1">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
              <span className="text-xs text-gray-500 ml-2">AI is typing...</span>
            </div>
          ) : (
            <>
              <div className="text-md leading-relaxed whitespace-pre-wrap">{message}</div>
              {timestamp && <p className="text-xs dark:text-gray-300 text-gray-900 mt-1 opacity-75">{timestamp}</p>}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default AIResponseComponent
