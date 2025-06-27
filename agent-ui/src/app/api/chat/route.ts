import { openai } from "@ai-sdk/openai"
import { experimental_createMCPClient as createMCPClient } from "ai"
import { streamText } from "ai"
import { agentPrompt } from "./agent.prompt"
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js"

const getMcpClient = async () => {
  const url = process.env.GRAPHQL_MCP_URL ?? ""
  console.log(url)
  if (!url) {
    throw new Error("GRAPHQL_MCP_URL is not set")
  }
  const urlObject = new URL(url)
  const mcpClient = await createMCPClient({
    transport: new StreamableHTTPClientTransport(urlObject, {}),
  })
  return mcpClient
}

export const maxDuration = 30

export async function POST(req: Request) {
  const { messages } = await req.json()
  const mcpClient = await getMcpClient()
  const tools = await mcpClient.tools()

  const result = streamText({
    model: openai("gpt-4o"),
    messages: [{ role: "system", content: agentPrompt }, ...messages],
    tools,
  })

  return await result.toDataStreamResponse()
}
