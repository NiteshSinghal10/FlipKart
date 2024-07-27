import { useContext, createContext, useState } from "react";
import { IProductData } from '../interface/product';

export const ProductListContext = createContext<{productList: IProductData[], setProductList: (data: IProductData[]) => void}>({productList: [], setProductList: () => {}});

export const ProductListProvider = (props: any) => {
  const [productList, setProductList] = useState<IProductData[]>([]);

  return (
    <ProductListContext.Provider value = {{productList, setProductList}} >
      {props.children} 
    </ProductListContext.Provider>
  );
}

export const useProductList = () => {
  return useContext(ProductListContext);
}