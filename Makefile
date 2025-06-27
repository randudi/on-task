.PHONY: build-and-deploy
build-and-deploy:
	cd agent-ui && make -e  build-lint
	docker compose build
	docker compose up -d