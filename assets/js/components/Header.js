export function Header(state) {
  if (state.currentScreen === 'categories') {
    return `
      <header class="mb-8 px-5 pt-10 screen-transition">
        <h1 class="text-xs font-bold text-orange-500 uppercase tracking-widest mb-1">Welcome to</h1>
        <h2 class="text-4xl font-extrabold text-slate-800 tracking-tight">Bappa's Cafe</h2>
        <p class="text-slate-500 text-sm mt-2 font-medium">Select a category to view menu</p>
      </header>
    `;
  } else {
    return `
      <div class="sticky top-0 z-50 sticky-header border-b border-slate-100 px-5 py-4 flex items-center space-x-4">
        <button data-action="navigate" data-target="categories" 
                class="w-10 h-10 bg-white shadow-sm border border-slate-200 rounded-full flex items-center justify-center text-slate-700 active:bg-slate-50 transition-colors"
                aria-label="Back to Categories">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h2 class="text-xl font-bold text-slate-800">${state.selectedCategory}</h2>
      </div>
    `;
  }
}
