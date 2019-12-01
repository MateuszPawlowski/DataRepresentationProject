// imports
import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ProductItem extends React.Component {

    // contructor for deleting a product
    constructor() {
        super();
        this.DelteProduct = this.DelteProduct.bind(this);
    }

    // method deleting a product
    DelteProduct(e) {
        console.log("Delete Clicked");
        alert("Product has been bought");
        axios.delete("http://localhost:4000/api/products/" + this.props.product._id).then().catch();
    }

    render() {
        return (
            <div>
                {/* the product image and price is called to be shown onto a html page */}
                <h1>{this.props.product.product}</h1>
                <blockquote className="blockquote mb-0">
                    <img src={this.props.product.image} height="300"></img>
                    <footer>Price: ${this.props.product.price}</footer>
                </blockquote>

                {/* button refering to delete method. When pressed it deletes a product and refreshes the page */}
                <Button href="/read" variant="danger" onClick={this.DelteProduct}>Buy Product</Button>
                &emsp;&emsp;&emsp;
                {/* ling refering to the edit page. When the button is pressed the user is 
                automatically put to the edit page using the id of the product */}
                <Link to={"/edit/" + this.props.product._id} className="btn btn-primary">Edit&ensp;Product</Link>
                <hr />
            </div>
        )
    }
}
export default ProductItem;