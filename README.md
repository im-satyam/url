# ✨ URL Shortener 🚀

A simple and modern URL shortener web application. Create short links, share them, and track your URLs with ease!  
Built with **Node.js**, **Express**, **MongoDB**, and **React**.

---

## 🌟 Features

- 🔗 Shorten long URLs
- 🚦 Redirect short URLs to original links
- 📊 Basic analytics (optional)
- 🛠️ RESTful API
- ⚡ Fast & responsive frontend

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
```

### 2️⃣ Backend Setup (`/backend`)

```bash
cd backend
npm install
```

Create a `.env` file in `/backend` and add:
```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

Start the backend server:
```bash
npm start
```

### 3️⃣ Frontend Setup (`/frontend`)

```bash
cd ../frontend
npm install
```

Start the frontend development server:
```bash
npm run dev
```

---

## 🌐 Access the App

- Backend: [http://localhost:3000](http://localhost:3000)
- Frontend: [http://localhost:5173](http://localhost:5173)

---

## 📚 API Endpoints

- `POST /api/shorten` – Shorten a URL
- `GET /api/:shortUrl` – Get original URL (JSON)
- `GET /api/all` – Get all URLs
- `GET /:shortUrl` – Redirect to original URL

---

## 📝 License

This project is licensed under the MIT License.

---

## 🤝 Contributing

Feel free to contribute, open issues, or suggest features!  
Made with ❤️ by [your name].

---

## 🎉 Enjoy Shortening Your URLs!