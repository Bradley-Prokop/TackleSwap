import './Home.css';
import SearchBar from '../../components/search-bar/SearchBar';

export default function Home(){

    return(
        <div className='home-main-container'>
            <div className="home-search-bar-container">
                <SearchBar></SearchBar>
            </div>

            <div className="home-hero">

                <h1 className="home-hero-title">Old gear piling up?</h1>

                <p className="home-hero-text">We provide a platform for anglers to trade poles, tackle, and equiptment!</p>
            </div>
        </div>
    );

};