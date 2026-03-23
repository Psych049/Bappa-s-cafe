export function ItemCard(item) {
  return `
    <div class="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col mb-6">
      <div class="relative h-44 w-full img-placeholder overflow-hidden" aria-hidden="true" title="No image available">
        <!-- Placeholder Shimmer Block using CSS only -->
        <div class="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-orange-600 shadow-sm z-10">
          ₹${item.price}
        </div>
      </div>
      <div class="p-5">
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-lg font-bold text-slate-800 leading-tight">${item.name}</h3>
        </div>
        <p class="text-slate-500 text-sm leading-relaxed">
          ${item.description}
        </p>
      </div>
    </div>
  `;
}
