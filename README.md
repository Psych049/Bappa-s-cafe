# Bappa's Cafe - Digital Menu 🍔☕

A modern, mobile-first Single Page Application (SPA) designed to serve as a digital menu for **Bappa's Cafe**. This project showcases a clean, scalable, frontend-only architecture that eschews heavy frameworks in favor of a robust Vanilla JavaScript modular approach.

## 🌟 Features
- **Mobile-First Design**: Optimized for mobile devices with a sleek, native-like user experience using Tailwind CSS (`max-w-md mx-auto`).
- **Component-Based Vanilla JS**: Uses native ES6 modules for creating reusable UI components (Headers, Cards, etc.) without modern frontend frameworks like React or Vue.
- **Custom State Management**: Implements a centralized, lightweight state manager (`state.js`) to handle cart logic, active categories, and application data.
- **Client-Side Routing**: Custom hash-based or simple history router (`router.js`) for seamless, page-reload-free navigation between different views.
- **Beautiful Typography & Styling**: Leverages Tailwind CSS and the *Poppins* Google Font to present a modern, welcoming, and premium cafe aesthetic.

## 🛠️ Tech Stack
- **HTML5**: Semantic and structural layout.
- **CSS3 / Tailwind CSS**: Utility-first styling via CDN for rapid scaffolding and beautiful custom animations/transitions (`assets/css/styles.css`).
- **Vanilla JavaScript (ES6+)**: Core application logic, routing, component rendering, and state management.

## 📂 Project Structure
```text
Bappas_Cafe/
├── index.html                  # Main entry point holding the `#app` container
├── README.md                   # Project documentation
└── assets/
    ├── css/
    │   └── styles.css          # Custom styling and animations
    └── js/
        ├── app.js              # Core application bootstrap and mount point
        ├── router.js           # Client-side routing logic
        ├── state.js            # Global state management
        ├── data/
        │   └── menu.js         # Dummy/placeholder localized menu data
        └── components/         # Reusable JS UI components
            ├── Header.js
            ├── ItemCard.js
            └── CategoryCard.js
```

## 🚀 Getting Started

Since this is a client-side architecture without a build step or backend database, running the project is incredibly simple!

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Psych049/Bappa-s-cafe.git
   ```

2. **Open the project folder:**
   ```bash
   cd Bappa-s-cafe
   ```

3. **Run a development server:**
   To prevent CORS issues with ES6 modules (`type="module"`), you need to serve the files using a local web server rather than simply opening `index.html` in the browser. 

   If you have **Node.js**:
   ```bash
   npx serve .
   ```
   *Or with Python 3:*
   ```bash
   python -m http.server 8000
   ```
   *Or use the "Live Server" extension in VS Code.*

4. **View the Application:**
   Open `http://localhost:8000` (or the port provided by your server) in your browser. Use the browser's developer tools to toggle mobile device simulation for the best viewing experience!

## 🧠 Architecture Highlights
- **No Build Tools Required**: The application runs entirely natively in modern browsers.
- **Decoupled Logic**: UI rendering components are strictly separated from data modeling and global states, mirroring modern framework architectures (like React/Redux) entirely from scratch.

---
*Developed with clean code principles for optimal performance and infinite scalability.*
