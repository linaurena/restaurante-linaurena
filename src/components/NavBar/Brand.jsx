import { Link } from 'react-router-dom'
import logo from '../../img/icons/logo.svg';
import './Brand.scss';

function Brand() {
  return (
    <Link to ='/' className='logo-box'>
      <img src={logo} className="logo" alt="logo" />
    </Link>
  )
}

export default Brand