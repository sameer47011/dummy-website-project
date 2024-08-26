import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";

const Home = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    await fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => setProduct(data.slice(0, 6)))
      .catch((error) => console.error("Error Fetching data", error));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleBuyNow = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {product.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between h-full"
          >
            <div>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-contain mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-4">Price: ${item.price}</p>
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-auto"
              onClick={() => handleBuyNow(item.id)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => navigate("/productsItem")}
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default Home;

