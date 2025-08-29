export const getAssetPath = (path) => {
  // Usuwamy wszelkie ścieżki początkowe, aby zapewnić, że używamy tylko czystej ścieżki do pliku
  const cleanPath = path.replace(/^\//, '');
  
  // W środowisku produkcyjnym dodajemy explicite ścieżkę do folderu public, 
  // ponieważ Next.js nie wie, że zasoby są w katalogu public
  if (process.env.NODE_ENV === 'production') {
    return `/Portfolio/public/${cleanPath}`;
  } else {
    return `/${cleanPath}`;
  }
};
