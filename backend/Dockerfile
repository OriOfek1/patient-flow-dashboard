FROM python:3.11-slim
WORKDIR /opt/backend

# Install dependencies
RUN pip install fastapi uvicorn[standard]

# Copy application code
COPY main.py /opt/backend/main.py

EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
