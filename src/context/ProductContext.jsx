import React, { createContext, useState, useEffect, useContext } from 'react';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const [productsItems, setProductsItems] = useState([]);
    const [productsMeta, setProductsMeta] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`http://jointshfrontendapi-env-3.eba-z7bd6rn6.eu-west-1.elasticbeanstalk.com/products?limit=8&page=${currentPage}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProductsItems(data.items);
                setProductsMeta(data.meta);
            } catch (error) {
                console.error('There was a problem fetching the data:', error);
            } finally {
                setLoading(false);
            };
        };
        fetchProducts();
    }, [currentPage]);
    return (
        <ProductsContext.Provider value={{ productsItems, productsMeta, loading, currentPage, setCurrentPage }}>
            {children}
        </ProductsContext.Provider>
    );
};

const useProducts = () => {
    const { productsItems, productsMeta, loading, currentPage, setCurrentPage } = useContext(ProductsContext);
    return { productsItems, productsMeta, loading, currentPage, setCurrentPage };
};

export { ProductsProvider, useProducts };
