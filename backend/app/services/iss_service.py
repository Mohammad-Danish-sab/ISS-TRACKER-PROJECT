import requests
from app.services.location_service import get_country
from app.services.weather_service import get_weather

def get_iss_location():
    url = "http://api.open-notify.org/iss-now.json"

    try:
        response = requests.get(url, timeout=5)
        data = response.get(url).json()

      
        lat = data["iss_position"]["latitude"]
        lon = data["iss_position"]["longitude"]

        country = get_country(lat, lon)
        weather = get_weather(lat, lon)

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

def get_country(lat, lon):
    try:
        url = f"https://nominatim.openstreetmap.org/reverse?lat={lat}&lon={lon}&format=json"
        res = requests.get(url)

        if res.status_code != 200:
            return "Ocean"

        data = res.json()
        return data.get("address", {}).get("country", "Ocean")

    except Exception as e:
        print("Error:", e)
        return "Ocean"