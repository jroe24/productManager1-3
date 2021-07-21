import React from "react";
import axios from "axios";

// Destructor props
const DeleteProduct = (props) => {
    const { id, postDeleteHandler } = props;

    // Handles delete (by ID)
    const onDeleteHandler = (e, id) => {
        e.preventDefault();

        // Running delete on product by ID and running postDeleteHandler to handle deleting product form list
        axios.delete("http://localhost:8000/api/products/" + id)
            .then((res) => {
                console.log(res.data);
                postDeleteHandler(id);
            })
            .catch((err) => console.log(err))
    }

    //Added delete button
    return (
        <button onClick={ (e) => onDeleteHandler(e, id) }>Delete</button>
    )
}

export default DeleteProduct;