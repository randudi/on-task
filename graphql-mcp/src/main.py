from utils.logger import get_logger
from utils.mcp import McpUtils
from utils.env_handler import envUtils


class MainApp:
    def __init__(self):
        self.logger = get_logger(__name__)
        self.port = envUtils.get_env_variable("HTTP_PORT")
        self.host = envUtils.get_env_variable("HOST")
        self.mcp_utils = McpUtils()

    def run(self):
        self.logger.info("Starting MCP server")
        mcp_server = self.mcp_utils.getAndSetupMcpServer()
        mcp_server.run(transport="http", host=self.host, port=int(self.port))
        self.logger.info("MCP server started")

def main():
    app = MainApp()
    app.run()

if __name__ == "__main__":
    main()
