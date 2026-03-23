export function CategoryCard(category) {
  return `
    <div data-action="navigate" data-target="category/${category.name}" 
         class="category-card relative bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm border border-slate-100 overflow-hidden cursor-pointer mb-4">
      <div class="accent-strip"></div>
      <div class="flex items-center space-x-4 pointer-events-none">
        <div class="w-16 h-16 bg-orange-50 rounded-xl flex items-center justify-center p-2 shadow-inner">
          <img src="${category.icon}" alt="${category.name}" class="w-full h-full object-contain drop-shadow-sm">
        </div>
        <div>
          <h3 class="font-bold text-slate-800 text-lg">${category.name}</h3>
          <p class="text-slate-400 text-xs font-medium">${category.count} Items Available</p>
        </div>
      </div>
      <div class="text-slate-300 pointer-events-none pr-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  `;
}
