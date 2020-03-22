# Dockerfile for check-metadata
# License: MIT
# © Ulises Gascon 2020
FROM node:12-alpine
LABEL org.label-schema.name="check-metadata" \
    org.label-schema.description="check-metadata Docker image" \
    org.label-schema.url="https://www.npmjs.com/package/check-metadata" \
    org.label-schema.vcs-url="https://github.com/ulisesgascon/check-metadata" \
    org.label-schema.maintainer="ulisesgascon" \
    org.label-schema.schema-version="1.0" \
    org.label-schema.docker.cmd="docker run --rm -e SCAN='https://example.com/cool_picture.png' ulisesgascon/check-metadata:latest"

# Configure npm
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

# Set SCAN_URL env to satisfy at build and/or container runtime.
ENV SCAN="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Blaubeuren_Blautopf_20180804_02.jpg/1620px-Blaubeuren_Blautopf_20180804_02.jpg"

RUN mkdir -p /home/node/check-metadata
WORKDIR /home/node/check-metadata

# Install from npmjs.com
RUN npm install --only=prod -g check-metadata

CMD ["sh", "-c", "npx check-metadata $SCAN"]