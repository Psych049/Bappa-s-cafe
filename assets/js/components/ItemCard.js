export function ItemCard(item) {
  return `
    <div class="card item-card overflow-hidden flex flex-col mb-4 sm:mb-0 cursor-pointer h-full outline-none select-none group border border-slate-100 dark:border-slate-800">
      <div class="h-32 sm:h-40 xl:h-48 w-full bg-slate-100/50 dark:bg-slate-800/80 flex items-center justify-center font-bold text-slate-300 dark:text-slate-600 tracking-wider text-lg sm:text-xl uppercase group-hover:bg-slate-100 dark:group-hover:bg-slate-700/50 transition-colors duration-300">
        ${item.category}
      </div>
      
      <div class="p-4 sm:p-6 lg:p-7 xl:p-8 flex-1 flex flex-col">
        <div class="flex justify-between items-start gap-3 sm:gap-4 mb-2 sm:mb-3 lg:mb-4">
          <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-100 leading-tight group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">${item.name}</h3>
          <span class="inline-flex bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400 font-extrabold px-3 lg:px-4 py-1 sm:py-1.5 rounded-full text-sm sm:text-base shrink-0 border border-orange-200 dark:border-orange-500/30 whitespace-nowrap shadow-sm">
            ₹${item.price}
          </span>
        </div>
        <p class="text-sm sm:text-base lg:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium mt-1 lg:mt-auto">
          ${item.description}
        </p>
      </div>
    </div>
  `;
}
