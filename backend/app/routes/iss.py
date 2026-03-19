from fastapi import APIRouter, Query
from app.services.iss_service import get_iss_location, get_astronauts, get_iss_pass
import requests

router = APIRouter(prefix="/iss")

@router.get("/iss/location")
def iss_location():
    return get_iss_location()

@router.get("/speed")

@router.get("/pass")
def iss_pass(lat: float = Query(...), lon: float = Query(...)):
    return get_iss_pass(lat, lon)

def iss_speed():
    return get_iss_speed()

@router.get("/iss/astronauts")
def astronauts():
    return get_astronauts()

@router.get("/iss/pass")
def get_iss_pass():

    url = "http://api.open-notify.org/iss-pass.json?lat=28.61&lon=77.20"

    try:
        data = requests.get(url).json()
        return data

    except:
        return {"error": "Unable to fetch ISS pass"}

