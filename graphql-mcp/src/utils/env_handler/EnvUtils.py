import os

from dotenv import load_dotenv  # type: ignore


class EnvUtils:
    def __init__(self):
        is_docker = os.environ.get("IS_DOCKER")
        print(f"is_docker: {is_docker}")
        if not is_docker:
            load_dotenv(".env")

    def get_env_variable(self, variable_name: str) -> str:
        value = os.environ.get(variable_name)
        if value is None:
            raise KeyError(f"Environment variable {variable_name} not found")
        return value
