export const getAssetPath = (path) => {
  // Usuwamy początkowy slash i 'public/' z ścieżki, jeśli istnieją
  let cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // W środowisku produkcyjnym używamy prefiks '/Portfolio'
  // W środowisku deweloperskim używamy prefiks '/'
  return process.env.NODE_ENV === 'production' ? `/Portfolio/${cleanPath}` : `/${cleanPath}`;
};
