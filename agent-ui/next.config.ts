import type { NextConfig } from "next"
const nextConfig: NextConfig = {
  output: "standalone",
  env: {
    GRAPHQL_MCP_URL: process.env.GRAPHQL_MCP_URL,
  },
}

export default nextConfig
