FROM node:20-alpine
WORKDIR /opt/frontend

COPY package.json tsconfig.json config-overrides.js .prettierrc.mjs ./
RUN npm install --verbose

ENV WDS_SOCKET_PORT=80
ENV PORT=80

COPY public ./public
COPY src ./src
CMD npm run start
