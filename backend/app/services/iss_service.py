import requests
from app.services.location_service import get_country
from app.services.weather_service import get_weather


def get_iss_location():
    url = "http://api.open-notify.org/iss-now.json"
    response = requests.get(url)   # ✅ correct
    data = response.json()

    return {
        "latitude": float(data["iss_position"]["latitude"]),
        "longitude": float(data["iss_position"]["longitude"])
    }


def get_iss_speed():
    # ISS avg speed ~ 27600 km/h
    return {
        "speed_km_h": 27600
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

def get_iss_pass(lat, lon):
    url = f"http://api.open-notify.org/iss-pass.json?lat={lat}&lon={lon}"
    response = requests.get(url)
    data = response.json()

    return {
        "passes": data.get("response", [])
    }