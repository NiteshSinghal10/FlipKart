import { addUser } from '../services';
import { useState } from 'react';
import { IUser } from '../interface';


let data: any = { name : {}};
const Signup = () => {
  
  const [signUpData, setSignUpData] = useState<IUser>({
    name: {
      firstname: '',
      lastname: ''
    },
    email: '',
    username: '',
    password: '',
    phone: '',
    address: {
      city: '',
      street: '',
      number: 0,
      zipcode: '',
      geolocation: {
        lat: '',
        long: ''
      }
    }
  });

  const handleUsername = async (e: any , field: string) => {

    if(field === 'name.firstname') {
      data.name.firstname = e.target.value;
    } else if(field === 'name.lastname') {
      data.name.lastname = e.target.value;
    } else {
      data[field] = e.target.value;
    }

    setSignUpData({ ...signUpData, ...data });
  }

  const signup = async (event: any) => {
    event.preventDefault();
    console.log('sigh', signUpData)
    const userData = await addUser(signUpData);
    console.log(userData)
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="w-[25%] rounded-md overflow-hidden border shadow-md">
        <div className="bg-[#2874f0] text-center py-4 ">
          <h1 className="text-2xl text-white font-semibold">SIGN UP</h1>
        </div>

        <form onSubmit={signup}>
          <div className="grid grid-cols-2 grid-rows-3 py-3 px-3 gap-3">
          <div className="flex justify-center">
            <input type="text" placeholder="First Name" required onChange={(e) => handleUsername(e, 'name.firstname')} className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none"/>
          </div >

          <div className="flex justify-center">
            <input type="text" placeholder="Last Name" required onChange={(e) => handleUsername(e, 'name.lastname')} className="w-full  px-4 py-2 border border-gray-500 rounded-md focus:outline-none"/>
          </div>

          <div>
            <input type="text" placeholder="Username" required onChange={(e) => handleUsername(e, 'username')} className="w-full  px-4 py-2 border border-gray-500 rounded-md focus:outline-none"/>
          </div>

          <div>
            <input type="password" placeholder="Password" onChange={(e) => handleUsername(e, 'password')} className="w-full  px-4 py-2 border border-gray-500 rounded-md focus:outline-none"/>
          </div>

          <div>
            <input type="number" placeholder="Phone" required onChange={(e) => handleUsername(e, 'phone')} className="w-full  px-4 py-2 border border-gray-500 rounded-md focus:outline-none"/>
          </div>

          <div>
            <input type="text" placeholder="abc@gmail.com" required onChange={(e) => handleUsername(e, 'email')} className="w-full  px-4 py-2 border border-gray-500 rounded-md focus:outline-none"/>
          </div>

          </div>

          <div className="px-[14px] w-full my-4">
            <button type='submit' className="w-full py-2 rounded-md bg-[#2874f0] text-white font-semibold text-xl" >Sign Up</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export { Signup };