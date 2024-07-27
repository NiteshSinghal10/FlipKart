export const products = async () => {
  const data = await fetch('https://fakestoreapi.com/products');
  const productData = await data.json();
  return productData;
}