import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProductData } from '../interface';
import { product } from '../services';
import { useProduct } from "../context";


const ProductScreen = () => {
  const { productData ,setProductData } = useProduct();
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState<IProductData>({
    title: '',
    image: 'string',
    description: '',
    id: ''
  });

  useEffect(() => {
    if(id) {
      product(id)
      .then((data) => setProductInfo(data))
    }
  }, [id]);


  return (
    <div className="h-[calc(100vh-56px)] flex justify-center items-center">
      <div className="grid grid-cols-[45%_55%] border rounded-2xl w-[70%] h-[80%] shadow-2xl overflow-hidden ">
        <img src={productInfo && productInfo.image} className="w-full h-full py-8 px-8"/>

        <div className="flex flex-col py-8">
          <h1 className="text-center font-[800] text-[2rem] py-4 px-2 text-wrap">{productInfo && productInfo.title.toUpperCase()}</h1>
          <div className=" h-full">
            <p className="px-[60px] text-center text-gray-600">{productInfo && productInfo.description}</p>

            <div className="py-6 px-6 mt-4 leading-[80px]">
              <p className="text-xl flex items-center">
                <span className="font-semibold">Rating: </span>
                {productInfo && Array.from({ length: Math.floor(Number(productInfo.rating?.rate)) }).map(() => 
                 <span className="star text-3xl ml-2 text-[gold]" >&#9733;</span>
                )}
              </p>

              <p className="flex items-center">
                <span className="font-semibold text-3xl">Price :</span>
                <span className="ml-2 text-[40px] font-semibold">{productInfo && productInfo.price}$</span>
              </p>
            </div>

            <div className=" px-[80px] py-8 flex justify-between h-1/5">
              <button className="border-0 rounded-lg px-12 bg-[#2874f0] text-white font-semibold text-lg" onClick={() => setProductData([...productData, productInfo])}>Add To Cart</button>
              <button className="border-0 rounded-lg px-12 bg-[#2874f0] text-white font-semibold text-lg">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ProductScreen };