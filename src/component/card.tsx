import { NavLink, useNavigate } from 'react-router-dom';

import { IProductData } from '../interface/product';
import { useProduct } from '../context/product';
import { useAuth } from '../context';

const Card = (props: IProductData) => {

  const { productData, setProductData } = useProduct();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const data = {
    id: props.id,
    title: props.title,
    image: props.image,
    description: props.description,
    price: props.price ? props.price : 0
  };

  const addCartButtonhandle = () => {
    isLoggedIn ? setProductData([...productData, data]) : navigate('/login');
  }
 
  return (
    <div className="cursor-pointer overflow-hidden pt-[24px] pb-[30px] pl-[24px] border-0 shadow ">
      <div className="grid grid-cols-[10%_80%] h-[231px]">

        {/* product image  */}
        <div className="flex items-center">
          <img alt="Product" src={props.image} className="w-[157px] h-[200px]" />
        </div>

        {/* product details  */}
        <div className="flex flex-col justify-center ml-[20px]">
          <div className="flex flex-col gap-1">
            <NavLink className="hover:text-[#2874f0] font-[500] text-[18px]" to={`/product/${props.id}`}>{props.title}</NavLink>

            <div className="text-[#212121] w-[500px] ">
              <p className="font-[400] text-[14px]">{`${props.description.substring(0, 245)}${props.description.length > 245 ? '...' : ''}`}</p>
            </div>
          </div>

          <button className="bg-[#2874f0] font-[600] text-white w-[150px] h-[30px] border-0 rounded-[15px] mt-4" onClick={addCartButtonhandle}>Add to cart</button>

        </div>
      </div>
    </div>
  )
}

export { Card }