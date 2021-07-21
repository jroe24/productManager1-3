import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router"
import DeleteProduct from "./ProductDelete";

// Destructor props
const ProductList = (props) => {
    const [ products, setProducts ] = useState([]);

    // Getting data from api
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            });
    }, []);

    // Handles Deleting Product from list after DeleteProduct runs
    const postDeleteHandler = (deletedProductId) => {
        let updatedProducts = products.filter((product) => product._id !== deletedProductId);
        setProducts(updatedProducts);
    }
    // What I want to see after render
    return (
        <div>
            <div className="Separator"></div>
            <h3>All Products</h3>
            <table className="ListTable">
                <tbody>
                {
                    products.map((product, index) => {
                        return (
                            <tr key={ index }>
                                <td>
                                    <Link to={ "/products/" + product._id }>
                                        { product.title }
                                    </Link>
                                </td>
                                <td>
                                    <Link to={ "/products/" + product._id + "/edit" }>
                                        <button>Edit</button>
                                    </Link>
                                </td>
                                <td>
                                    <DeleteProduct id={ product._id } postDeleteHandler={ postDeleteHandler }/>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default ProductList;