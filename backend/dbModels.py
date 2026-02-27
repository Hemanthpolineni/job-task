from sqlalchemy import Column, Integer, String
from database import Base

class Job(Base):
    __tablename__ = "jobs"

    id = Column(Integer, primary_key=True, index=True)
    position = Column(String)
    experience = Column(String)
    location = Column(String)
    team = Column(String)
    type = Column(String)