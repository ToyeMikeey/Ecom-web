import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

function ProductList({ search = "" }) {
    const [products, setProducts] = useState([]);

    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);
    useEffect(() => {
        if (search.trim() === "") {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(
                products.filter(
                    (product) =>
                        product.title.toLowerCase().includes(search.toLowerCase()) ||
                        product.description.toLowerCase().includes(search.toLowerCase())
                )
            );
        }
    }, [search, products]);

    return (
        <div className="productList">
            {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}

        </div>
    );
}

export default ProductList;
