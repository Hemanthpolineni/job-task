from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from database import get_db
from services.job_services import (
    get_all_jobs_service,
    create_job_service,
    delete_job_service,
    update_job_service,
)

from schema import JobCreate

router = APIRouter()


# 🔹 Get all jobs (with optional limit)
@router.get("/jobs")
def get_jobs(
    limit: int | None = Query(default=None),
    db: Session = Depends(get_db)
):
    return get_all_jobs_service(db, limit)


# 🔹 Create job
@router.post("/jobs")
def create_job(job: JobCreate, db: Session = Depends(get_db)):
    return create_job_service(db, job)


# 🔹 Delete job
@router.delete("/jobs/{id}")
def delete_job(id: int, db: Session = Depends(get_db)):
    return delete_job_service(db, id)

# 🔹 Update job
@router.put("/jobs/{id}")
def update_job(id: int, job: JobCreate, db: Session = Depends(get_db)):
    return update_job_service(db, id, job)