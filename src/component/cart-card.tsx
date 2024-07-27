import { useProduct } from "../context/product"

const CartCard = ({index}: {index: number}) => {
  const { productData, setProductData } = useProduct();

  return (
    <div className="h-[100px] flex justify-between items-center shadow">

        <div className="px-4 py-2 w-[80%] h-[100%] overflow-hidden grid grid-cols-[50px_1fr]">
          <div className="flex justify-center items-center">
            <img src={productData[index].image} className=" rounded-full border h-[50px] w-[50px] border-black" />
          </div>
          
          <div className="ml-2 text-ellipsis flex items-center">{productData[index].title.length > 60 ? `${productData[index].title.substring(0, 60)}...` : productData[index].title}</div>
        </div>

        <div className="py-4 px-4 font-semibold text-xl flex">
              {productData[index].price}$
              <button className="ml-2 w-[30px] h=[30px] text-center shadow bg-gray-50 rounded-full" onClick={() => {setProductData(productData.filter((item, i) => i !== index))}}>
                -
              </button>
        </div>
    </div>
  )
}

export { CartCard }