import { useEffect } from 'react'
import { API_URL } from './config/index'
import './App.css';
import image from "./book.png";

const HomePage = () => {

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
    
        if (query.get("success")) {
          console.log("Order placed! You will receive an email confirmation.");
        }
    
        if (query.get("canceled")) {
            console.log(
            "Order canceled -- continue to shop around and checkout when you're ready."
          );
        }
      }, []);

    return(
      
        <section>
    <div className="product">
      <img
        src={image}
      />
      <div className="description">
      <h3>$20.00</h3>
      </div>
    </div>
    <form action={`${API_URL}/api/stripe/create-checkout-session`} method="POST">
      <button type="submit" className='button'>
        Checkout
      </button>
    </form>
  </section>
    )
}

export default HomePage