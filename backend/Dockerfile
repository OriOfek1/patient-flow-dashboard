ARG DOCKER_BUILD_REGISTRY

FROM ${DOCKER_BUILD_REGISTRY}arc/cyto-pathway-frontend:dev

COPY src/frontend/frontend/src /opt/frontend/frontend/src
COPY src/frontend/frontend/public /opt/frontend/frontend/public

RUN npm -verbose run build

CMD npm run serve
