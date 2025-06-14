# Task Management App

A simple full-stack task management application built with **React** (frontend) and **Node.js/Express** (backend).  
Users can create, view, update, and delete tasks.

---

## Features

- Add new tasks with a name and description
- View a list of all tasks
- Edit or delete existing tasks
- Clean, responsive UI using React and Tailwind CSS
- RESTful API with in-memory data storage (no database required)
- Deployed backend: [https://task-management-internship-assessment.onrender.com/](https://task-management-internship-assessment.onrender.com/)

---

## Folder Structure

```
Task-management-app/
│
├── backend/   # Node.js/Express API
│   ├── app.js
│   ├── package.json
│   ├── .gitignore
│   ├── data/
│   │   └── tasks.js
│   ├── controllers/
│   │   └── taskController.js
│   └── routes/
│       └── taskRoutes.js
│
└── frontend/  # React app (Vite)
    ├── src/
    │   ├── api.js
    │   ├── App.jsx
    │   ├── main.jsx
    │   ├── index.css
    │   └── components/
    │       ├── TaskForm.jsx
    │       └── TaskList.jsx
    ├── index.html
    ├── package.json
    ├── .gitignore
    ├── vite.config.js
    └── README.md
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)

---

### 1. Start the Backend Locally

```sh
cd backend
npm install
node app.js
```

The backend server will run at [http://localhost:5000](http://localhost:5000).

---

### 2. Start the Frontend Locally

Open a new terminal:

```sh
cd frontend
npm install
npm run dev
```

The frontend will run at [http://localhost:5173](http://localhost:5173) (default Vite port).

---

### 3. API Endpoints

| Method | Endpoint         | Description            |
|--------|------------------|------------------------|
| GET    | `/api/tasks`     | Get all tasks          |
| POST   | `/api/tasks`     | Create a new task      |
| PUT    | `/api/tasks/:id` | Update a task by ID    |
| DELETE | `/api/tasks/:id` | Delete a task by ID    |

---

### 4. Deployment

- **Backend** is deployed on Render:  
  [https://task-management-internship-assessment.onrender.com/](https://task-management-internship-assessment.onrender.com/)

#### Update API URL in Frontend according to your deployment

In [`frontend/src/api.js`](frontend/src/api.js):

```js
const API_URL = "https://task-management-internship-assessment.onrender.com/api/tasks";
```

---

## Notes

- All data is stored in-memory and will reset when the backend restarts.
- The frontend expects the backend to be running on the deployed Render URL or on port 5000 locally.
- CORS is enabled on the backend to allow frontend access.

---
