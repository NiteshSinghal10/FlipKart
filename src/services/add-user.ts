import { IUser, IUserWithId } from '../interface';

export const addUser = async (payload: IUser) => {
  const data = await fetch('https://fakestoreapi.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });
  const productData = await data.json();
  return productData as IUserWithId;
}