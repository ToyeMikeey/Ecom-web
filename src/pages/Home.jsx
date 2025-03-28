import React from "react";
import ProductList from "../components/ProductList";

function Home({ search, setSearch }) {
    return (
        <div>
            <ProductList search={search} setSearch={setSearch} />
        </div>
    );
}

export default Home;
