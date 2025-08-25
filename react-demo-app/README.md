# React Demo App – Technical Interview Task

This is a simple React web application built as part of a technical interview task.  
It demonstrates the use of **functional components, React Hooks, Context API, API integration, routing, Tailwind CSS styling, and basic testing**.

---

## 🚀 Features

- **Login Page**
  - Phone number input with validation (must start with `+254`)
  - Mock login (`+254712345678` is accepted)
  - Error handling for invalid inputs

- **Main Page**
  - Fetches a list of posts from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts)
  - Search bar filters posts dynamically
  - Click on a post to open its detail view

- **Detail Page**
  - Displays full details of a selected post
  - Button to return back to the Main Page

- **Authentication**
  - Global state managed with Context API
  - Login persistence using `localStorage`
  - Protected routes (redirects to login if not authenticated)

- **Styling & Animations**
  - Responsive design with Tailwind CSS v4
  - Custom animations (fade, slide, hover effects)

- **Testing**
  - Includes one unit test with **Jest + React Testing Library**

---

## 🛠️ Tech Stack

- **React** (functional components + hooks)
- **React Router v6**
- **Context API** for authentication state
- **Tailwind CSS v4** for styling
- **Jest & React Testing Library** for testing
- **JSONPlaceholder API** as mock backend

---

## 📂 Project Structure



src/
├── Components/ # Reusable UI components
│ └── SearchBar.jsx
├── Context/ # Context API for global state
│ └── AuthContext.jsx
├── Pages/ # Page-level components
│ ├── LoginPage.jsx
│ ├── MainPage.jsx
│ └── DetailPage.jsx
├── Services/ # API calls
│ └── Api.jsx
├── Tests/ # Unit tests
│ └── LoginPage.test.jsx
├── App.jsx # Routing setup
├── index.jsx # Entry point
└── styles.css # Global styles



---


### 🔧 Updated Full README (important change only)
```markdown
# React Demo App – Technical Interview Task

...

## ⚡ Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/bluebommer/react-demo-app.git
cd react-demo-app



2. Install dependencies
npm install

3. Run the app
```bash
npm run dev



Runs on http://localhost:5137

4. Run tests
npm test

🔑 Login Credentials

Use the following phone number to log in:

+254712345678


Any other number will show an error.

📌 Notes

This project is for demonstration only (no real backend).

Posts are fetched from the free JSONPlaceholder API


Authentication is mocked with Context API and localStorage.

