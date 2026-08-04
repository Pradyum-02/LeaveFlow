<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=240&color=0:2563eb,100:06b6d4&text=LeaveFlow&fontSize=55&fontColor=ffffff&animation=fadeIn&fontAlignY=38"/>

# 🏢 LeaveFlow

### Modern Full Stack Leave Management System

A secure, role-based leave management platform where employees can apply for leave and administrators can review, approve, or reject requests through a dedicated dashboard — built on a full MERN-style architecture with JWT authentication and protected routes.

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
<a href="https://github.com/Pradyum-02/LeaveFlow/blob/main/LICENSE">
<img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge"/>
</a>
</p>

</div>

---

## 📖 Overview

**LeaveFlow** is a production-style Full Stack Leave Management System built to model a real-world HR workflow. Employees securely submit leave requests, while administrators get complete visibility and control through an intuitive dashboard for reviewing, approving, and rejecting requests.

The project was built to demonstrate practical, end-to-end engineering: authentication & authorization, RESTful API design, MVC architecture, MongoDB integration, protected routing, and a fully deployed, responsive frontend.

---

## 🚀 Live Application

<table>
<tr>
<td><strong>🌐 Frontend</strong></td>
<td><a href="https://leave-flow-taupe.vercel.app/">leave-flow-taupe.vercel.app</a></td>
</tr>
<tr>
<td><strong>⚙️ Backend API</strong></td>
<td><a href="https://leaveflow-backend-nbuz.onrender.com">leaveflow-backend-nbuz.onrender.com</a></td>
</tr>
</table>

> 💡 The backend API can be tested directly using **Postman**, **Thunder Client**, or any REST client.

---

## ✨ Features

### 👨‍💼 Employee Module
- Secure registration & login (JWT-based)
- Personal dashboard with leave overview
- Apply for leave
- View leave history & status
- Profile management
- Fully responsive UI

### 👨‍💻 Admin Module
- Admin login with elevated permissions
- Dashboard analytics
- View all employees
- View & manage all leave requests
- Approve / reject with status updates
- Protected admin-only routes

---

## 🔐 Security

| Measure | Implementation |
|---|---|
| Authentication | JSON Web Tokens (JWT) |
| Password Storage | Hashed with **bcrypt** |
| Authorization | Role-based access control |
| Route Protection | Middleware-guarded protected routes |
| Input Validation | Server-side request validation |
| API Communication | Secured REST endpoints |

---

## 🛠️ Tech Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=html,css,js,nodejs,express,mongodb,git,github,postman,render,vercel,vscode" />

</div>

<div align="center">

| Layer | Technologies |
|---|---|
| **Frontend** | HTML5, CSS3, JavaScript |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Atlas) |
| **Auth** | JWT, bcrypt |
| **Tooling** | Git, GitHub, Postman, VS Code |
| **Deployment** | Vercel (Frontend), Render (Backend) |

</div>

---

## 🧱 Project Architecture

```
LeaveFlow/
│
├── backend/
│   ├── config/           # Database & environment configuration
│   ├── controllers/      # Request handling & business logic
│   ├── middleware/        # Auth guards, error handling
│   ├── models/            # Mongoose schemas
│   ├── routes/            # API route definitions
│   ├── server.js           # Entry point
│   └── package.json
│
├── frontend/
│   ├── css/                # Stylesheets
│   ├── js/                 # Client-side logic
│   ├── pages/              # HTML pages
│   ├── assets/             # Images & static assets
│   └── index.html
│
└── README.md
```

---

## 📡 REST API Reference

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/auth/register` | Register a new user |
| `POST` | `/auth/login` | Authenticate & receive JWT |

### Leave Management

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/leaves` | Fetch leave requests |
| `POST` | `/leaves` | Submit a new leave request |
| `PATCH` | `/leaves/:id` | Update status (approve/reject) |

### Users

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/auth/users` | Fetch all registered users |

---

## ⚙️ Environment Variables

Create a `.env` file inside the `backend/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

---

## 💻 Getting Started

### Clone the repository

```bash
git clone https://github.com/Pradyum-02/LeaveFlow.git
cd LeaveFlow
```

### Backend setup

```bash
cd backend
npm install
npm run dev
```

### Frontend setup

Open `frontend/index.html` directly, or serve it with **Live Server** in VS Code for the best development experience.

---

## 🚀 Deployment

| Service | Platform |
|---|---|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |

---

## 🎯 Learning Outcomes

Building LeaveFlow provided hands-on experience with:

- MVC architecture & clean project structure
- Express.js REST API development
- MongoDB Atlas integration
- JWT-based authentication & role-based authorization
- Password hashing & security best practices
- Full-stack deployment (frontend + backend)
- Git & GitHub collaborative workflow
- API testing with Postman
- Responsive, accessible UI design

---

## 🔮 Roadmap

- [ ] Email notifications for status updates
- [ ] Leave balance tracking system
- [ ] Calendar integration
- [ ] File upload support for leave documents
- [ ] Search & filter functionality
- [ ] Pagination for large datasets
- [ ] Advanced analytics dashboard
- [ ] Dark mode
- [ ] Mobile application
- [ ] Docker-based deployment

---

## 👨‍💻 Developed By

**Pradyum Meshram**
Computer Engineering Student · Full Stack Web Developer

<p>
<a href="https://github.com/Pradyum-02">
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>
</a>
<a href="https://portfolio-react-two-kappa-81.vercel.app/">
<img src="https://img.shields.io/badge/Portfolio-2563eb?style=for-the-badge&logo=vercel&logoColor=white"/>
</a>
</p>

---

<div align="center">

### ⭐ If you found this project useful, consider giving it a star!

<img src="https://capsule-render.vercel.app/api?type=waving&height=130&section=footer&color=0:2563eb,100:06b6d4"/>

</div>
