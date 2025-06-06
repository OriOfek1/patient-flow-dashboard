FROM python:3.11-slim
WORKDIR /opt

COPY ./requirements.txt /opt/requirements.txt
RUN pip install -r /opt/requirements.txt

COPY main.py /opt/backend/main.py

CMD ["python", "/opt/backend/main.py"]
