"use client";

import { Product } from "@/app/lib/definitions";
import QuantityButton from "@/app/component/QuantiytButton";
import Link from "next/link";
import { formatCurrency } from "@/app/lib/utils";
import Image from "next/image";

import { useState } from "react";

type ProductImageProp = {
  src: string;
  product: Product;
  category: string;
  price: number;
  productPhotos: any[];
};

export default function ProductDetails({
  src,
  product,
  category,
  price,
  productPhotos,
}: ProductImageProp) {
  const [photo, setPhoto] = useState(src);

  function handleSetPhoto(photo: string) {
    setPhoto(photo);
  }

  return (
    <>
      <div className="flex w-fit h-[60%] gap-6 mt-4 ml-24 md:ml-2 md:px-6 x-sm:flex-col">
        {/* project image */}
        <div className="bg-white rounded-md p-12">
          <Image src={photo} alt="product image" width={200} height={100} />
        </div>
        {/* </#project image> */}

        {/* product details */}
        <div className="flex-1 max-w-[25rem] md:mb-3 px-3 pt-4 flex flex-col gap-3 justify-end">
          <p className="font-semibold uppercase text-md">{category}</p>
          <h3 className="capitalize font-semibold md:text-[2rem] text-[2.3rem]">
            {product?.name}
          </h3>

          {/* description */}
          <p className="max-w-[20rem]">{product?.description}</p>
          <p className="font-semibold text-[1.75rem]">
            {formatCurrency(price)}
          </p>

          <div className="flex gap-5 items-center mb-2">
            <QuantityButton product={product!} />
            <Link
              href="/checkout"
              className="bg-reddish text-white rounded-md px-6 py-1 text-center opacity-100 hover:opacity-95 transition-[opacity] duration-200 ease"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
      {/* </#project details> */}
      <div className="flex items-center gap-4 w-fit ml-24 md:hidden">
        {productPhotos.map((item: { url: string }) => (
          <div
            className="w-20 h-16 relative  border-2 border-gray-500 rounded-md"
            key={item.url}
            onMouseOver={() => handleSetPhoto(`http://api.timbu.cloud/images/${item.url}`)}
          >
            <Image
              src={`http://api.timbu.cloud/images/${item.url}`}
              alt="product"
              fill
              className="rounded-sm"
            />
            <div className="absolute inset-0 opacity-0 bg-dark_charcoal hover:opacity-60 transition-[opacity] duration-200 ease"></div>
          </div>
        ))}
      </div>
    </>
  );
}
