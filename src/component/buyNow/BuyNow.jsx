import React from "react"
import "./BuyNow.css"
const BuyNow = () => {
  return (
    <div className="buynow_main">
      <nav>
        <img
          className="buynow_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/payselect/progressbar-payments._CB485947677_.gif"
          alt="gif"
        />
      </nav>
      <div className="buynow_main2">
        <h1>Select a payment method</h1>
        <div className="buyNow_container">
          <div>
            <input type="radio" name="b" />
            <span>Add Debit/Credit/ATM Card</span>
          </div>
          <div className="buydiv">
            <input type="radio" className="radioType" name="b" />
            <div>
              <span>Net Banking</span> <br />
              <select name="">
                <option value="bank" name="b">
                  Choose an Option
                </option>
                <option value="bank" name="b">
                  UCO Bank
                </option>
              </select>
            </div>
          </div>
          <div>
            <input type="radio" name="b" /> <span>Other UPI Apps</span>
          </div>
          <div>
            <input type="radio" name="b" /> <span>EMI</span>
          </div>
          <div className="buydiv">
            <input type="radio" className="radioType" name="b" />
            <div>
              <span>Pay on Delivery</span>
              <br />
              <span>
                Pay digitally with SMS Pay Link. Cash may not be accepted in
                COVID restricted areas
              </span>
              <h1>hello</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyNow
