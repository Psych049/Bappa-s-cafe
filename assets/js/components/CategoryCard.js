export function CategoryCard(category) {
  return `
    <div data-action="navigate" data-target="category/${category.name}" 
         class="card category-card group relative p-4 sm:p-6 lg:p-7 flex items-center justify-between overflow-hidden cursor-pointer mb-4 sm:mb-5 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 border-2 border-slate-100 dark:border-slate-800 hover:border-orange-300 dark:hover:border-orange-600 hover:shadow-xl transition-all duration-300 ease-out outline-none focus:ring-2 ring-orange-400 focus:shadow-lg">
      
      <!-- Animated Background Gradient -->
      <div class="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <!-- Left Accent Bar with Animation -->
      <div class="w-1 h-1.5 sm:w-1.5 h-full absolute left-0 top-0 bg-gradient-to-b from-orange-400 via-orange-500 to-red-500 rounded-r-lg transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
      
      <!-- Icon Container with Enhanced Effects -->
      <div class="flex items-center space-x-3 sm:space-x-4 lg:space-x-5 pointer-events-none pl-3 sm:pl-4 relative z-10">
        <div class="relative w-14 h-14 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-slate-800 dark:to-slate-700 rounded-xl sm:rounded-2xl flex items-center justify-center p-2 sm:p-3 shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 ease-out border border-orange-200/50 dark:border-slate-600 group-hover:border-orange-400">
          <img src="${category.icon}" alt="${category.name}" class="w-full h-full object-contain drop-shadow-md group-hover:drop-shadow-xl group-hover:scale-105 transition-all duration-300 relative z-10">
        </div>
        
        <!-- Content Section -->
        <div class="flex-1 min-w-0">
          <h3 class="font-extrabold text-slate-900 dark:text-white text-lg sm:text-xl lg:text-2xl tracking-tight group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors duration-300 truncate">
            ${category.name}
          </h3>
          <div class="flex items-center gap-1.5 sm:gap-2 mt-1">
            <span class="inline-flex items-center px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 border border-orange-300 dark:border-orange-600/40">
              <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
              ${category.count} Items
            </span>
          </div>
        </div>
      </div>
      
      <!-- Arrow Icon with Enhanced Animation -->
      <div class="text-slate-400 dark:text-slate-500 pointer-events-none pr-1.5 sm:pr-2 transition-all duration-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 group-hover:translate-x-2 group-hover:scale-110 relative z-10">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </div>
      
      <!-- Decorative Circle Pattern -->
      <div class="absolute -right-6 -bottom-6 w-24 h-24 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
    </div>
  `;
}
