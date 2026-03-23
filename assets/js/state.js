export const state = {
  currentScreen: 'categories',
  selectedCategory: null,
  isLoading: true,
  sortOption: 'default',
  theme: localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
};

const listeners = [];

export function getState() {
  return state;
}

export function setState(newState) {
  Object.assign(state, newState);
  notifyListeners();
  
  if (newState.currentScreen && newState.isLoading) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

export function subscribe(listener) {
  listeners.push(listener);
}

function notifyListeners() {
  for (const listener of listeners) {
    listener(state);
  }
}
