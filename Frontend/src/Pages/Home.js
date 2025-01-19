import {Link} from 'react-router-dom';
import '../style/home.css';
import image from '../images/book2.webp'
import Book from './Books';

function Home() {
    return (
        <>
            <div class="body">
                <div class="heading">Welcome to Bookify</div>
                <div class="boxmode">
                    <img src={image} alt="Young Mungo by Douglas Stuart" className="home-image"/>
                </div>
                <div class="content">
                    <h2>Buy and sell your <br></br>books <span>for the best prices</span></h2>
                    <p>Find and read more books you'll love, and keep track of the books you want to read. Be part of the world's largest community of book lovers on Goodreads.</p>
                    <Link to="/book" className="explore-button text-decoration-none">
                        Explore Now
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;
