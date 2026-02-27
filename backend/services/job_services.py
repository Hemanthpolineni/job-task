from fastapi import HTTPException
from dbModels import Job
from repository import job_repository


def get_all_jobs_service(db, limit: int | None = None):

    if limit is not None:
        if limit <= 0:
            raise HTTPException(status_code=400, detail="Limit must be greater than 0")

        jobs = job_repository.get_limited_jobs(db, limit)

        if not jobs:
            raise HTTPException(status_code=404, detail="No Jobs found")

        return jobs

    return job_repository.get_all_jobs(db)


def create_job_service(db, job_data):
    new_job = Job(
        position=job_data.position,
        experience=job_data.experience,
        location=job_data.location,
        team=job_data.team,
        type=job_data.type
    )

    return job_repository.create_job(db, new_job)


def delete_job_service(db, job_id):
    job = job_repository.get_job_by_id(db, job_id)

    if not job:
        raise HTTPException(status_code=404, detail="Job not found")

    job_repository.delete_job(db, job)

    return {"message": "Deleted successfully"}

def update_job_service(db, job_id, job_data):
    job = job_repository.get_job_by_id(db, job_id)

    if not job:
        raise HTTPException(status_code=404, detail="Job not found")

    updated_data = {
        "position": job_data.position,
        "experience": job_data.experience,
        "location": job_data.location,
        "team": job_data.team,
        "type": job_data.type
    }

    return job_repository.update_job(db, job, updated_data)