import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Card } from '../component';
import { useProductList } from '../context';
import { IProductData } from '../interface';
import { products } from '../services';

const HomeScreen = () => {
  const { productList ,setProductList } = useProductList();
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState<IProductData[]>([]);
  


  useEffect(() => {
    products()
    .then(data => {
      const type = searchParams.get('type');
      setProductList(data);
      if(type) {
        setProduct(data.filter((item: IProductData) => item.category === type));
      } else {
        setProduct(data);
      }
      
    })
  }, []);

  useEffect(() => {
    const type = searchParams.get('type');
    if(type){
      setProduct(productList.filter(item => item.category === type));
    }
  },[searchParams]);


  return (
    product.length === 0 ? <div>Loading</div> :
    <>
      {product.map((data, index) => <Card key={index} id={data.id} description={data.description} title={data.title} image={data.image} price={data.price}/>)}
    </>
  );
}

export { HomeScreen };