import React from 'react';
import PropTypes from 'prop-types';
import { useProducts } from '../../context/ProductContext';

const Pagination = (props) => {
    const { productsMeta, setCurrentPage } = useProducts();
    const currentPage = productsMeta.currentPage;
    const totalPages = productsMeta.totalPages;
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const renderPagination = () => {
        const pageNumbersToDisplay = [];
        const totalPages = productsMeta.totalPages;
        const currentPage = productsMeta.currentPage;

        if (totalPages <= 6) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbersToDisplay.push(i);
            }
        } else {
            if (currentPage <= 2) {
                for (let i = 1; i <= 3; i++) {
                    pageNumbersToDisplay.push(i);
                }
                pageNumbersToDisplay.push('...');
                for (let i = totalPages - 2; i <= totalPages; i++) {
                    pageNumbersToDisplay.push(i);
                }
            } else if (currentPage >= totalPages - 4) {
                for (let i = totalPages - 5; i <= totalPages; i++) {
                    pageNumbersToDisplay.push(i);
                }
            } else {
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pageNumbersToDisplay.push(i);
                }
                pageNumbersToDisplay.push('...');
                for (let i = totalPages - 2; i <= totalPages; i++) {
                    pageNumbersToDisplay.push(i);
                }
            }
        }

        return (
            <ul className="flex">
                {pageNumbersToDisplay.map((pageNumber, index) => (
                    <li key={index}>
                        {pageNumber === '...' ? (
                            <span className="px-2">...</span>
                        ) : (
                            <button
                                onClick={() => setCurrentPage(pageNumber)}
                                className={`px-2 ${currentPage === pageNumber ? 'font-bold' : ''
                                    }`}
                            >
                                {pageNumber}
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        );
    };



    return (
        <div className='container mx-auto px-6 pt-13 pb-8 xl:px-27'>
            <div className='flex justify-center gap-8'>
                <button className={currentPage === 1 ? 'text-Gray' : null}
                    onClick={() => setCurrentPage(1)}
                    disabled={currentPage === 1}
                >
                    First
                </button>
                <div>
                    {renderPagination()}
                </div>
                <button
                    className={currentPage === totalPages ? 'text-Gray' : null}
                    onClick={() => setCurrentPage(totalPages)}
                    disabled={currentPage === totalPages}
                >
                    Last
                </button>
            </div>
        </div>
    );
};

Pagination.propTypes = {};

export default Pagination;
