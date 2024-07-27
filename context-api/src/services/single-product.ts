export const product = async (id: string) => {
  const data = await fetch(`https://fakestoreapi.com/products/${id}`);
  const productData = await data.json();
  return productData;
}