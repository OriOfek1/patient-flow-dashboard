ARG DOCKER_BUILD_REGISTRY

FROM ${DOCKER_BUILD_REGISTRY}arc/cyto-pathway-backend:dev

COPY src/backend/backend /opt/backend/backend

CMD uvicorn backend.app:app --host 0.0.0.0 --port 80
