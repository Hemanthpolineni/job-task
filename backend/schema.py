from pydantic import BaseModel

class JobCreate(BaseModel):
    position: str
    experience: str
    location: str
    team: str
    type: str