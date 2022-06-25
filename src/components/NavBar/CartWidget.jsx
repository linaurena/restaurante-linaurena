import bag from '../../img/icons/bag.svg';
import './CartWidget.scss';

function CartWidget() {
  return (
    <>
        <div className='cart'>
            <p className='cart__price'>$0 USD</p>
            <div className="cart__bag">
                <p>Ok!</p>
                <img src={bag} alt="shopping bag" />
            </div>
        </div>
    </>
  )
}

export default CartWidget