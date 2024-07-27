import { useContext, createContext, useState } from 'react';
import { IProductData } from '../interface/product';

export const ProductContext = createContext<{productData: IProductData[], setProductData: (data: IProductData[]) => void}>({productData: [], setProductData: () => {}});

export const ProductContextProvider = (props: any) => {
  const [productData, setProductData] = useState<IProductData[]>([]);

  return (
    <ProductContext.Provider value  = {{productData, setProductData}}>
      {props.children}
    </ ProductContext.Provider>
  )
}

export const useProduct = () => {
  return useContext(ProductContext);
}