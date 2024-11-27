import { GetServerSideProps } from "next";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

type HomeProps = {
  products: Product[];
};

export default function Home({ products }: HomeProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Список товаров</h1>
      <input
        type="text"
        placeholder="Поиск товара..."
        className="w-full mb-4 p-2 border rounded"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredProducts.length === 0 ? (
        <div className="text-center text-gray-500 py-8">Ничего не найдено</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden shadow-md bg-white transition relative"
            >
              <div className="relative w-full h-96">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                />
              </div>
              <div className="p-4  pb-16">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600">Цена: {product.price} руб.</p>
                <p className="text-gray-500 text-sm mt-2">
                  {product.description}
                </p>
                <Link
                  href={`/product/${product.id}`}
                  className="mt-4 block text-black font-medium absolute bottom-4"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
};
