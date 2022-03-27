const getPaginatedProducts = (products, limit, page) => {
  const s = (page - 1) * limit;
  return products.slice(s, s + limit);
};

export { getPaginatedProducts };
