export const getImageUrl = (path) => {
  // append a cache-busting query param so browsers pick up replaced images
  return `/assets/${path}?v=2`;
};
