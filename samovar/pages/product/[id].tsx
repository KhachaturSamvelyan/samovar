import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

type ProductPageProps = {
  product: Product | null;
};

export default function ProductPage({ product }: ProductPageProps) {
  const router = useRouter();
  if (!product) {
    return <div className="text-center py-8">Товар не найден</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        className="mb-4 px-4 py-2 bg-black text-white rounded "
        onClick={() => router.back()}
      >
        Назад
      </button>
      <h1 className="text-4xl font-bold mb-16 text-center">{product.name}</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2 relative h-96">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="contain"
            priority={true}
          />
        </div>
        <div className="w-full lg:w-1/2">
          <p className="text-gray-600 text-lg mb-4">
            Цена: {product.price} руб.
          </p>
          <p className="text-gray-800 text-base">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  const product = await res.json();

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
};
