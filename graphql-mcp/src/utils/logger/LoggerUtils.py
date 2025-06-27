import logging

from ..env_handler import envUtils
from .LoggerModel import LOG_LEVEL_MAP


def get_logger(class_name: str) -> logging.Logger:
    logger = logging.getLogger(class_name)
    log_level_str = envUtils.get_env_variable("LOG_LEVEL")

    log_level = LOG_LEVEL_MAP.get(log_level_str.upper(), logging.INFO)

    if not logger.handlers:
        logger.setLevel(log_level)

        ch = logging.StreamHandler()
        ch.setLevel(log_level)

        formatter = logging.Formatter(
            '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
        )
        ch.setFormatter(formatter)

        logger.addHandler(ch)
        logger.propagate = False

    return logger
