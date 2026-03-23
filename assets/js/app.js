import { MENU_DATA, CATEGORY_IMAGES } from './data/menu.js';
import { getState, subscribe, setState } from './state.js';
import { initRouter, navigateTo } from './router.js';

// Components
import { Header } from './components/Header.js';
import { CategoryCard } from './components/CategoryCard.js';
import { Sidebar } from './components/Sidebar.js';
import { ItemCard } from './components/ItemCard.js';
import { SkeletonCard, SkeletonCategory } from './components/Skeletons.js';
import { SortDropdown } from './components/SortDropdown.js';

const App = {
  init() {
    this.root = document.getElementById('app');
    subscribe(this.render.bind(this));
    initRouter();
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
    // Navigation routing
    document.addEventListener('click', (e) => {
      const target = e.target.closest('[data-action="navigate"]');
      if (target) {
        e.preventDefault();
        navigateTo(target.getAttribute('data-target'));
      }
    });

    // Theme Toggle logic
    document.addEventListener('click', e => {
      const themeBtn = e.target.closest('[data-action="toggle-theme"]');
      if (themeBtn) {
        import('./state.js').then(({ getState, setState }) => {
          const current = getState().theme;
          const next = current === 'dark' ? 'light' : 'dark';
          localStorage.setItem('theme', next);
          
          if (next === 'dark') document.documentElement.classList.add('dark');
          else document.documentElement.classList.remove('dark');
          
          setState({ theme: next });
        });
      }
    });

    // Sorting Dropdown logic
    document.addEventListener('click', e => {
      // Toggle dropdown menu
      const toggleBtn = e.target.closest('[data-action="toggle-sort"]');
      const sortMenu = document.getElementById('sort-menu');
      const sortIcon = document.getElementById('sort-menu-icon');
      
      if (toggleBtn) {
        if (sortMenu) {
          sortMenu.classList.toggle('dropdown-open');
          if (sortIcon) sortIcon.classList.toggle('rotate-180');
        }
        return; // Prevent further bubbling
      }

      // Handle sort selection
      const sortSelectBtn = e.target.closest('[data-action="sort-select"]');
      if (sortSelectBtn) {
        import('./state.js').then(({ setState }) => {
          setState({ sortOption: sortSelectBtn.dataset.value });
        });
        if (sortMenu) {
          sortMenu.classList.remove('dropdown-open');
          if (sortIcon) sortIcon.classList.remove('rotate-180');
        }
        return;
      }

      // Close dropdown when clicking outside
      if (sortMenu && sortMenu.classList.contains('dropdown-open') && !e.target.closest('#sort-dropdown-container')) {
        sortMenu.classList.remove('dropdown-open');
        if (sortIcon) sortIcon.classList.remove('rotate-180');
      }
    });
  },

  render(state) {
    if (!this.root) return;

    let html = '';
    html += Header(state);

    const isCategoriesScreen = state.currentScreen === 'categories';
    const categories = this.getUniqueCategories();
    
    // MAIN CONTAINER
    html += `<div class="w-full max-w-md sm:max-w-2xl lg:max-w-7xl mx-auto lg:flex lg:gap-8 lg:px-8 lg:pb-12 xl:gap-10 pt-4 lg:pt-8">`;

    // --- SIDEBAR (Desktop Only) ---
    html += `
      <aside class="hidden lg:block lg:w-[25%] xl:w-[25%] lg:shrink-0 sticky top-[120px] h-max max-h-[calc(100vh-140px)] overflow-y-auto pr-3 custom-scrollbar pb-10">
        ${Sidebar(categories, state.selectedCategory)}
      </aside>
    `;

    // --- MAIN CONTENT (70-75% on desktop) ---
    html += `<main class="flex-1 min-w-0 pb-12 lg:pb-0 w-full px-4 sm:px-6 lg:px-0">`;

    if (isCategoriesScreen) {
      // MOBILE CATEGORIES LIST
      html += `<div class="block lg:hidden w-full mt-2">`;
      if (state.isLoading) {
         html += Array(4).fill().map(() => SkeletonCategory()).join('');
      } else {
         html += categories.map(cat => CategoryCard(cat)).join('');
      }
      html += `</div>`;
      
      // DESKTOP: show all items
      html += `<div class="hidden lg:block">`;
      // Section header (title + sort dropdown) rendered OUTSIDE the animated grid
      html += this.renderSectionHeader(state, 'All Menu');
      html += this.renderItemGrid(state, MENU_DATA);
      html += `</div>`;
      
    } else {
      // ITEMS SCREEN (Mobile & Desktop)
      
      // Desktop Back button
      html += `
        <div class="hidden lg:block mb-5">
          <button data-action="navigate" data-target="categories" 
                  class="flex items-center space-x-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 mt-2 active:scale-95 transition-all outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 border border-slate-200 dark:border-slate-700 rounded-full p-1 shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span class="font-bold text-sm">Back to Menu</span>
          </button>
        </div>
      `;
      
      const items = MENU_DATA.filter(i => i.category === state.selectedCategory);
      // Section header lives OUTSIDE the animated items container
      html += this.renderSectionHeader(state, state.selectedCategory);
      html += this.renderItemGrid(state, items);
    }
    
    html += `</main></div>`;
    
    // Global App Footer
    html += `
       <footer class="mt-6 text-center text-slate-400/70 dark:text-slate-600/70 text-[10px] pb-3 border-t border-slate-200/50 dark:border-slate-700/50 pt-3 max-w-7xl mx-auto w-full footer-glass">
         <p>Tilak Nagar, Mumbai &bull; Open 10 AM &ndash; 11 PM</p>
       </footer>
    `;

    this.root.innerHTML = html;
  },

  /**
   * Renders the section title + sort dropdown.
   * MUST live outside any overflow:hidden or transform ancestor so the
   * dropdown is never clipped by the items grid's stacking context.
   */
  renderSectionHeader(state, title) {
    return `
      <div class="section-header flex items-center justify-between gap-4 mb-5 sm:mb-6 select-none mt-2 lg:mt-0" id="sort-dropdown-container">
        <h3 class="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">${title}</h3>
        <div class="sort-wrapper">${SortDropdown(state.sortOption)}</div>
      </div>
    `;
  },

  renderItemGrid(state, items) {
    let sortedItems = [...items];
    
    // Apply sorting
    if (state.sortOption === 'price-low') {
      sortedItems.sort((a, b) => a.price - b.price);
    } else if (state.sortOption === 'price-high') {
      sortedItems.sort((a, b) => b.price - a.price);
    } else if (state.sortOption === 'name-az') {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    let html = '';

    if (sortedItems.length === 0 && !state.isLoading) {
      html += `
        <div class="py-16 text-center screen-transition border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-slate-300 dark:text-slate-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p class="text-slate-500 dark:text-slate-400 font-medium text-lg">No dishes found</p>
        </div>
      `;
    } else {
      // Grid container has NO overflow:hidden — dropdown must never be inside this
      html += `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 screen-transition pb-6">`;
      if (state.isLoading) {
         html += Array(6).fill().map(() => SkeletonCard()).join('');
      } else {
         html += sortedItems.map(item => ItemCard(item)).join('');
      }
      html += `</div>`;
    }

    return html;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
