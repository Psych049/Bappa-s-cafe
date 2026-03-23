export function SearchBar(searchQuery) {
  return `
    <div class="relative z-40 max-w-lg mx-auto w-full transition-all">
      <div class="relative bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md border border-slate-200 dark:border-slate-700 flex items-center p-3 sm:p-4 focus-within:ring-2 focus-within:ring-orange-400 dark:focus-within:ring-orange-500 transition-all duration-300 min-h-[48px] lg:min-h-[56px]">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 lg:h-7 lg:w-7 text-slate-400 dark:text-slate-500 ml-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input type="text" id="searchInput" value="${searchQuery || ''}" placeholder="Search menu or category..." 
               class="flex-1 bg-transparent border-none outline-none px-3 sm:px-4 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-base sm:text-lg w-full"
               autocomplete="off" autocorrect="off">
        ${searchQuery ? `
        <button data-action="clear-search" class="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 active:scale-95 transition-transform p-1 shrink-0 flex items-center justify-center" aria-label="Clear Search">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 lg:h-7 lg:w-7 bg-slate-100 dark:bg-slate-700 rounded-full p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        ` : ''}
      </div>
    </div>
  `;
}
