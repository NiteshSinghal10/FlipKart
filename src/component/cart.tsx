import { useProduct } from "../context/product";
import { CartCard } from './cart-card';


const Cart = (props: any) => {
  const { productData } = useProduct();
  let total = 0;
  productData.forEach(item => item.price && (total += item.price));

  return (
    <div className="fixed right-0 top-0 h-full bg-gray-200 border  w-[25%] mt-[56px] overflow-y-scroll">

      {/* cart navbar */}
      <div className="bg-[#2874f0] py-3 px-2 flex justify-between items-center sticky top-0">
        <p className="text-white font-semibold text-xl pl-8">Your Items</p>
        <button className="bg-red-500 rounded-full w-8 h-8 text-white font-semibold" onClick={() => props.onClick()}>X</button>
      </div>

      {/* dynamics cards  */}
      <div className="overflow-y-scroll">
        {productData.map((item, key) => <CartCard index= {key}/>)}
      </div>

      {/* total price  */}
      <div className="bg-[#2874f0] py-4 px-2 text-white font-semibold text-lg flex justify-around fixed bottom-0 w-[25%]">
          <p>Total Price: </p>
          <p>{total.toFixed(2)}$</p>
      </div>
    </div>
  )
}

export { Cart }