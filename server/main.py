from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Adjust this to your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# This is a simple in-memory storage. In a real application, you'd use a database.
users = {}

# Add a test user
test_user = User(username="paparu", password="paparu", age=30, gender="other")
users[test_user.username] = test_user

class User(BaseModel):
    username: str
    password: str
    age: int
    gender: str

class LoginUser(BaseModel):
    username: str
    password: str

@app.post("/create-user")
async def create_user(user: User):
    if user.username in users:
        raise HTTPException(status_code=400, detail="Username already exists")
    users[user.username] = user
    return {"message": "User created successfully"}

@app.post("/login")
async def login(user: LoginUser):
    if user.username not in users or users[user.username].password != user.password:
        raise HTTPException(status_code=400, detail="Invalid username or password")
    return {"message": "Login successful"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

