export const getAssetPath = (path) => {
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // W środowisku produkcyjnym ścieżki mają już prefiks /Portfolio dodawany przez Next.js
  // Nie dodawajemy tu żadnych dodatkowych prefiksów, żeby uniknąć duplikacji
  return cleanPath;
};
