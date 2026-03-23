import { setState } from './state.js';

/**
 * Super simple hash router to maintain browser back-button compatibility.
 */
export function initRouter() {
  // Sync state to URL when page loads
  handleHashChange();

  // Listen to browser navigation
  window.addEventListener('hashchange', handleHashChange);
}

function handleHashChange() {
  const hash = window.location.hash.slice(1); // remove '#'
  
  if (!hash || hash === 'categories') {
    setState({ currentScreen: 'categories', selectedCategory: null });
  } else if (hash.startsWith('category/')) {
    const categoryInfo = hash.split('category/')[1];
    // Decode in case of spaces in category name
    const decodedCategory = decodeURIComponent(categoryInfo);
    setState({ currentScreen: 'items', selectedCategory: decodedCategory });
  }
}

export function navigateTo(path) {
  window.location.hash = path;
}
