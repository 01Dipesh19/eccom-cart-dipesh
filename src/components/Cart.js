import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  const card = useSelector((state) => state.cartData);

  const [totalPrice, setTotalPrice] = useState();
  const [totalDiscount, setTotalDiscount] = useState();

let amount = card.length && card.map(item => parseInt(item.price.replace(/,/g, ''), 10)).reduce((prev, next) => prev + next);
//const formattedAmount = amount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
//console.warn("this is amount", formattedAmount);
  const calculateTotal = () => {
    let cartTotal = 0;
    let cartDiscount = 0;

    // Calculate item prices and discounts
    const itemCounts = card.reduce((count, item) => {
      count[item.id] = (count[item.id] || 0) + 1;
      return count;
    }, {});
console.warn(itemCounts,"itemmmmmmmmmmmmmm")
    Object.keys(itemCounts).forEach((productId) => {
      const product = card.find((item) => item.id === productId);
      const quantity = itemCounts[productId];

      if (productId === '1' && quantity >= 3) {
        const discountedSets = Math.floor(quantity / 3);
        cartTotal += discountedSets * 75;
        cartDiscount += (quantity - discountedSets * 3) * product.price;
      } else if (productId === '2' && quantity >= 2) {
        const discountedSets = Math.floor(quantity / 2);
        cartTotal += discountedSets * 35;
        cartDiscount += (quantity - discountedSets * 2) * product.price;
      } else {
        cartTotal += quantity * product.price;
        //cartDiscount += (quantity )
      }
    });
    console.warn("cartTotallllllllllllllllll ",cartTotal)

    // Apply additional discount if total price is over Rs 150
    if (cartTotal > 150) {
      cartDiscount += 20;
    }

    setTotalPrice(cartTotal);
    setTotalDiscount(cartDiscount);
    console.warn(cartTotal,"totalprice")
  };

  return (
    <div>
      <div className="cart-page-container">
        <table className="custom-table">
          <tr>
            <td className="custom-color">Name</td>
            <td className="custom-color">Price</td>
          </tr>
          {card.map((item) => (
            <tr key={item.key} className="mapping">
              <td className="custom-color1">{item.name}</td>
              <td className="custom-color1"> {item.price}</td>
            </tr>
          ))}
       <br /> <br /> <br /> <br /> <br />
        <div className="price-details">
          <div className="adjust-price">
            <span>Total Amount</span>
            <span>{amount}</span>
          </div>
          <div className="adjust-price">
            <span>Offer Amount</span>
            <span>{totalPrice}</span>
          </div>
          <div className="adjust-price">
            <span>Discount</span>
            <span>{totalDiscount}</span>
          </div>
          <div className="adjust-price">
            <span>Total</span>
            <span>{totalPrice - totalDiscount}</span>
          </div>
          <div>
            <div>
            <button type="button" class="btn btn-success" onClick={calculateTotal}>Calculate Total</button>
              <Link to='/checkout' ><button  class="btn btn-warning">CHECK OUT</button></Link>
            </div>
          </div>
        </div>
        </table>
      </div>
     
    </div>
    
  );
}

export default Cart;
