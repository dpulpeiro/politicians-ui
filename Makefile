DOCKER_IMAGE_NAME=politicians-web
PROD_TAG=0.0.1

DEV_IMAGE=${DOCKER_IMAGE_NAME}:dev
PROD_IMAGE=${DOCKER_IMAGE_NAME}:${PROD_TAG}


# Use any -slim version
NODE_VERSION=14.17.3-slim
NGINX_VERSION=1.23.1-alpine

clean:
	rm -rf .cache node_modules

dev/build:
	DOCKER_BUILDKIT=1 docker build \
		--build-arg NODE_VERSION=${NODE_VERSION} \
		--build-arg USER_NAME=user \
		--build-arg USER_UID=$(shell id -u) \
		--build-arg USER_GID=$(shell id -g) \
        -f devops/dev/Dockerfile \
        -t ${DEV_IMAGE} \
        .

dev/shell:
	docker run -it \
		--rm \
		--network host \
		-v ${PWD}:/app \
		${DEV_IMAGE} zsh

prod/build:
	DOCKER_BUILDKIT=1 docker build \
    	--build-arg NODE_VERSION=${NODE_VERSION} \
    	--build-arg NGINX_VERSION=${NGINX_VERSION} \
        -f devops/prod/Dockerfile \
        -t ${PROD_IMAGE} \
        .

prod/local:
	docker run -it --rm -p 8001:80 ${PROD_IMAGE}
