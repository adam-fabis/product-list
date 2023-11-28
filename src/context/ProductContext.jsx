import React, { createContext, useState, useEffect, useContext } from 'react';
const apiUrl = import.meta.env.VITE_API_URL;
const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const [productsItems, setProductsItems] = useState([]);
    const [productsMeta, setProductsMeta] = useState({});
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [currentSearch, setCurrentSearch] = useState('');
    const [promo, setPromo] = useState(false);
    const [active, setActive] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const params = new URLSearchParams({
                    limit: 8,
                    page: currentPage,
                    search: currentSearch,
                });

                if (promo) {
                    params.append('promo', encodeURI(promo));
                }
                if (active) {
                    params.append('active', encodeURI(active));
                }

                const queryUrl = `${apiUrl}/products?${params.toString()}`;
                const response = await fetch(queryUrl);
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
    }, [currentPage, currentSearch, promo, active, apiUrl]);

    return (
        <ProductsContext.Provider value={{
            productsItems,
            productsMeta,
            loading,
            currentPage,
            setCurrentPage,
            totalPages,
            currentSearch,
            setCurrentSearch,
            promo,
            setPromo,
            active,
            setActive

        }}>
            {children}
        </ProductsContext.Provider>
    );
};

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };
