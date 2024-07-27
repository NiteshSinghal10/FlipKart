
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { categories } from '../services';

const DropDown = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [productCategories, setProductCategories] = useState([]);

  useEffect(() => {
    categories()
    .then(data => setProductCategories(data))
  },[])

  const handleClick = (category: string) => {
    // Create a new object for search params
    const newParams = new URLSearchParams(searchParams);
    newParams.set('type', category);

    // Update search params
    setSearchParams(newParams);
  };

  return (
    <div className="drop-down hidden absolute border bg-white top-[100%] left-[-150%]">
      {productCategories.map((category, index) => (
        <div
          key={index}
          onClick={() => handleClick(category)}
          className="w-[240px] h-[50px] flex justify-center items-center border text-black font-[400] text-[14px] cursor-pointer hover:bg-gray-200 hover:shadow-lg"
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export { DropDown };
