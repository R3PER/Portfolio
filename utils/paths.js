export const getAssetPath = (path) => {
  // Usuwamy pierwszy znak "/" ze ścieżki, aby uniknąć duplikacji ścieżek w środowisku GitHub Pages
  // W ten sposób Next.js doda tylko jeden prefiks "/Portfolio" zamiast duplikacji "/Portfolio/Portfolio"
  return path.startsWith('/') ? path.substring(1) : path;
};
