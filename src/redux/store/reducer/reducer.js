const initialState = {
  products: [{ id: "1", name: "apple", quvantity: "1kg", price: "199" }],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add_product":
      return {
        ...state,
        products: [...state.products, action.product],
      };
    case "Remove_product":
      return {
        ...state,
        products: [
          state.products.filter((product) => product.id !== action.productId),
        ],
      };
    default:
      return state;
  }
};
