import { NavLink } from 'react-router-dom'
import './Categories.scss';

function Categories() {
    return (
        <ul className='categories__list'>
            <NavLink className='categories__category' to='/category/protein'>
                <i className='categories__icon categories__icon--1'></i>
                <span className='categories__name'>Protein</span>
            </NavLink>
            <NavLink className='categories__category' to='/category/vegetables'>
                <i className='categories__icon categories__icon--2'></i>
                <span className='categories__name'>Vegetables</span>
            </NavLink>
            <NavLink className='categories__category' to='/category/fruits'>
                <i className='categories__icon categories__icon--3'></i>
                <span className='categories__name'>Fruits</span>
            </NavLink>
            <NavLink className='categories__category' to='/category/sauce'>
                <i className='categories__icon categories__icon--4'></i>
                <span className='categories__name'>Sauce</span>
            </NavLink>
        </ul>
    )
}

export default Categories