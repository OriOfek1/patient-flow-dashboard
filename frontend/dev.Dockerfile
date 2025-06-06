FROM arc/base-python:v2.4.0.main
WORKDIR /opt

COPY src/backend/requirements.txt /opt/backend/requirements.txt
COPY src/backend/setup.py /opt/backend/setup.py
RUN mkdir /opt/backend/backend
RUN echo "" > /opt/backend/backend/__init__.py
RUN python -m pip install -e /opt/backend

CMD uvicorn backend.app:app --host 0.0.0.0 --port 80
