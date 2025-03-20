# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Zenkly
📌 **Demo Video:** [Click here to watch](https://drive.google.com/file/d/19RD79XPgQxEsU2or6MZMVhX-esnnmP0a/view?usp=sharing)

## 🌟 Overview
Zenkly is a feature-rich web application built using React, Tailwind CSS (v4), and DaisyUI. It provides users with authentication, project creation, idea generation, and account management functionalities.

This project follows a branch-based development approach, allowing efficient feature implementation.

## 🛠️ Tech Stack
- **Frontend**: React, Tailwind CSS v4, DaisyUI  
- **State Management**: React Context API  
- **Authentication**: Custom Hooks (`useLogin`, `useLogout`, `useRegister`)  
- **Version Control**: Git (Branch-Based Workflow)  

---
## 🔗 API Integration  
We use a **staging server** for API integration to test new features, validate API responses, and debug issues before deploying to production.  

### **Staging API Setup**  
- The API base URL is configured using **environment variables** to keep it secure.  
- Update your `.env` file with:
    ```plaintext
  REACT_APP_API_BASE_URL=https://staging.example.com/api/
  
## 🚀 Installation & Setup

### ✅ Prerequisites
Ensure you have the following installed:
- **Node.js** (v16 or later)
- **npm** or **yarn**

### 🛠️ Steps to Run the Project
```sh
# 1️⃣ Clone the repository
git clone https://github.com/your-username/zenkly.git
cd zenkly

# 2️⃣ Install dependencies
npm install   # or yarn install

# 3️⃣ Checkout the branch you need to work on
git checkout feature-branch-name

# 4️⃣ Start the development server
npm run dev   # or yarn dev

# 5️⃣ Open in browser
http://localhost:5173
```

---

## 🌿 Branching Strategy
Zenkly follows a branch-based approach for structured development.  

| Branch Name       | Purpose                               |
|------------------|--------------------------------------|
| `main`          | Stable, production-ready version     |
| `develop`       | Active development branch           |
| `feature/{name}` | Branch for new features             |

---

## 📂 Folder Structure
```plaintext
zenkly/
├── husky/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── GetGeneralSuggestions.jsx
│   │   ├── LoginForm.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── QuoteBox.jsx
│   │   ├── Sidebar.jsx
│   │   ├── SignupForm.jsx
│   │   ├── SocialSignupButtons.jsx
│   ├── context/
│   │   ├── AuthContext.jsx
│   ├── hooks/
│   │   ├── useAuthContext.js
│   │   ├── useLogin.js
│   │   ├── useLogout.js
│   │   ├── useRegister.js
│   ├── pages/
│   │   ├── AccountSettings.jsx
│   │   ├── CreateProject.jsx
│   │   ├── GenerateIdeas.jsx
│   │   ├── GenerateIdeasChooseBlogs.jsx
│   │   ├── Login.jsx
│   │   ├── SavedIdeas.jsx
│   │   ├── Signup.jsx
│   │   ├── UpgradeAccount.jsx
│   ├── App.js
│   ├── App.css
│   ├── index.css
│   ├── main.js
│   ├── routes.js
```

---

## ⚡ Features
- User authentication (Signup/Login)
- Idea generation
- Project creation and management
- Account settings and profile management
- Responsive UI with Tailwind CSS and DaisyUI

