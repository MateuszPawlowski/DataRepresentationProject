// imports
import React from 'react';
import '../App.css';
import amazon from '../images/amazon.png'
import laptop from '../images/laptop.png'
import consoles from '../images/consoles.png'

class Content extends React.Component {
  render() {
    return (
      // div to style the page
      <div className="Background">
        <marquee id="black" behavior="scroll" scrollamount="250" direction="left"><b>--------------------------------</b></marquee>
        <h1 id="black">Matt Shop</h1>
        <marquee id="black" behavior="scroll" scrollamount="250" direction="left"><b>--------------------------------</b></marquee>
        <br />
        <br />
        <img src={laptop} height="300"></img>

        <br /><br />
        {/* Info about the company */}
        <b><i>
          Matts stores are Iocally owned home appliance stores, who have come together as members of
            <br />
          the Matts Ireland group to get the best prices for our customers! With over 60 stores nationwide,
            <br />
          we're keeping hundreds of jobs in our local communities, so by shopping at Matts you can be sure
            <br />
          you're supporting local. Matts has 25 Member countries across Europe, with 9,400 specialist stores
            <br />
          and branches, and every store is a specialist in home appliances. From HD, UHD and Curved TV's to
            <br />
          Tablets and Speaker Systems, and from Home Laundry to American Refrigeration, Matts Retailers
            <br />
          can offer you the latest product ranges from top name brands at a very competitive price.Our
            <br />
          philosophy in two words: Service and Price. Matts Retailers are often family-run businesses,
            <br />
          who take pride in their customer service and product knowledge. They take the time to get to know the
            <br />
          customer and the product, so when you come into a Matts store, you're not talking to someone
            <br />
          who's under pressure to reach targets. In reality you'll probably be talking to the owner or family
            <br />
          member, someone with serious know-how in their field. So not only will they be giving you a brilliant
            <br />
          price, they'll be able to provide you with advice you can really trust. And it doesn't stop there! Matts
            <br />
          Retailers also focus on after sales service; from delivery to installation, servicing and repairs, the
            <br />
          Matts experience does not stop when you exit the shop. They care about their customers and pride
            <br />
          themselves on the attention they give to their customers after the sale.
            </i></b>
        <br />
        {/* Images added + the marquee */}
        <img src={amazon} height="380" />
        <img src={consoles} height="380" />
        <marquee behavior="alternate" scrollamount="10" direction="left" id="backColor"><font size="10" ><i>Cheapest and safest place to get electronic products!<br />&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Use code "matt" for 20% off!</i></font></marquee>
      </div>
    );
  }
}

export default Content;
