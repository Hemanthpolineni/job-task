from dbModels import Job

def get_all_jobs(db):
    return db.query(Job).all()

def get_limited_jobs(db, limit: int):
    return db.query(Job).limit(limit).all()

def create_job(db, job: Job):
    db.add(job)
    db.commit()
    db.refresh(job)
    return job

def get_job_by_id(db, job_id: int):
    return db.query(Job).filter(Job.id == job_id).first()

def delete_job(db, job: Job):
    db.delete(job)
    db.commit()