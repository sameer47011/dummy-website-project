import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

const ProductsItem = () => {
  const [products, setProducts] = useState([]);
  const getData = () => {
    fetch("https://fakestoreapi.com/products?limit=50")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error Fetching Data", error));
  };

  console.log(data);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Prodcusts Item</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((item)=>(
        <div
        key={item.id}
        className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between h-full"
      >
          <img src={item.image} alt={item.title}
           className="w-full h-48 object-contain mb-4"
          />
          <h1 className="text-lg font-semibold mb-2">{item.title}</h1>
          <p className="text-gray-500">Price :{item.price}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ProductsItem;
