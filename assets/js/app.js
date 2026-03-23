import { MENU_DATA, CATEGORY_IMAGES } from './data/menu.js';
import { getState, subscribe } from './state.js';
import { initRouter, navigateTo } from './router.js';

// Components
import { Header } from './components/Header.js';
import { CategoryCard } from './components/CategoryCard.js';
import { ItemCard } from './components/ItemCard.js';

/**
 * Controller App
 */
const App = {
  init() {
    this.root = document.getElementById('app');
    
    // Subscribe to state changes
    subscribe(this.render.bind(this));
    
    // Initialize routing -> this triggers the first render via handleHashChange
    initRouter();
    
    // Setup event delegation for all interactions (No inline handlers)
    this.setupEvents();
  },

  getUniqueCategories() {
    const cats = [...new Set(MENU_DATA.map(item => item.category))];
    return cats.map(name => ({
      name,
      count: MENU_DATA.filter(i => i.category === name).length,
      icon: CATEGORY_IMAGES[name] || "https://img.icons8.com/color/96/food.png"
    }));
  },

  setupEvents() {
    // Global click listener for event delegation
    document.addEventListener('click', (e) => {
      const target = e.target.closest('[data-action="navigate"]');
      if (target) {
        e.preventDefault();
        const path = target.getAttribute('data-target');
        navigateTo(path);
      }
    });
  },

  render(state) {
    if (!this.root) return;

    let html = '';

    // Render Header
    html += Header(state);

    // Render Main Content
    if (state.currentScreen === 'categories') {
      const categories = this.getUniqueCategories();
      html += `
        <div class="px-5">
          <div class="grid gap-0">
            ${categories.map(cat => CategoryCard(cat)).join('')}
          </div>
          <footer class="mt-12 text-center text-slate-400 text-xs pb-10">
            <p>Tilak Nagar, Mumbai &bull; Open 10 AM - 11 PM</p>
          </footer>
        </div>
      `;
    } else if (state.currentScreen === 'items') {
      const items = MENU_DATA.filter(item => item.category === state.selectedCategory);
      
      if (items.length === 0) {
        // Fallback empty state
        html += `
          <div class="px-5 py-20 text-center">
            <p class="text-slate-500">No items found for this category.</p>
          </div>
        `;
      } else {
        html += `
          <div class="px-5 pt-6 screen-transition">
            <div class="grid gap-0">
              ${items.map(item => ItemCard(item)).join('')}
            </div>
          </div>
          <div class="px-5 pb-10 mt-6 screen-transition">
               <button data-action="navigate" data-target="categories" 
                       class="w-full bg-slate-800 text-white py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 shadow-lg active:scale-95 transition-transform"
                       aria-label="Back to Categories">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7 7-7" />
                  </svg>
                  <span>Back to Categories</span>
               </button>
          </div>
        `;
      }
    }

    this.root.innerHTML = html;
  }
};

// Initialize App once DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
