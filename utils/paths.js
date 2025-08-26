export const getAssetPath = (path) => {
  // W środowisku produkcyjnym dodajemy jawnie '/Portfolio/' przed ścieżką
  // usuwając najpierw początkowy slash, aby zapobiec podwójnemu slashowi
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio/' : '/';
  return basePath + cleanPath;
};
