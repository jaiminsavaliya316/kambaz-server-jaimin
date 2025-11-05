# Kambaz - Backend API 🎓

Node.js + Express API powering the Kambaz Learning Management System.

> **🎨 Want to see what this actually looks like?** Head over to the [frontend repo](https://github.com/jaiminsavaliya316/kambaz-jaimin) where I've got screenshots that'll make you say "okay, that's pretty neat" (or at least I hope so 😅).

---

## 📦 What This Does

RESTful API handling:
- 🔐 Session-based authentication with express-session
- 📚 Course, module, and assignment CRUD operations
- 👥 User management with role-based access (Faculty vs Students)
- 🗄️ MongoDB data persistence with Mongoose ODM

---

## 🛠️ Tech Stack

**Frontend**
- React 18 with TypeScript
- Vite for build tooling
- Modern component architecture

**Backend**
- Node.js with Express 5
- MongoDB with Mongoose ODM
- Session management with express-session
- RESTful API design

**Deployment**
- Frontend: Netlify
- Backend: Render
- Database: MongoDB Atlas

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ or 20+
- **MongoDB** (local installation or Atlas connection string)

### Installation
```bash
# Clone the repository
git clone https://github.com/jaiminsavaliya316/kambaz-server-jaimin.git
cd kambaz-server-jaimin

# Install dependencies
npm install
```

### Environment Configuration

Create a `.env` file in the root directory:
```env
NODE_ENV=development
NETLIFY_URL=http://localhost:5173           # Frontend URL (must match your React dev server)
NODE_SERVER_DOMAIN=http://localhost:4000    # Backend URL (this server's address)
SESSION_SECRET=your_secret_session_key_here
MONGO_CONNECTION_STRING=mongodb://127.0.0.1:27017/kambaz  # Local MongoDB
```

**Alternative: Using MongoDB Atlas**
```env
MONGO_CONNECTION_STRING=mongodb+srv://username:password@cluster.mongodb.net/kambaz
```

> **💡 Tip:** Change `SESSION_SECRET` to a random string for better security. The frontend must run on the port specified in `NETLIFY_URL` (default: 5173).
### Run the Server
```bash
npm start
```

✅ Server will start on `http://localhost:5000` (or your configured PORT)

---

## 🔗 Related Links

- **Frontend Repository:** [kambaz-jaimin](https://github.com/jaiminsavaliya316/kambaz-jaimin) ← **Go here for the full story and pretty screenshots!** 📸
---

## 🐛 Troubleshooting

**MongoDB Connection Issues:**
```bash
# Check if MongoDB is running locally
mongod --version

# Or verify your Atlas connection string format.
mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>

# If your connection string is correct but not working, try URL-encoding special characters (e.g., replace `@` with `%40`).
```

---

## 👨‍💻 Author

**Jaimin Savaliya**
- GitHub: [@jaiminsavaliya316](https://github.com/jaiminsavaliya316)
- LinkedIn: [Your LinkedIn](https://www.linkedin.com/in/jaimin-savaliya)

---

*Built with ☕ and a questionable amount of Stack Overflow tabs open.*
