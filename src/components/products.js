// imports
import React from 'react';
import ProductItem from './productitem';

class Products extends React.Component {
    render() {
        // returns  myProducts
        return this.props.myProducts.map((product) => {
            console.log({ product });
            // returns product item
            return <ProductItem key={product.Image} product={product}></ProductItem>
        });
    }
}
export default Products;