import React, { createContext, useState, useEffect, useContext } from 'react';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const [productsItems, setProductsItems] = useState([]);
    const [productsMeta, setProductsMeta] = useState({});
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [currentSearch, setCurrentSearch] = useState('');
    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${apiUrl}/products?limit=8&page=${currentPage}&search=${currentSearch}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProductsItems(data.items);
                setProductsMeta(data.meta);
                setTotalPages(data.meta.totalPages);
            } catch (error) {
                console.error('There was a problem fetching the data:', error);
            } finally {
                setLoading(false);
            };
        };

        fetchProducts();
    }, [currentPage, currentSearch, apiUrl]);

    useEffect(() => {
        setCurrentPage(1);
    }, [currentSearch]);

    return (
        <ProductsContext.Provider value={{
            productsItems,
            productsMeta,
            loading,
            currentPage,
            setCurrentPage,
            totalPages,
            currentSearch,
            setCurrentSearch
        }}>
            {children}
        </ProductsContext.Provider>
    );
};

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };
