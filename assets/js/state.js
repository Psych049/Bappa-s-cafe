export const state = {
  currentScreen: 'categories', // 'categories' or 'items'
  selectedCategory: null
};

const listeners = [];

export function getState() {
  return state;
}

export function setState(newState) {
  Object.assign(state, newState);
  notifyListeners();
  
  // Also preserve scroll position properly based on screen transitions.
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

export function subscribe(listener) {
  listeners.push(listener);
}

function notifyListeners() {
  for (const listener of listeners) {
    listener(state);
  }
}
