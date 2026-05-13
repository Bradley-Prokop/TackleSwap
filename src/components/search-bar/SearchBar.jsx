import './SearchBar.css';
import SearchBarImg from '../../assets/icons/search.svg';

export default function SearchBar(){
    return(
        <div className="search-bar-main-container">
            <img className='search-bar-icon' src={SearchBarImg} alt="Search bar icon" />
            <input className='search-bar-input' type="text" placeholder='Search' />
        </div>
    );
}