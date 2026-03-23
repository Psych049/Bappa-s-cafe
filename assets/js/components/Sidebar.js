export function SidebarItem(category, isActive) {
  const activeClass = isActive 
    ? "bg-orange-50 dark:bg-slate-800/80 border-orange-200 dark:border-slate-600 shadow-sm" 
    : "bg-transparent border-transparent hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-400";
    
  return `
    <button data-action="navigate" data-target="category/${category.name}" 
         class="w-full flex items-center justify-between p-3 mb-2 rounded-2xl border ${activeClass} category-active text-left group select-none outline-none focus:ring-2 ring-orange-400">
      <div class="flex items-center space-x-3 pointer-events-none">
        <div class="w-10 h-10 lg:w-12 lg:h-12 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center p-2 shadow-sm border border-slate-100 dark:border-slate-700/50 group-hover:scale-105 transition-transform">
          <img src="${category.icon}" alt="${category.name}" class="w-full h-full object-contain drop-shadow-sm">
        </div>
        <div>
          <h3 class="font-bold text-slate-800 dark:text-slate-100 text-sm lg:text-base">${category.name}</h3>
          ${category.count ? `<p class="text-slate-500 dark:text-slate-400 text-xs font-medium">${category.count} items</p>` : ''}
        </div>
      </div>
    </button>
  `;
}

export function Sidebar(categories, activeCategory) {
   return `
      <div class="w-full">
         <h3 class="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 px-2">Menu Categories</h3>
         ${categories.map(cat => SidebarItem(cat, activeCategory === cat.name)).join('')}
      </div>
   `;
}
