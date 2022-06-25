import './Categories.scss';

function Categories() {
    return (
        <ul className='categories__list'>
            <li className='active'>
                <i className='categories__icon categories__icon--1'></i>
                <span className='categories__name'>Protein</span>
            </li>
            <li>
                <i className='categories__icon categories__icon--2'></i>
                <span className='categories__name'>Vegetables</span>
            </li>
            <li>
                <i className='categories__icon categories__icon--3'></i>
                <span className='categories__name'>Fruits</span>
            </li>
            <li>
                <i className='categories__icon categories__icon--4'></i>
                <span className='categories__name'>Sauce</span>
            </li>
        </ul>
    )
}

export default Categories