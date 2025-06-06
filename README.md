
# Patient Flow Dashboard

A modern, flat-style web app for real-time hospital patient flow monitoring — built with:

- ⚛️ ReactJS (frontend)
- 🐍 FastAPI (backend)
- 🌐 NGINX (reverse proxy / static frontend)
- 🐳 Docker Compose (orchestration)

## Features

- Live view of 5 key hospital stations
- Global status indicator (Fluid / Caution / Bottleneck)
- Animated flow arrows
- Bottleneck summary
- Responsive fullscreen UI (TV mode)

## Run locally

### Prerequisites

- Docker + Docker Compose

### Quick start

```bash
git clone https://github.com/YOUR_USERNAME/patient-flow-dashboard.git
cd patient-flow-dashboard
docker compose up --build
```

- App will be available at: [http://localhost](http://localhost)
- API at: [http://localhost/api/station_status](http://localhost/api/station_status)

### Manual Docker usage

Build images:

```bash
# backend API image
docker build -f frontend/Dockerfile -t pf-backend .
# frontend UI image
docker build -f backend/Dockerfile -t pf-frontend .
```

Run containers:

```bash
docker run -p 8000:80 pf-backend
docker run -p 3000:80 pf-frontend
```

## Development

### Backend

```bash
cd backend
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Roadmap

✅ MVP  
✅ Animations  
✅ Dockerized  
⬜️ Auto-rotating station details  
⬜️ Touch interaction  

## License

MIT
