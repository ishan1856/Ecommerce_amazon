import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';


function Checkout() {
  const [{basket,user},dispatch]=useStateValue();

  return (
    <div className='checkout'>

        <div className='checkout_left'>
            <img className='checkout_ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/SSH/Mar/MFD/uNREC/All/v2/3000all._CB580379196_.jpg' alt=''/>
        
       <div>
        <h3>Hello {user?.email}</h3>
        <h2 className='checkout_title'>Your Shopping Basket</h2>
          
          {basket.map(item=>(
            <CheckoutProduct 
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            
            
            />
           

          ))}
        
       </div>
       </div>

       <div className='checkout_right'>
        <h2><Subtotal/></h2>

       </div>
        
    </div>
  )
  }

export default Checkout;