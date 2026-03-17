from fastapi import APIRouter
from app.services.iss_service import get_iss_location

router = APIRouter()

@router.get("/iss/location")
def iss_location():
    return get_iss_location()