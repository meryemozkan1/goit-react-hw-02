# GoIT React Homework #2 - Sip Happens Café

This project is the second homework assignment within the GoIT React Developer program. It builds a customer feedback collection widget for "Sip Happens Café" utilizing React state management, effects, local storage persistence, and modular component structures.

## 🚀 Live Demo
- [View Live Application on Vercel](https://goit-react-hw-02-iota-topaz-60.vercel.app/)

## 🛠️ Components & Features Included
1. **Description (`<Description>`):** Renders the café title and welcoming instructions.
2. **Options (`<Options>`):** Provides interactive feedback buttons (`Good`, `Neutral`, `Bad`) along with a conditionally rendered `Reset` button.
3. **Feedback (`<Feedback>`):** Displays detailed statistics including individual counts, total feedback, and positive feedback percentage.
4. **Notification (`<Notification>`):** Displays an empty state message when no feedback has been submitted yet.
5. **Local Storage Persistence:** Synchronizes feedback state with `localStorage` via `useEffect` to ensure statistics are preserved across page reloads.

## 📂 Project Structure
- `src/components/Description/` — Description component & CSS module
- `src/components/Options/` — Options component & CSS module
- `src/components/Feedback/` — Feedback component & CSS module
- `src/components/Notification/` — Notification component & CSS module
- `src/App.jsx` — Root component managing state and local storage logic

## 🛠️ Technologies & Tools Used
- **React (v18+):** Functional components, `useState`, and `useEffect` hooks.
- **Bundler:** Vite.
- **Styling:** CSS Modules for scoped styling.
- **Deployment:** Vercel.