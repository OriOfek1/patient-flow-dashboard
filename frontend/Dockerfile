# Build stage
FROM node:20-alpine AS build
WORKDIR /app

COPY package.json tsconfig.json config-overrides.js .prettierrc.mjs ./
COPY public ./public
COPY src ./src
RUN npm install
RUN npm run build

# Production stage
FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/build ./build
RUN npm install -g serve
EXPOSE 80
CMD ["serve", "-s", "build", "-l", "80"]
