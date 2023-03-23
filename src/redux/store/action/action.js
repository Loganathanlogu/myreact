export const addProducts = (product) => {
  return {
    type: "Add_product",
    product: product,
  };
};

export const removeproduct = (id) => {
  return {
    type: "Remove_product",
    productId: id,
  };
};
