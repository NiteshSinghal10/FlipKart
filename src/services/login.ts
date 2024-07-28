import { ICredentials } from '../interface';

export const userLogin = async (credentials: ICredentials) => {
  const data = await fetch('https://fakestoreapi.com/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  });
  const productData = await data.json();
  return productData.token;
}