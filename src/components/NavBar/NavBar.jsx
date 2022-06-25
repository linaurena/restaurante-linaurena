import './NavBar.scss';
import Brand from './Brand';
import Categories from './Categories';
import OrderWidget from './OrderWidget';
import CartWidget from './CartWidget';


function NavBar() {
  return (
    <>
        <header>
            <div className='menu-box'>
              <Brand />
              <Categories />
            </div>
            <div className='menu-widgets'>
              <OrderWidget />
              <CartWidget />
            </div>
        </header>
    </>
  )
}

export default NavBar