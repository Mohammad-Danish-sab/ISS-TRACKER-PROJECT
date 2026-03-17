import requests
from app.services.location_service import get_country

def get_iss_location():
    url = "http://api.open-notify.org/iss-now.json"

    try:
        response = requests.get(url, timeout=5)
        data = response.json()

      
        lat = data["iss_position"]["latitude"]
        lon = data["iss_position"]["longitude"]

        country = get_country(lat, lon)

        return {
            "latitude": lat,
            "longitude": lon,
            "country": country,
            "timestamp": data["timestamp"]
        }
        

    except requests.exceptions.RequestException:
        return {
            "error": "ISS API is not responding right now"
        }
        
    
def get_astronauts():
    url = "http://api.open-notify.org/astros.json"

    try:
        response = requests.get(url, timeout=5)
        data = response.json()

        return {
            "number": data["number"],
            "people": data["people"]
        }

    except requests.exceptions.RequestException:
        return {
            "error": "Astronaut API not available"
        }