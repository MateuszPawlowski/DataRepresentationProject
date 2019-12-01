// imports
import React from 'react';
import axios from 'axios';
import printers from '../images/printers.png'
import computers from '../images/pcs.png'

class Create extends React.Component {
  // contructor
  // handles the properties
  constructor(props) {
    super(props);
    this.state = { Price: '', Product: '', Image: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShopPriceChange = this.handleShopPriceChange.bind(this);
    this.handleShopProductChange = this.handleShopProductChange.bind(this);
    this.handleShopImageChange = this.handleShopImageChange.bind(this);
  }

  // methods
  handleShopPriceChange(e) {
    this.setState({ Price: e.target.value });
  }

  handleShopProductChange(e) {
    this.setState({ Product: e.target.value });
  }

  handleShopImageChange(e) {
    this.setState({ Image: e.target.value });
  }

  handleSubmit(e) {
    alert("Product Added");
    e.preventDefault();

    // constant for the products
    const productObject = {
      price: this.state.Price,
      product: this.state.Product,
      image: this.state.Image
    }
    // posts the info onto localhost 4000
    axios.post('http://localhost:4000/api/products', productObject)

    // sets price, product, image
    this.setState({
      Price: '',
      Product: '',
      Image: ''
    });
  }

  render() {
    return (
      // div to style the page
      <div className="Background">
        <marquee id="black" behavior="scroll" scrollamount="250" direction="left"><b>--------------------------------</b></marquee>
        <h1 id="black">Add Product</h1>
        <marquee id="black" behavior="scroll" scrollamount="250" direction="left"><b>--------------------------------</b></marquee>

        {/* form alligning everything and handling the submits for each product */}
        <form id='inputs' onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label><b>Product</b></label>
            {/* input for the text (handles the value for product and assigns it. Other inputs are identical) */}
            <input
              type='text'
              className='form-control'
              value={this.state.Product}
              onChange={this.handleShopProductChange}
            ></input>
          </div>
          <div className='form-group'>
            <label><b>Price</b></label>
            <input
              type='text'
              className='form-control'
              value={this.state.Price}
              onChange={this.handleShopPriceChange}
            ></input>
          </div>
          <div className='form-group'>
            <label><b>Image of Product</b></label>
            <textarea
              row='3'
              className='form-control'
              value={this.state.Image}
              onChange={this.handleShopImageChange}
            ></textarea>
          </div>
          <div>
            <input
              id="input"
              type="submit"
              value="Add Product">
            </input>
          </div>
        </form>
        {/* images and marquee added */}
        <img src={computers} height="380" />
        <img src={printers} height="380" />
        <marquee behavior="alternate" scrollamount="10" direction="left" id="backColor"><font size="10" ><i>Cheapest and safest place to get electronic products!<br />&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Use code "matt" for 20% off!</i></font></marquee>
      </div>
    );
  }
}

export default Create;
