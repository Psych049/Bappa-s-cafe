import { ThemeToggle } from './ThemeToggle.js';

export function Header(state) {
  return `
    <div class="sticky top-0 z-50 glass-header border-b border-slate-200/60 dark:border-slate-800/80 transition-all duration-300 w-full pt-4 sm:pt-5 lg:pt-6 pb-3 sm:pb-4 lg:pb-5 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md sm:max-w-3xl lg:max-w-7xl mx-auto flex items-center justify-between">
        <header class="text-left">
          <h1 class="text-[10px] sm:text-xs lg:text-sm font-bold text-orange-500 uppercase tracking-widest mb-1 transition-all">Welcome to</h1>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight transition-all leading-none">Bappa's Cafe</h2>
        </header>
        ${ThemeToggle(state.theme)}
      </div>
    </div>
  `;
}
