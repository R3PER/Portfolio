export const getAssetPath = (path) => {
  // Usuwamy wszelkie ścieżki początkowe, aby zapewnić, że używamy tylko czystej ścieżki do pliku
  const cleanPath = path.replace(/^\//, '');
  
  // W Next.js, pliki w folderze /public są serwowane bezpośrednio z katalogu głównego
  // Nie potrzebujemy dodawać prefiksu /Portfolio/public/ w środowisku produkcyjnym
  return `/${cleanPath}`;
};
