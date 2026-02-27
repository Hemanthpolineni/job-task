from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine
import dbModels
from routes import job_routes

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
)

dbModels.Base.metadata.create_all(bind=engine)

app.include_router(job_routes.router)

@app.get("/")
def home():
    return {"message": "hi welcome"}