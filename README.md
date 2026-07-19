# 🎓 CertifyHub

**CertifyHub** is a full-stack certificate management platform designed to simplify certificate creation for workshops, hackathons, seminars, conferences, and other events. Organizers can create events, upload certificate templates, import recipient details using CSV files, and generate personalized PDF certificates in bulk.

---

# ✨ Features

## 🔐 Authentication

* Secure organizer registration and login
* JWT-based authentication
* Protected routes for authenticated users

## 📅 Event Management

* Create and manage multiple events
* Upload certificate templates
* Store and manage event details

## 📄 Bulk Certificate Generation

* Upload recipient data using CSV files
* Generate personalized PDF certificates in bulk
* Dynamic data mapping from CSV
* Preview certificates before downloading

## 📥 Certificate Management

* Download individual certificates
* Bulk certificate generation
* Email-ready certificate workflow *(Coming Soon)*
* ZIP download for all generated certificates *(Planned)*

## 📊 Organizer Dashboard

* Manage events from a centralized dashboard
* View uploaded templates
* Generate and download certificates
* Track certificate generation status

---

# 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* React Router
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JWT (JSON Web Token)
* bcrypt.js

### File Processing

* Multer
* PDF-Lib
* CSV Parser

---

# 📁 Project Structure

```text
CertifyHub/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── generated-certificates/
│   ├── utils/
│   └── package.json
│
└── README.md
```

---

# 🚀 Getting Started

## Clone the Repository

```bash
git clone https://github.com/your-username/CertifyHub.git
cd CertifyHub
```

## Install Frontend

```bash
cd client
npm install
npm run dev
```

## Install Backend

```bash
cd server
npm install
npm run dev
```

---

# 📌 Workflow

1. Organizer registers or logs in.
2. Create a new event.
3. Upload a certificate template.
4. Upload recipient details using a CSV file.
5. Generate personalized PDF certificates.
6. Preview and download certificates.
7. (Upcoming) Send certificates via email or download all as a ZIP.

---

# 🔮 Future Enhancements

* 📧 Automated email delivery
* 📦 Download all certificates as a ZIP
* 🔍 Certificate verification using QR codes
* ☁️ Cloud storage integration
* 📈 Event analytics dashboard
* 🎨 Multiple certificate template support

---

# 👨‍💻 Author

**Apoorva Poojary**

---

# 📄 License

This project is licensed under the MIT License.
