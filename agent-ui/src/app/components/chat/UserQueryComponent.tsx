import { User } from "lucide-react"
import { QueryComponentProps } from "./QueryComponent.Model"

const UserQueryComponent = ({ message, timestamp }: QueryComponentProps) => {
  return (
    <div className="flex justify-end mb-4">
      <div className="flex items-start space-x-3 max-w-3xl">
        <div className="bg-primary-background-ai-background text-foreground rounded-2xl rounded-br-md px-4 py-3 shadow-sm">
          <p className="text-md leading-relaxed">{message}</p>
          {timestamp && <p className="text-xs  dark:text-gray-300 text-gray-900 mt-1 opacity-75">{timestamp}</p>}
        </div>
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-primary-background-ai-background rounded-full flex items-center justify-center">
            <User size={16} className="text-foreground" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserQueryComponent
