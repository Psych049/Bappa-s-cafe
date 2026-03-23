export function CategoryCard(category) {
  return `
    <div data-action="navigate" data-target="category/${category.name}" 
         class="card category-card category-active relative p-5 flex items-center justify-between overflow-hidden cursor-pointer mb-5 group outline-none focus:ring-2 ring-orange-400 border border-slate-100 dark:border-slate-800">
      <div class="w-1.5 h-full absolute left-0 top-0 bg-gradient-to-b from-orange-400 to-red-500 rounded-l-3xl"></div>
      <div class="flex items-center space-x-4 pointer-events-none pl-3">
        <div class="w-16 h-16 bg-orange-50 dark:bg-slate-800/80 rounded-2xl flex items-center justify-center p-3 shadow-inner border border-orange-100/50 dark:border-slate-700 group-hover:scale-105 transition-transform">
          <img src="${category.icon}" alt="${category.name}" class="w-full h-full object-contain drop-shadow-sm">
        </div>
        <div>
          <h3 class="font-bold text-slate-800 dark:text-slate-100 text-xl tracking-tight">${category.name}</h3>
          <p class="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">${category.count} Items Available</p>
        </div>
      </div>
      <div class="text-slate-300 dark:text-slate-600 pointer-events-none pr-1 transition-transform group-hover:translate-x-1 duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  `;
}
