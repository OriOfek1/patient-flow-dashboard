ARG DOCKER_INTERNAL_REGISTRY

FROM ${DOCKER_INTERNAL_REGISTRY}arc/base-python:v2.4.0.main
WORKDIR /opt

COPY src/backend/requirements.txt /opt/backend/requirements.txt
COPY src/backend/setup.py /opt/backend/setup.py
RUN mkdir /opt/backend/backend
RUN echo "" > /opt/backend/backend/__init__.py
RUN python -m pip install -e /opt/backend

CMD python -m backend
