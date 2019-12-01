// imports
import React from 'react';
import Products from './products';
import Axios from 'axios';

class Read extends React.Component {
    // state array
    state = {
        products: []
    };

    // get the prodcuts from localhost 4000 using its id
    componentDidMount() {
        Axios.get('http://localhost:4000/api/products')
            .then((response) => {
                this.setState({ products: response.data.products })
            }).catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            // div to style the page
            <div className="Reader">
                <marquee id="black" behavior="scroll" scrollamount="250" direction="left"><b>--------------------------------</b></marquee>
                <h1 id="black">Products !</h1>
                <marquee id="black" behavior="scroll" scrollamount="250" direction="left"><b>--------------------------------</b></marquee>

                {/* allows the products to be shows */}
                <Products myProducts={this.state.products}></Products>
                <marquee behavior="alternate" scrollamount="10" direction="left" id="backColor"><font size="10" ><i>Cheapest and safest place to get electronic products!<br />&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Use code "matt" for 20% off!</i></font></marquee>
            </div>
        );
    }
}
export default Read;
