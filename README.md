# Bappa's Cafe - Digital Menu 🍔☕

A modern, mobile-first **Single Page Application (SPA)** designed to serve as a digital menu for **Bappa's Cafe**. This project showcases a clean, scalable, frontend-only architecture that eschews heavy frameworks in favor of a robust Vanilla JavaScript modular approach.

![Version](https://img.shields.io/badge/version-5.0.0-orange)
![License](https://img.shields.io/badge/license-MIT-green)

## 🌟 Features

### Core Features
- **Mobile-First Design**: Optimized for mobile devices with a sleek, native-like user experience using Tailwind CSS (`max-w-md mx-auto`)
- **Component-Based Vanilla JS**: Uses native ES6 modules for creating reusable UI components (Headers, Cards, etc.) without modern frontend frameworks like React or Vue
- **Custom State Management**: Implements a centralized, lightweight state manager (`state.js`) to handle cart logic, active categories, and application data
- **Client-Side Routing**: Custom hash-based or simple history router (`router.js`) for seamless, page-reload-free navigation between different views
- **Beautiful Typography & Styling**: Leverages Tailwind CSS and the *Poppins* Google Font to present a modern, welcoming, and premium cafe aesthetic

### Enhanced Features (v5.0)
- ✨ **Dark Mode Support**: Seamless theme switching with persistent user preference
- 🎨 **Premium UI Components**: Custom skeleton loaders, smooth animations, and micro-interactions
- 🔍 **Smart Sorting**: Sort menu items by price (low-high, high-low) or name (A-Z)
- 📱 **Responsive Design**: Mobile-first approach with optimized layouts for tablets and desktops
- 🚀 **Performance Optimized**: Zero build tools required, runs natively in modern browsers
- ♿ **Accessibility Focused**: WCAG compliant colors, keyboard navigation support, and proper focus states

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic and structural layout |
| **CSS3 / Tailwind CSS** | Utility-first styling via CDN for rapid scaffolding and beautiful custom animations/transitions |
| **Vanilla JavaScript (ES6+)** | Core application logic, routing, component rendering, and state management |
| **Google Fonts** | Poppins font family for modern typography |

## 📂 Project Structure

```
Bappas_Cafe/
├── index.html                  # Main entry point holding the `#app` container
├── README.md                   # Project documentation
├── .github/workflows/          # GitHub Actions CI/CD workflows
└── assets/
    ├── css/
    │   └── styles.css          # Custom styling and animations (480+ lines)
    │                           # Includes: dark mode, skeletons, transitions, scrollbars
    └── js/
        ├── app.js              # Core application bootstrap and mount point (197 lines)
        ├── router.js           # Client-side routing logic
        ├── state.js            # Global state management
        ├── data/
        │   └── menu.js         # Complete menu data (7 categories, 37+ items)
        └── components/         # Reusable JS UI components
            ├── Header.js       # App header with theme toggle
            ├── Sidebar.js      # Category navigation (desktop)
            ├── ItemCard.js     # Menu item display card
            ├── CategoryCard.js # Category preview card
            ├── SortDropdown.js # Sorting functionality
            ├── Skeletons.js    # Loading skeleton components
            └── ThemeToggle.js  # Dark/light mode switch
```

## 🚀 Getting Started

Since this is a client-side architecture without a build step or backend database, running the project is incredibly simple!

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (to avoid CORS issues with ES6 modules)

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Psych049/Bappa-s-cafe.git
   cd Bappa-s-cafe
   ```

2. **Run a development server:**
   
   **Using Node.js:**
   ```bash
   npx serve .
   # or
   npx http-server -p 8000
   ```
   
   **Using Python 3:**
   ```bash
   python -m http.server 8000
   ```
   
   **Using VS Code:**
   - Install the "Live Server" extension
   - Right-click `index.html` and select "Open with Live Server"

3. **View the Application:**
   Open `http://localhost:8000` (or the port provided by your server) in your browser.
   
   > 💡 **Pro Tip**: Use your browser's developer tools (F12) to toggle mobile device simulation for the best viewing experience!

## 📱 Menu Categories

The digital menu features **7 categories** with **37+ delicious items**:

| Category | Items | Price Range |
|----------|-------|-------------|
| 🍕 Pizza | 6 varieties | ₹89 - ₹169 |
| 🥪 Sandwich | 7 varieties | ₹49 - ₹79 |
| 🍜 Maggi | 6 varieties | ₹29 - ₹89 |
| 🌯 Frankie | 4 varieties | ₹49 - ₹79 |
| 🍝 Pasta | 3 varieties | ₹49 - ₹69 |
| 🍔 Burger | 4 varieties | ₹49 - ₹89 |
| 🍛 Misal | 3 varieties | ₹39 - ₹59 |

## 🧠 Architecture Highlights

### Modern SPA Architecture
- **No Build Tools Required**: The application runs entirely natively in modern browsers without Webpack, Vite, or other bundlers
- **Decoupled Logic**: UI rendering components are strictly separated from data modeling and global states, mirroring modern framework architectures (like React/Redux) built from scratch
- **Component System**: Reusable, modular components that can be easily extended or replaced
- **State Management**: Centralized state with subscription-based reactivity pattern

### Key Design Patterns
- **Module Pattern**: ES6 modules for encapsulation and code organization
- **Observer Pattern**: State subscription system for automatic UI updates
- **Singleton Pattern**: Single source of truth for application state
- **Factory Pattern**: Dynamic component rendering based on application state

## 🎨 Features Showcase

### Dark Mode
Toggle between light and dark themes with a beautiful animated switch. User preference is persisted in localStorage.

### Sorting Options
- **Default**: Original menu order
- **Price: Low to High**: Budget-friendly options first
- **Price: High to Low**: Premium items first
- **Name: A to Z**: Alphabetical ordering

### Responsive Breakpoints
- **Mobile**: < 640px (single column)
- **Tablet**: 640px - 1024px (optimized touch interface)
- **Desktop**: > 1024px (sidebar navigation + multi-column grid)

## 🔧 Development

### Adding New Menu Items

Edit `assets/js/data/menu.js`:

```javascript
{
  id: 801,
  name: "New Item",
  price: 99,
  category: "Pizza",
  description: "Delicious new addition to our menu",
  image: "assets/images/new-item.jpg"
}
```

### Adding New Categories

1. Add items with the new category name in `menu.js`
2. Add category icon in `CATEGORY_IMAGES` object
3. The app automatically detects and displays new categories

### Customization

**Colors**: Modify the Tailwind config in `index.html` or edit CSS variables in `styles.css`

**Animations**: Adjust timing functions and keyframes in `styles.css`

**Components**: Each component in `components/` is a pure function returning HTML strings

## 📊 Performance

- ⚡ **Zero Build Time**: No compilation or bundling required
- 📦 **Minimal Bundle Size**: ~50KB total (uncompressed)
- 🚀 **Fast Initial Load**: Renders on first paint
- 💾 **Efficient Caching**: Browser-native caching strategies

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Developer

**Bappa's Cafe**  
📍 Tilak Nagar, Mumbai  
⏰ Open 10 AM – 11 PM  

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Icons8](https://icons8.com/) for beautiful category icons
- [Google Fonts](https://fonts.google.com/) for the Poppins typeface

---

<div align="center">

**Made with ❤️ using clean code principles for optimal performance and infinite scalability.**

</div>
