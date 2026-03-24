import { setState } from './state.js';

export function initRouter() {
  handleHashChange();
  window.addEventListener('hashchange', handleHashChange);
}

function handleHashChange() {
  const hash = window.location.hash.slice(1);
  const newState = { isLoading: true, searchQuery: '' };
  
  if (!hash || hash === 'categories') {
    newState.currentScreen = 'categories';
    newState.selectedCategory = null;
  } else if (hash.startsWith('category/')) {
    newState.currentScreen = 'items';
    newState.selectedCategory = decodeURIComponent(hash.split('category/')[1]);
  }
  
  setState(newState);
  
  setTimeout(() => {
    import('./state.js').then(({ setState }) => {
      setState({ isLoading: false });
    });
  }, 150);
}

export function navigateTo(path) {
  window.location.hash = path;
}
