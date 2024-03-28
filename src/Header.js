import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom'
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  const [{ basket,user},dispatch]=useStateValue();

 const  handleAuthentication =()=>{
  if(user){
    auth.signOut();
  }
 }
  return (
  <div className='header'>
    <Link to='/'>
    <img className='header_logo' src='https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?resize=2560%2C1578://www.shutterstock.com/image-vector/chattogram-bangladesh-april-24-2023-260nw-2292992631.jpg' />
    </Link>

    <div className='header_search'>
        <input className='header-search-input' type='text'/>
        <SearchIcon className='header_searchicon' />
    
        </div>
        <div className='header_nav'>
          <Link to ={!user && '/login'}>
            <div onClick={handleAuthentication} className='header_option'>
            <span className='header_option_lineone' style={{textDecoration:'none !important', color:'white !important' }}>Hello {!user ? 'Guest': user.email}</span>
            <span className='header_option_linetwo'>{user ? 'Sign Out' : 'Sign In'}</span>
          
            </div>
         </Link>

            <div className='header_option'>
            <span className='header_option_lineone'>Returns</span>
            <span className='header_option_linetwo'>& Orders</span>
           
            
              </div>

            
            <div className='header_option'>
            <span className='header_option_lineone'>Your</span>
            <span className='header_option_linetwo'>Prime</span>
            </div>

            <Link to='/checkout'>
            <div className='header_optionbasket'>
            <ShoppingBasketIcon/>
            <span className='header_option_linetwo  header_basketcount'>{basket?.length}</span>

           </div>
            </Link>
            
           </div>
           </div>

  )
}

export default Header;