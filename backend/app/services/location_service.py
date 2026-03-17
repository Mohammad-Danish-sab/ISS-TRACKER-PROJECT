import requests

def get_country(lat, lon):
    url = f"https://nominatim.openstreetmap.org/reverse?lat={lat}&lon={lon}&format=json"

    try:
        response = requests.get(url, timeout=5)
        data = response.json()

        return data["address"].get("country", "Ocean")

    except:
        return "Unknown"