export function ItemCard(item) {
  const isVeg = item.isVeg !== false; // Default to veg if not specified
  
  return `
    <div class="card item-card group relative overflow-hidden flex flex-col mb-4 sm:mb-0 cursor-pointer h-full outline-none select-none border-2 border-slate-100 dark:border-slate-800 hover:border-orange-300 dark:hover:border-orange-700 transition-all duration-300 ease-out"
         tabindex="0"
         role="button"
         aria-label="View ${item.name} details">
      
      <!-- Image/Category Header -->
      <div class="relative h-36 sm:h-40 lg:h-44 xl:h-52 w-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 overflow-hidden">
        
        <!-- Category Badge -->
        <div class="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-20">
          <span class="inline-flex items-center px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm text-slate-700 dark:text-slate-200 shadow-lg border border-slate-200 dark:border-slate-700">
            ${item.category}
          </span>
        </div>
        
        <!-- Veg/Non-Veg Indicator -->
        <div class="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-20">
          <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white dark:bg-slate-900 shadow-lg flex items-center justify-center border-2 ${isVeg ? 'border-green-500' : 'border-red-500'}">
            <div class="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${isVeg ? 'bg-green-500' : 'bg-red-500'}"></div>
          </div>
        </div>
        
        <!-- Placeholder Content -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-center p-3 sm:p-4 transform group-hover:scale-110 transition-transform duration-500">
            <div class="text-5xl sm:text-6xl lg:text-7xl mb-1.5 sm:mb-2 filter drop-shadow-lg grayscale group-hover:grayscale-0 transition-all duration-500">
              ${getCategoryEmoji(item.category)}
            </div>
            <p class="text-xs sm:text-sm font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest group-hover:text-white transition-colors">${item.category}</p>
          </div>
        </div>
      </div>
      
      <!-- Content Section -->
      <div class="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col bg-white dark:bg-slate-900 transition-all duration-300">
        
        <!-- Title and Price Row -->
        <div class="flex justify-between items-start gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
          <h3 class="text-sm sm:text-base lg:text-lg font-extrabold text-slate-900 dark:text-white leading-snug group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors line-clamp-2">
            ${item.name}
          </h3>
          <div class="flex-shrink-0">
            <div class="inline-flex items-center bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
              <span class="text-[10px] sm:text-xs mr-0.5">₹</span>
              <span class="text-base sm:text-lg">${item.price}</span>
            </div>
          </div>
        </div>
        
        <!-- Description -->
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium line-clamp-2 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
          ${item.description}
        </p>
        
        <!-- Bottom Action Bar -->
        <div class="mt-auto pt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div class="flex items-center gap-2">
            <span class="text-xs font-semibold text-green-700 dark:text-green-300 flex items-center gap-1">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              Available
            </span>
          </div>
          <svg class="w-5 h-5 text-orange-600 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
    </div>
  `;
}

// Helper function for category emojis
function getCategoryEmoji(category) {
  const emojis = {
    'Pizza': '🍕',
    'Sandwich': '🥪',
    'Maggi': '🍜',
    'Frankie': '🌯',
    'Pasta': '🍝',
    'Burger': '🍔',
    'Misal': '🍛'
  };
  return emojis[category] || '🍽️';
}
