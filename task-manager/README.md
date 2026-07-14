# 📝Task Manager App
A React + Vite task management application that lets users add users and assign tasks to them, with search, filtering, and local persistence. The app is styled using Tailwind CSS and includes responsive design for mobile, tablet, and desktop screens.
#
## ✨Live Demo
 🔗 Add your live link here

## 📌Tech Stack
- React 19
- Vite 4
- Tailwind CSS 4
- ESLint
- LocalStorage for data persistence

## ☀ Project Structure
```
TASK-MANAGER/
  ├── public/
  ├── src/
  │   ├── App.jsx
  │   ├── index.css
  │   ├── main.jsx
  │   └── components/
  │       ├── UserForm.jsx
  │       ├── TaskForm.jsx
  │       ├── UserTable.jsx
  │       └── TaskTable.jsx
  ├── package.json
  ├── vite.config.js
  ├── eslint.config.js
  └── README.md
```

## 👉Features
- Add new users with name, email, designation, profession, and description
- Add new tasks and assign them to existing users
- Set task deadline and priority (High / Medium / Low)
- Search users by name
- Search tasks by title, and filter tasks by user or priority
- Users and tasks are saved in browser local storage
- Clean, modern UI using Tailwind CSS

## 🎭Responsive Web Design
- Layout scales for mobile, tablet, and desktop screens
- Forms use fluid width with max-width constraints and stack fields on small screens
- Tables switch to stacked cards on mobile to avoid horizontal scrolling, and display as full tables on tablet/desktop
- Touch-friendly buttons and inputs
- Responsive spacing and typography for smaller devices

## 🚩Getting Started
### Prerequisites
- Node.js installed (recommended 18+)
- npm or yarn

### Install Dependencies
```bash
cd path/to/TASK-MANAGER
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Notes
- Users and tasks persist across page refreshes using `localStorage`.
- Form state (`UserForm`, `TaskForm`) and table search/filter state (`UserTable`, `TaskTable`) are kept local to each component for optimized rendering, so typing in a form or search box doesn't re-render unrelated parts of the app.

## 👩Author
Hafza Abbasi