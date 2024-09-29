

import React, { useState, useEffect } from 'react';
import { Image, Transformation } from 'cloudinary-react';
import share from '../../assets/share.svg'
import compare from '../../assets/compare.svg'
import like from '../../assets/like.svg'

const PaginationComponent = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  // Fetch product data from JSON
  useEffect(() => {
    fetch('/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Handle next page button
  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  // Handle page change for numbered pagination
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="pagination-component">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pb-20  ">
        {currentItems.map((product, index) => (
          <div key={product.id} className="text-center group relative">
            {/* Display the image using Cloudinary */}
            <Image
              cloudName="dzyvwxh7n" // Your Cloudinary cloud name
              publicId={product.imagePublicId} // Use the publicId from the product
              className="w-[285px] h-[301px] inline-block object-cover"
            >
              <Transformation crop="scale" width="200" />
            </Image>

           
            <div className='font-poppines bg-customLightblue mb-4 mr-2 ml-1'  ><p className="  text-lg font-medium">{product.name}</p>
              <p className=" text-sm">{product.description}</p>
              <p className="text-sm">{product.price}</p></div>

         

            <div className=' font-poppines absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300 flex flex-col  justify-center items-center '>
              <div className='gap-4 '> <h3 className='text-customLightbrown bg-white' >Add to cart</h3>
                <div className='flex mt-8 gap-2 '>
                  <img src={share} alt="" /><h3>Share</h3>
                  <img src={compare} alt="" /><h3>Compare</h3>
                  <img src={like} alt="" /><h3>Like</h3>
                </div></div>
            </div>

          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4 space-x-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {index + 1}
          </button>
        ))}

       
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationComponent;