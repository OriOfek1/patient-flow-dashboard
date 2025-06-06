# Build step
FROM node:20-alpine AS build
WORKDIR /app

COPY package.json vite.config.js ./
RUN npm install

COPY public ./public
COPY src ./src
RUN npm run build

# Production step
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
