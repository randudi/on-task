FROM python:3.12-slim-bookworm

COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

COPY ./src /usr/src/app
WORKDIR /usr/src/app

RUN uv sync --locked
RUN chmod +x ./main.py
RUN ls -ltr
ENV IS_DOCKER=true

CMD ["uv", "run", "main.py"]
