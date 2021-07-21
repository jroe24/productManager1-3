import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import DeleteProduct from "./ProductDelete";

// Destructor props
const UpdateProduct = (props) => {
    const { id } = props;
    const [ product, setProduct ] = useState({
        title: "",
        price: "",
        description: ""
    });

    // Getting data from api
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then((res) => setProduct(res.data))
    }, [id])

    // Handle Submit
    const onSubmitHandler = (e) => {
        e.preventDefault();
    
        axios.put("http://localhost:8000/api/products/" + id, product)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        
        navigate("/products");
    }

    const onChangeHandler = (e) => {
        let updatedProduct = { ...product };
        updatedProduct[e.target.name] = e.target.value;
        setProduct(updatedProduct);
    }

    const postDeleteHandler = () => {
        navigate("/products");
    }

    // What I want to see after render (Including delete button w/ functionality)
    return (
        <div>
            <h2>Update Product</h2>
            <form onSubmit= { onSubmitHandler }>
                <p>
                    <label htmlFor="id">Title</label>
                    <input id="title" name="title" type="text" value={ product.title } onChange={ (e) => onChangeHandler(e) }/>
                </p>
                <p>
                    <label htmlFor="price">Price</label>
                    <input id="price" name="price" type="text" value={ product.price } onChange={ (e) => onChangeHandler(e) }/>
                </p>
                <p>
                    <label htmlFor="description">Description</label>
                    <input id="description" name="description" type="text" value={ product.description } onChange={ (e) => onChangeHandler(e) }/>
                </p>
                <input type="submit" value="Update"/>
                <p>
                    <DeleteProduct id={ id } postDeleteHandler={ postDeleteHandler }/>
                </p>
            </form>
        </div>
    )
}

export default UpdateProduct;