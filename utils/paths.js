// Tymczasowo włączamy tryb debugowania, żeby zobaczyć faktycznie generowane ścieżki
export const getAssetPath = (path) => {
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // W wersji produkcyjnej dodajemy '/public/' przed ścieżką, ponieważ obrazy 
  // znajdują się w folderze public w GitHub Pages
  if (process.env.NODE_ENV === 'production') {
    // Upewniamy się, że plik się załaduje z właściwej lokalizacji
    return `/Portfolio/public/${cleanPath}`;
  } else {
    // W środowisku deweloperskim
    return `/${cleanPath}`;
  }
};
