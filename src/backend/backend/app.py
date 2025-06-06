
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/station_status")
def get_station_status():
    # Simple random example data
    def station(patients, avg_min, status):
        return {
            "patients_in_queue": patients,
            "avg_time": f"{avg_min} min",
            "status": status
        }

    statuses = ["fluid", "caution", "over_capacitated"]

    return {
        "station1": station(random.randint(0, 5), random.randint(3, 8), random.choice(statuses)),
        "station2": station(random.randint(0, 8), random.randint(5, 12), random.choice(statuses)),
        "station3": station(random.randint(0, 3), random.randint(4, 7), random.choice(statuses)),
        "station4": station(random.randint(0, 10), random.randint(10, 20), random.choice(statuses)),
        "station5": station(random.randint(0, 4), random.randint(4, 7), random.choice(statuses)),
    }
