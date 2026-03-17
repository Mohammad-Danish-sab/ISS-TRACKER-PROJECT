from fastapi import FastAPI
from app.routes import iss

app = FastAPI()

app.include_router(iss.router)