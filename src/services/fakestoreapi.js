export const getProducts = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    const data = await res.json();
    return data.products;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
