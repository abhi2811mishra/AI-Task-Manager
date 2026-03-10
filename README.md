# AI Task Manager

A full-stack **AI assisted task management application** built using React and Flask.
The application allows users to create tasks, track progress, and get **AI suggested task priorities** based on task descriptions.

---

# Project Demo

![Dashboard Screenshot](screenshots/da<img width="1919" height="1016" alt="dashboaed" src="https://github.com/user-attachments/assets/31d09f88-671e-450a-913d-867ee86ff7d6" />
shboard.png)

---

# Tech Stack

### Frontend

* React
* Material UI
* Axios
* Framer Motion
* Chart.js

### Backend

* Python
* Flask
* Flask-CORS
* SQLAlchemy

### Database

* SQLite (Relational Database)

---

# Features

* Create tasks
* Delete tasks
* Mark tasks as completed
* AI priority suggestion
* Dashboard analytics
* Animated UI components
* Dark / Light theme
* Task completion tracking
* Data visualization with charts

---

# System Architecture

Frontend (React)
⬇
REST API (Flask)
⬇
Database (SQLite)

The frontend communicates with the backend using REST APIs.
The backend processes requests, interacts with the database, and returns structured responses.

---

# AI Feature

The application includes an AI inspired feature that analyzes the task description and suggests a priority level.

Example:

Task Description:

```
urgent project submission
```

Suggested Priority:

```
High
```

This helps users quickly categorize and manage tasks.

---

# Project Structure

```
AI-Task-Manager
│
├── backend
│   ├── app.py
│   ├── models.py
│   ├── database.py
│   ├── ai_service.py
│   └── requirements.txt
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── App.js
│   │   └── api.js
│   └── package.json
│
└── screenshots
    └── dashboard.png
```

---

# Running the Project

## 1️⃣ Clone the Repository

```
git clone https://github.com/abhi2811mishra/AI-Task-Manager.git
cd AI-Task-Manager
```

---

# 2️⃣ Backend Setup

Navigate to backend folder

```
cd backend
```

Create virtual environment

```
python -m venv venv
```

Activate environment

Windows:

```
venv\Scripts\activate
```

Install dependencies

```
pip install -r requirements.txt
```

Run the Flask server

```
python app.py
```

Backend will run at:

```
http://localhost:5000
```

---

# 3️⃣ Frontend Setup

Open a new terminal and go to frontend

```
cd frontend
```

Install dependencies

```
npm install
```

Start React app

```
npm start
```

Frontend will run at:

```
http://localhost:3000
```

---

# API Endpoints

### Create Task

POST

```
/tasks
```

### Get All Tasks

GET

```
/tasks
```

### Update Task Status

PUT

```
/tasks/<id>
```

### Delete Task

DELETE

```
/tasks/<id>
```

### AI Priority Suggestion

POST

```
/ai/suggest
```

---

# AI Assistance

AI tools were used to assist with:

* initial project architecture
* React component scaffolding
* backend API design
* UI improvements
* debugging and optimization

All code was reviewed and integrated manually.

---

# Future Improvements

* User authentication
* Real AI NLP integration
* Task reminders
* Mobile application
* Cloud database

---

# Author

Abhinav Mishra

GitHub:
https://github.com/abhi2811mishra
