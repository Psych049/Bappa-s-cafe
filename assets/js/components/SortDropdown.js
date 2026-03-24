export function SortDropdown(currentSort) {
  const options = [
    {
      value: 'default',
      label: 'Default',
      sublabel: 'As listed',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
               d="M4 6h16M4 10h10M4 14h6" />`
    },
    {
      value: 'price-low',
      label: 'Price',
      sublabel: 'Low → High',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
               d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />`
    },
    {
      value: 'price-high',
      label: 'Price',
      sublabel: 'High → Low',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
               d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />`
    },
    {
      value: 'name-az',
      label: 'Name',
      sublabel: 'A → Z',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
               d="M3 4h13M3 8h9m-9 4h6m8 0l-3 3m0 0l-3-3m3 3V8" />`
    }
  ];

  const active = options.find(o => o.value === currentSort) || options[0];
  const isDefault = currentSort === 'default';

  return `
    <div class="relative inline-block shrink-0">

      <button
        data-action="toggle-sort"
        class="sort-trigger flex items-center gap-2 px-3.5 py-2 rounded-2xl border text-sm font-medium outline-none transition-all duration-200
               ${isDefault
                 ? 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 shadow-sm'
                 : 'bg-orange-50 dark:bg-orange-950/40 border-orange-300 dark:border-orange-700/60 text-orange-800 dark:text-orange-300 shadow-sm shadow-orange-100 dark:shadow-none'}
               }"
      >
        <svg xmlns="http://www.w3.org/2000/svg"
             class="h-4 w-4 shrink-0 ${isDefault ? 'text-slate-500' : 'text-orange-600'}"
             fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
        </svg>

        <span class="whitespace-nowrap leading-none">
          ${isDefault ? 'Sort' : `${active.label} <span class="opacity-60 font-normal text-xs">${active.sublabel}</span>`}
        </span>

        <svg xmlns="http://www.w3.org/2000/svg"
             class="h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${isDefault ? 'text-slate-500' : 'text-orange-500'}"
             id="sort-menu-icon"
             fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        id="sort-menu"
        class="dropdown-menu absolute right-0 top-[110%] w-56 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden z-[9999] bg-white dark:bg-slate-800"
        style="
          box-shadow: 0 16px 40px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.08);
        "
      >
        <div class="px-4 pt-3 pb-2 border-b border-slate-200 dark:border-slate-700"
             style="background: inherit;">
          <p class="text-[10px] font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Sort by
          </p>
        </div>

        <div class="py-1.5 dark-panel">
          ${options.map(opt => {
            const isActive = currentSort === opt.value;
            return `
              <button
                data-action="sort-select"
                data-value="${opt.value}"
                class="sort-option w-full text-left px-4 py-2.5 text-sm transition-all duration-150 flex items-center gap-3
                       ${isActive
                         ? 'text-orange-700 dark:text-orange-300 font-semibold bg-orange-100 dark:bg-orange-900/30'
                         : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50'
                       }"
              >
                <span class="shrink-0 w-0.5 h-6 rounded-full transition-all duration-150
                             ${isActive ? 'bg-orange-600' : 'bg-transparent'}">
                </span>

                <svg xmlns="http://www.w3.org/2000/svg"
                     class="h-4 w-4 shrink-0 ${isActive ? 'text-orange-600' : 'text-slate-500'}"
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  ${opt.icon}
                </svg>

                <span class="flex-1 flex flex-col leading-tight">
                  <span>${opt.label}</span>
                  <span class="text-[11px] font-normal ${isActive ? 'text-orange-500/90' : 'text-slate-500'}">${opt.sublabel}</span>
                </span>

                ${isActive
                  ? `<svg class="h-4 w-4 shrink-0 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                     </svg>`
                  : ''
                }
              </button>
            `;
          }).join('')}
        </div>
      </div>

    </div>
  `;
}
