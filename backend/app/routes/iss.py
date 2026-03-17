from fastapi import APIRouter
from app.services.iss_service import get_iss_location, get_astronauts

router = APIRouter()

@router.get("/iss/location")
def iss_location():
    return get_iss_location()

@router.get("/iss/astronauts")
def astronauts():
    return get_astronauts()

