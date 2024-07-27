export const categories = async () => {
  const data = await fetch('https://fakestoreapi.com/products/categories');
  const productData = await data.json();
  return productData;
}