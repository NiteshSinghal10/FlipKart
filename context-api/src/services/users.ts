import { IUser } from '../interface';

export const users = async () => {
  const data = await fetch('https://fakestoreapi.com/users');
  const productData = await data.json();
  return productData as IUser[];
}