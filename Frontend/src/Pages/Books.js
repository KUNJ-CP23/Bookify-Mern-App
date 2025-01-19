import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pbook from "../images/booki.jpg";
import '../style/Books.css';
import axios from "axios";

function Book() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetch = async ()=> {
            const response = await axios.get('http://localhost:3002')
            setData(response.data);
        }

        fetch();
    }, []);

    var formattedData = data.map((book) => {
        return(
        <div className="col-md-4 mb-4" key={book.id}>
            <div className="card book-card shadow-sm" style={{ border: '2px solid #9e3a48' }}>
                <img src={book.bookImage} alt="Book" className="card-img-top book-img" />
                <div className="card-body text-center">
                    <h5 className="card-title">{book.bookTitle}</h5>
                    <p className="card-text text-muted">Author : {book.bookAuthor}</p>
                    <Link className="btn btn-custom" to={`/book/${book.id}`}>
                        Read More
                    </Link>
                </div>
            </div>
        </div>
        );
});

    return (
        <div className="book-page">
            <div className="back" style={{margin:"20px"}}>
                <Link to="/" className="back-button text-decoration-none">
                    Back To Home
                </Link>
            </div>

            <div className="container mt-5">
                <div className="row justify-content-center">
                    {formattedData}
                </div>
            </div>
        </div>
    );
}

export default Book;
