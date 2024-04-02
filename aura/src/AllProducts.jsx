import React from 'react';
import { products } from './data/products';

const AllProducts = () => {
  return (
    <div className="bg-gray-50 py-10 px-5" id="products">
      <div className="flex flex-col gap-2">
        <h5 className="font-playfair font-bold capitalize text-xl flex justify-end">
          all products
        </h5>
        <p className="text-sm text-right">
          Shop a range of natural, organic and effective skincare and wellness
          products.
        </p>
      </div>

      <div className="col-span-1 p-5 flex md:flex-row flex-col justify-between mt-10 gap-4">
        <div className='md:flex hidden'>
          <h5 className="font-bold capitalize">
            Beauty
            <hr className="border-tan w-36" />
          </h5>
        </div>
        <select className="border border-black bg-transparent p-2 md:w-1/4">
          <option value="all">All Products</option>
          <option value="skincare">Skincare</option>
          <option value="wellness">Wellness</option>
          <option value="haircare">Haircare</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 mb-4">
        <div className="col-span-1"></div>
        <div class="col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative">
          {products
            .reverse()
            .slice(0, 6)
            .map((product) => (
              <div class="bg-white border p-1 rounded shadow-md">
                <div class="h-40 w-full">
                  <img
                    src={product.image}
                    alt={product.title}
                    class="h-40 w-full object-cover hover:scale-105 transition duration-300 ease-in-out"
                  />
                </div>
                <h5 class="text-sm font-semibold mt-3 px-2">{product.title}</h5>
                <div class="flex justify-between items-center mt-3 px-2">
                  <p class="text-gray-500 text-xs mt-1">
                    {product.description.slice(0, 20)}
                    {product.description.length > 20 ? '...' : ''}
                  </p>
                  <p class="text-xs text-gray-500 ml-1 relative">
                    {product.rating} ({Math.floor(Math.random() * 100)})
                  </p>
                </div>
                <div className="px-2 flex items-center">
                  <button class="border border-black text-sm font-bold uppercase  mt-3 mb-2 w-full  px-4 py-2 hover:bg-black hover:text-white">
                    add to bag
                  </button>
                  <button class="border border-l-0 border-black text-sm font-bold uppercase  mt-3 mb-2 w-1/2  px-4 py-2">
                    ${product.price}
                  </button>
                </div>
              </div>
            ))}
          <a
            href="all-products"
            className="capitalize text-sm absolute right-5 -bottom-10 underline cursor-pointer font-semibold"
          >
            all products {'->'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
