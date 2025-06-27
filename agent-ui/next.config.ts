import type { NextConfig } from "next"
const nextConfig: NextConfig = {
  output: "standalone",
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    GRAPHQL_MCP_URL: process.env.GRAPHQL_MCP_URL
  },
}

export default nextConfig
