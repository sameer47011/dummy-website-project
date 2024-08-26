import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProductDetails = async () => {
    await fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product details", error));
  };

  useEffect(() => {
    fetchProductDetails();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-96 object-contain mb-4"
      />
      <p className="text-xl text-gray-700 mb-4">Price: ${product.price}</p>
      <p className="text-lg text-gray-600 mb-4">{product.description}</p>
      <p className="text-lg text-gray-600">Category: {product.category}</p>
    </div>
  );
};

export default Product;
