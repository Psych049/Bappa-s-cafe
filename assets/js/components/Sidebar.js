export function SidebarItem(category, isActive) {
  const activeClass = isActive 
    ? "bg-gradient-to-r from-orange-50 to-orange-100/50 dark:from-slate-800 dark:to-slate-700 border-orange-300 dark:border-orange-600 shadow-md scale-hover-2" 
    : "bg-transparent border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-800/70 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600";
    
  return `
    <button data-action="navigate" data-target="category/${category.name}" 
         class="w-full flex items-center justify-between p-1.5 sm:p-3 mb-1.5 sm:mb-2.5 rounded-lg sm:rounded-xl border ${activeClass} category-active text-left group select-none outline-none focus:ring-2 ring-orange-400 transition-all duration-200 ease-out hover:shadow-lg hover:scale-hover-1 active:scale-active">
      <div class="flex items-center space-x-1.5 sm:space-x-3 pointer-events-none flex-1 min-w-0">
        <div class="relative w-7 h-7 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 rounded-md sm:rounded-xl flex items-center justify-center p-1 sm:p-2 shadow-sm border border-slate-200 dark:border-slate-700/60 group-hover:scale-110 group-hover:shadow-md transition-all duration-300 overflow-hidden">
          <img src="${category.icon}" alt="${category.name}" class="w-full h-full object-contain drop-shadow-sm relative z-10 group-hover:scale-105 transition-transform duration-300">
        </div>
        <div class="flex-1 min-w-0 text-left">
          <h3 class="font-bold text-slate-800 dark:text-slate-200 text-[11px] sm:text-sm lg:text-base truncate group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
            ${category.name}
          </h3>
          ${category.count ? `<p class="text-slate-500 dark:text-slate-400 text-[9px] sm:text-xs font-medium mt-0.5 flex items-center gap-0.5 sm:gap-1">
            <svg class="w-2 h-2 sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
            ${category.count} items
          </p>` : ''}
        </div>
      </div>
      
      <!-- Arrow indicator on active state -->
      <div class="ml-1 sm:ml-2 transition-all duration-300 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}">
        <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  `;
}

export function Sidebar(categories, activeCategory) {
   return `
      <div class="w-full">
         <h3 class="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3 sm:mb-4 px-2 flex items-center gap-2">
           <span class="w-0.5 sm:w-1 h-3 sm:h-4 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></span>
           Menu Categories
         </h3>
         <div class="space-y-0.5 sm:space-y-1">
           ${categories.map(cat => SidebarItem(cat, activeCategory === cat.name)).join('')}
         </div>
      </div>
   `;
}
