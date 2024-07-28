import './style.css';
import { DropDown } from './drop-down';
import { useState } from 'react';
import { Cart } from '.';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';

const Navbar = (props: any) => {
  const [isCartShow , setIsCartShow] = useState(false);
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const cartButtonHandle = () => {
    isLoggedIn ? setIsCartShow(!isCartShow) : navigate('/login');
  }

  return (
    <>
      <div className="bg-[#2874f0] sticky top-0 flex">
        <div className=" h-[56px] w-[1110px] flex justify-between items-center m-auto">
        <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Logo" className="w-[75px] h-[20px]"/>

        <div className="flex justify-between items-center">
          <input type="search" className="w-[443px] h-[36px] px-[16px] focus:outline-none" placeholder='Search for products, brands and more'/>
          <div className="bg-white w-[42px] h-[36px] flex justify-center items-center cursor-pointer">
            <svg className="font-[400]" width="20" height="20" viewBox="0 0 17 18"  xmlns="http://www.w3.org/2000/svg"><g fill="#2874F1" fill-rule="evenodd">
              <path d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path><path d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path></g>
            </svg>
          </div>
        </div>
        
        <NavLink className="text-[#2874f0] bg-white font-[600] py-[5px] px-[40px] border border-[#dbdbdb]" to={'/login'}>Login</NavLink>
        <a className="font-[500] text-white cursor-pointer">Become a Seller</a>
        <p className="parent font-[500] text-white cursor-pointer flex items-center relative h-full">
          <DropDown/>
          <span className="mr-2">More</span>
          <svg className="child rotate-[270deg]" width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" ><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" ></path></svg>
        </p>
        <button className="font-[500] text-white flex items-center" onClick={cartButtonHandle}>
          <svg width="17" height="17" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff">
            </path>
          </svg>
          <span className="ml-2">Cart</span>
        </button>
        </div>

        <button className='mr-8 my-2 rounded-full w-[40px] flex justify-center items-center bg-gray-200 text-xl'>N</button>
      </div>
      {isCartShow && <Cart onClick ={() => setIsCartShow(false)} />}
      <Outlet />
    </>
  )
}

export { Navbar };