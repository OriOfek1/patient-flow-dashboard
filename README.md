
# Patient Flow Dashboard

A modern, flat-style web app for real-time hospital patient flow monitoring — built with:

- ⚛️ ReactJS (frontend)
- 🐍 FastAPI (backend)
- 🔧 Node + TypeScript (frontend)
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

- App will be available at: [http://localhost:8080](http://localhost:8080)
- API at: [http://localhost:8000/api/station_status](http://localhost:8000/api/station_status)

### Manual Docker usage

Build images:

```bash
docker build -t pf-backend ./backend
docker build -t pf-frontend ./frontend
```

Run containers:

```bash
docker run -p 8000:8000 pf-backend
docker run -p 8080:80 --link pf-backend pf-frontend
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
npm run start
```

## Roadmap

✅ MVP  
✅ Animations  
✅ Dockerized  
⬜️ Auto-rotating station details  
⬜️ Touch interaction  

## License

MIT
