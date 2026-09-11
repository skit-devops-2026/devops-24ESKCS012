.PHONY: install test build run docker-build docker-up

install:
	@echo "No package installation is required for this static site."

test:
	node tests/static-site.test.js

build:
	@echo "No compilation is required for this static site."

run:
	python3 -m http.server 8000

docker-build:
	@echo "Docker configuration will be added in MT2." && exit 1

docker-up:
	docker compose up --build
