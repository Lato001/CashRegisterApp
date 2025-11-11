import React from "react";
import type { Product } from "@/core/types/product";
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, description, price, img_url } = product;
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:scale-105 transition-transform flex flex-col h-full">
      <img
        src={img_url}
        alt={name}
        className="w-full h-48 object-cover rounded-xl mb-3"
      />
      <h1 className="text-xl font-semibold text-gray-800">{name}</h1>
      <h2 className="text-gray-600 text-base mt-1">${price}</h2>

      {description && (
        <p className="text-gray-500 text-sm mt-2 grow">{description}</p>
      )}
    </div>
  );
};

export default ProductCard;
