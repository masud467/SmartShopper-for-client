import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import AllProductsCard from '../../components/shared/cards/AllProductsCard';
import { axiosPublic } from '../../hooks/useAxiosPublic';
import './pagination.css'

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(10); // Number of products per page
    const {
        data:paginatedData = [],
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ["products", currentPage, limit],
        queryFn: async () => {
          const { data } = await axiosPublic.get(`/products?page=${currentPage}&limit=${limit}`);
    
          return data;
        },
      });

      const { products = [], totalPages } = paginatedData;

    const handleNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };

    const handlePreviousPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };

    const handlePageClick = (page) => {
      setCurrentPage(page);
    };
      // console.log(users)
    
    //   if (isLoading) return <Loading></Loading>;
    return (
       
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
      {products.map((item) => (
        <AllProductsCard
          key={item._id}
          refetch={refetch}
          item={item}
        ></AllProductsCard>
      ))}
      {/* Pagination Controls */}
      <div className="pagination-controls flex justify-center items-center mt-10 space-x-2">
                  <button onClick={handlePreviousPage} disabled={currentPage === 1} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50">
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageClick(page)}
                      className={`px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 ${
                        currentPage === page ? 'bg-blue-500 text-white' : ''
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button onClick={handleNextPage} disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50">
                    Next
                  </button>
                </div>
    </div>
        
    );
};

export default Home;