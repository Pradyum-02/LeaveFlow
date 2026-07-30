<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=240&color=0:2563eb,100:06b6d4&text=LeaveFlow&fontSize=55&fontColor=ffffff&animation=fadeIn&fontAlignY=38"/>

# 🏢 LeaveFlow

### Modern Full Stack Leave Management System

A secure and responsive leave management platform where employees can apply for leave and administrators can efficiently manage, approve, or reject requests through a role-based dashboard.

<p>

<a href="https://leave-flow-taupe.vercel.app/">
<img src="https://img.shields.io/badge/Live%20Application-Visit%20Now-2563eb?style=for-the-badge&logo=vercel&logoColor=white"/>
</a>

<a href="https://leaveflow-backend-nbuz.onrender.com">
<img src="https://img.shields.io/badge/Backend%20API-Render-0ea5e9?style=for-the-badge&logo=render&logoColor=white"/>
</a>

<a href="https://github.com/Pradyum-02/LeaveFlow">
<img src="https://img.shields.io/github/stars/Pradyum-02/LeaveFlow?style=for-the-badge"/>
</a>

<a href="https://github.com/Pradyum-02/LeaveFlow">
<img src="https://img.shields.io/github/forks/Pradyum-02/LeaveFlow?style=for-the-badge"/>
</a>

</p>

</div>

---

# 📖 Overview

LeaveFlow is a production-style Full Stack Leave Management System built using the MERN backend stack.

The application allows employees to securely submit leave requests while providing administrators with complete control over reviewing, approving, and rejecting requests through an intuitive dashboard.

The project demonstrates authentication, authorization, REST APIs, MVC architecture, MongoDB integration, protected routes, deployment, and responsive UI design.

---

# 🚀 Live Application

### 🌐 Frontend

https://leave-flow-taupe.vercel.app/

---

### ⚙ Backend API

https://leaveflow-backend-nbuz.onrender.com

> This backend can be directly tested using **Postman**, Thunder Client, or any REST API testing tool.

---

# ✨ Features

## 👨‍💼 Employee Module

- Secure Registration
- Secure Login
- JWT Authentication
- View Dashboard
- Apply Leave
- Leave History
- Profile Page
- Logout
- Responsive UI

---

## 👨‍💻 Admin Module

- Admin Login
- Dashboard Analytics
- View All Employees
- View Leave Requests
- Approve Requests
- Reject Requests
- Status Updates
- Protected Admin Routes

---

# 🔐 Security Features

- JWT Authentication
- Password Hashing (bcrypt)
- Protected Routes
- Role-Based Authorization
- Input Validation
- Secure API Communication

---

# 🛠 Tech Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=html,css,js,nodejs,express,mongodb,git,github,postman,render,vercel,vscode" />

</div>

---

# 🧱 Project Architecture

```
LeaveFlow
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── css
│   ├── js
│   ├── pages
│   ├── index.html
│   └── assets
│
└── README.md
```

---



# 📡 REST API

## Authentication

| Method | Endpoint |
|----------|----------------|
| POST | /auth/register |
| POST | /auth/login |

---

## Leave Routes

| Method | Endpoint |
|----------|----------------|
| GET | /leaves |
| POST | /leaves |
| PATCH | /leaves/:id |

---

## User Routes

| Method | Endpoint |
|----------|----------------|
| GET | /auth/users |

---

# ⚙ Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000

MONGO_URI=Your_MongoDB_URI

JWT_SECRET=Your_JWT_Secret
```

---

# 💻 Run Locally

## Clone Repository

```bash
git clone https://github.com/Pradyum-02/LeaveFlow.git
```

---

## Backend

```bash
cd backend

npm install

npm run dev
```

---

## Frontend

Simply open

```
frontend/index.html
```

or use

```
Live Server
```

inside VS Code.

---

# 🚀 Deployment

| Service | Platform |
|----------|-----------|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |

---

# 🎯 Learning Outcomes

Through this project I gained practical experience with:

- MVC Architecture
- Express.js
- MongoDB Atlas
- JWT Authentication
- REST API Development
- Role-Based Authorization
- Password Hashing
- Backend Deployment
- Frontend Deployment
- Git & GitHub Workflow
- API Testing with Postman
- Responsive UI Development

---

# 🔮 Future Improvements

- Email Notifications
- Leave Balance System
- Calendar Integration
- File Upload Support
- Search & Filters
- Pagination
- Analytics Dashboard
- Dark Mode
- Mobile Application
- Docker Deployment

---

# 👨‍💻 Developed By

**Pradyum Meshram**

Computer Engineering Student

Full Stack Web Developer

---

<div align="center">

### ⭐ If you found this project useful, consider giving it a star!

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=130&section=footer&color=0:2563eb,100:06b6d4"/>

</div>
