ARG DOCKER_INTERNAL_REGISTRY

FROM ${DOCKER_INTERNAL_REGISTRY}arc/base-node:v1.3.0.main
WORKDIR /opt/frontend/frontend

COPY src/frontend/frontend/package.json /opt/frontend/frontend/package.json
COPY src/frontend/frontend/tsconfig.json /opt/frontend/frontend/tsconfig.json
COPY src/frontend/frontend/config-overrides.js /opt/frontend/frontend/config-overrides.js
COPY src/frontend/frontend/.prettierrc.mjs /opt/frontend/frontend/.prettierrc.mjs

RUN npm i --verbose

ENV WDS_SOCKET_PORT=80
ENV PORT=80

CMD npm run start
