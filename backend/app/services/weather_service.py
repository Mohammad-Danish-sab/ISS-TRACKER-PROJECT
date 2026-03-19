import requests

API_KEY = "YOUR_OPENWEATHER_API_KEY"

def get_weather(lat, lon):

    url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}&units=metric"

    try:
        data = requests.get(url).json()

        return {
            "temperature": data["main"]["temp"],
            "weather": data["weather"][0]["main"],
            "wind": data["wind"]["speed"]
        }

    except:
        return {
            "temperature": "N/A",
            "weather": "Unknown",
            "wind": "N/A"
        }