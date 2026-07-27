<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=220&color=0:ff8c00,100:ff5e00&text=LeaveFlow&fontSize=50&fontColor=ffffff&animation=fadeIn&fontAlignY=38"/>

# 🏢 LeaveFlow

### Modern Full Stack Leave Management System

A secure, responsive, and role-based Leave Management System that simplifies employee leave requests while giving administrators complete control over approvals and workforce management.

<p>

<a href="https://leave-flow-taupe.vercel.app/">
<img src="https://img.shields.io/badge/Live%20Demo-Visit%20Website-orange?style=for-the-badge"/>
</a>

<a href="https://leaveflow-backend-nbuz.onrender.com">
<img src="https://img.shields.io/badge/Backend-Render-success?style=for-the-badge"/>
</a>

<a href="https://github.com/Pradyum-02/LeaveFlow">
<img src="https://img.shields.io/github/stars/Pradyum-02/LeaveFlow?style=for-the-badge"/>
</a>

</p>

</div>

---

# 📖 About Project

LeaveFlow is a Full Stack Leave Management System developed to streamline the leave application process within an organization.

The application allows employees to securely register, log in, apply for leave, and track the status of their requests. Administrators can review all leave applications and approve or reject them through a dedicated dashboard.

This project demonstrates the implementation of authentication, authorization, REST APIs, database integration, and role-based access control while following a clean MVC architecture.

---

# ✨ Features

## 👨‍💼 Employee Module

- Secure Registration
- JWT Login Authentication
- Employee Dashboard
- Apply for Leave
- View Leave History
- Profile Management
- Responsive Interface

---

## 👨‍💻 Admin Module

- Secure Admin Login
- Admin Dashboard
- View All Employees
- View All Leave Requests
- Approve Leave Requests
- Reject Leave Requests
- Leave Management

---

# 🔐 Security Features

- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes
- Role-Based Authorization
- Secure REST APIs
- MongoDB Data Storage

---

# 🛠️ Tech Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=html,css,js,nodejs,express,mongodb,git,github,postman,vercel,render,vscode,npm" />

</div>

---

# 🚀 Currently Implemented

- User Authentication
- Employee Dashboard
- Admin Dashboard
- Leave Request Module
- Leave Approval Workflow
- MongoDB Database
- REST API
- Cloud Deployment
- Responsive UI
- MVC Backend Architecture

---
# 🏗 Project Architecture

<div align="center">

```text
                    Employee / Admin
                           │
                           ▼
        HTML • CSS • JavaScript Frontend
                           │
                    Fetch REST APIs
                           │
                           ▼
                Express.js Backend Server
                           │
          JWT Authentication + Authorization
                           │
                           ▼
                   MongoDB Atlas Database
```

</div>

---

# 📂 Project Structure

```text
LeaveFlow/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── css/
    ├── js/
    ├── pages/
    └── index.html
```

---

# 🌐 Live Deployment

<div align="center">

| Service | Link |
|----------|------|
| 🚀 Frontend | https://leave-flow-taupe.vercel.app/ |
| ⚙️ Backend API | https://leaveflow-backend-nbuz.onrender.com |

</div>

---

# 🖥️ Application Modules

### 🔑 Authentication

- User Registration
- User Login
- Password Encryption
- JWT Token Generation
- Protected Routes

---

### 👨‍💼 Employee Dashboard

- Dashboard Overview
- Leave Statistics
- Leave Status
- Quick Actions
- Profile Information

---

### 📝 Leave Management

- Apply for Leave
- Leave Type Selection
- Start & End Date
- Leave Reason
- Leave Duration
- Request Submission

---

### 📋 Leave History

- View Previous Requests
- Pending Requests
- Approved Requests
- Rejected Requests
- Leave Details

---

### 👨‍💻 Admin Dashboard

- View All Employees
- View Leave Requests
- Dashboard Statistics
- Employee Overview
- Leave Monitoring

---

### ✅ Leave Approval

- Review Requests
- Approve Leave
- Reject Leave
- Status Updates
- Real-Time Database Updates

---

# ⚙️ Backend Features

- RESTful API Architecture
- Express.js Server
- MongoDB Atlas Integration
- Mongoose ODM
- MVC Architecture
- Middleware Support
- JWT Verification
- Password Hashing using bcrypt
- Environment Variables
- Cloud Deployment

---

# 🎨 Frontend Features

- Responsive Design
- Mobile Friendly UI
- Clean Dashboard
- Reusable Layout
- Modern Components
- Dynamic Rendering
- Fetch API Integration
- Vanilla JavaScript
- Responsive Tables
- Modular Structure

---
# 📸 Application Preview

> Screenshots will be added after the final UI is completed.

<div align="center">

| Login | Employee Dashboard |
|-------|--------------------|
| 📷 Coming Soon | 📷 Coming Soon |

| Apply Leave | Admin Dashboard |
|-------------|-----------------|
| 📷 Coming Soon | 📷 Coming Soon |

</div>

---

# ⚡ REST API

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/auth/register` | Register User |
| POST | `/auth/login` | Login User |

---

## Leave Management

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/leaves` | Apply Leave |
| GET | `/leaves` | Get Leave Requests |
| PUT | `/leaves/:id` | Approve / Reject Leave |

---

# 💻 Installation

Clone the repository

```bash
git clone https://github.com/Pradyum-02/LeaveFlow.git
```

Go inside the project

```bash
cd LeaveFlow
```

Install backend dependencies

```bash
cd backend
npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key
```

Start Backend

```bash
npm run dev
```

Open another terminal

```bash
cd frontend
```

Run the frontend using Live Server or any static server.

---

# 📦 Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript (ES6)

### Backend

- Node.js
- Express.js

### Database

- MongoDB Atlas
- Mongoose

### Authentication

- JWT
- bcrypt

### Deployment

- Vercel
- Render

### Development Tools

- VS Code
- Git
- GitHub
- Postman

---

# 🎯 Future Improvements

- 📅 Calendar Integration
- 📧 Email Notifications
- 🔔 Real-Time Notifications
- 📊 Admin Analytics Dashboard
- 👤 Profile Picture Upload
- 📎 Document Attachment Support
- 🌙 Dark Mode
- 🔍 Search & Filters
- 📱 Progressive Web App (PWA)
- 📈 Leave Balance Tracking

---

# 👨‍💻 Developer

<div align="center">

## Pradyum Meshram

Aspiring Full Stack Developer

Building modern, scalable, and user-friendly web applications while continuously learning new technologies.

<p>

<a href="https://github.com/Pradyum-02">
<img src="https://skillicons.dev/icons?i=github"/>
</a>

&nbsp;&nbsp;&nbsp;

<a href="https://portfolio-pradyum.vercel.app/">
<img src="https://img.shields.io/badge/Portfolio-Visit-orange?style=for-the-badge"/>
</a>

&nbsp;&nbsp;&nbsp;

<a href="YOUR_LINKEDIN_URL">
<img src="https://skillicons.dev/icons?i=linkedin"/>
</a>

</p>

</div>

---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.

It helps motivate me to continue building more open-source projects.

---

<div align="center">

### Built with ❤️ using HTML, CSS, JavaScript, Node.js, Express & MongoDB

*"Code • Learn • Build • Repeat"* 🚀

</div>

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=120&section=footer&color=0:ff8c00,100:ff5e00"/>

</div>
