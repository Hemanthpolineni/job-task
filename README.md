# 📌 Job Management App

A full-stack **Job Management System** built using:

- ⚡ FastAPI (Backend)
- 🗄 PostgreSQL (Database)
- 🧠 SQLAlchemy (ORM)
- 🎨 React + Vite (Frontend)
- 🔄 Layered Architecture (Route → Service → Repository → DB)

---

## 🚀 Features

- ✅ Create a job
- ✅ Get all jobs
- ✅ Get limited jobs using query parameter (`?limit=`)
- ✅ Get job by ID
- ✅ Delete job by ID
- ✅ Clean layered backend architecture
- ✅ RESTful API design

---

## 🏗 Architecture

Backend follows proper **Layered Architecture**:

Route → Service → Repository → Database

---

## 📂 Backend Structure
```
backend/
│
├── main.py
├── database.py
├── dbModels.py
├── schema.py
│
├── routes/
│ └── job_routes.py
│
├── services/
│ └── job_services.py
│
├── repository/
│ └── job_repository.py

```
---

## 📂 Frontend Structure

```
frontend/
│
└── jobs-portal/
├── src/
├── pages/
├── services/

```
---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/jobs` | Get all jobs |
| GET | `/jobs?limit=2` | Get limited jobs |
| GET | `/jobs/{id}` | Get job by ID |
| POST | `/jobs` | Create new job |
| DELETE | `/jobs/{id}` | Delete job |

---

## ⚙️ How To Run Locally

### 🔹 1. Clone the repository

```bash
git clone https://github.com/Hemanthpolineni/job-task.git
cd job-task

🔹 2. Run Backend
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
uvicorn main:app --reload

Backend runs on:
http://127.0.0.1:8000

🔹 3. Run Frontend
cd frontend/jobs-portal
npm install
npm run dev

Frontend runs on:
http://localhost:5173
