export function SkeletonCard() {
  return `
    <div class="card overflow-hidden flex flex-col mb-6 p-6 border border-slate-100 dark:border-slate-700/50">
      <div class="flex justify-between items-start mb-4 gap-3">
        <div class="h-6 skeleton rounded w-1/2"></div>
        <div class="h-8 w-16 skeleton rounded-full shrink-0"></div>
      </div>
      <div class="space-y-3">
        <div class="h-3 skeleton rounded w-full"></div>
        <div class="h-3 skeleton rounded w-4/5"></div>
      </div>
    </div>
  `;
}

export function SkeletonCategory() {
  return `
    <div class="card p-4 flex items-center mb-4 border border-slate-100 dark:border-slate-700/50">
      <div class="w-16 h-16 skeleton rounded-xl mr-5 shrink-0"></div>
      <div class="flex-1 space-y-3">
        <div class="h-5 skeleton rounded w-2/3"></div>
        <div class="h-3 skeleton rounded w-1/3"></div>
      </div>
    </div>
  `;
}
