

from fastmcp import FastMCP  # type: ignore

from ..graphql import fetch_order_status
from ..logger import get_logger


class McpUtils:
    def __init__(self):
        self._logger = get_logger(__name__)
        self.mcp_server = FastMCP("graphql-mcp")

    def getAndSetupMcpServer(self) -> FastMCP:
        try:
            self._logger.info("Setting up MCP server")

            @self.mcp_server.tool()
            async def search_order_status(order_number: str, email: str) -> str:
                """
                Fetch the status of an order from the GraphQL API.

                Args:
                    order_number: The order number to fetch the status for
                    email: The email address associated with the order

                Returns:
                    str: A formatted string containing the order status
                """
                try:
                    result = await fetch_order_status(order_number, email)
                    return result
                except Exception as e:
                    self._logger.error(f"Error sending query: {e}")
                    raise e
            self._logger.info("MCP server setup complete")
            return self.mcp_server
        except Exception as e:
            self._logger.error(f"Error getting and setting up MCP server: {e}")
            raise e



