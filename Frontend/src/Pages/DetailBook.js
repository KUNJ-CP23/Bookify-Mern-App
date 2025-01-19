import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2"; 
import axios from 'axios';
import '../style/DetailBook.css'; 

function DetailBook() {
    const [data, setData] = useState({});
    const { id } = useParams(); // Get the book ID from URL
    const navigate = useNavigate();
    const apiUrl = `http://localhost:3002/books/${id}`;

    // Fetch book details using async/await and Axios
    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const response = await axios.get(apiUrl);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching book details:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to load book details!',
                });
            }
        };
        
        fetchBookDetails();
    }, [id]);

    // delete operation with Axios
    const handleDelete = async () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`http://localhost:3002/delete/${id}`);
                    Swal.fire(
                        'Deleted!',
                        'The book has been deleted.',
                        'success'
                    ).then(() => {
                        navigate('/book'); 
                    });
                } catch (error) {
                    console.error('Error deleting book:', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Failed to delete the book!',
                    });
                }
            }
        });
    };

    const handleEdit = () => {
        navigate('/addbook', {
            state: {
                book: data
            }
        }); // Redirect to the edit page with the book data
    };

    return (
        <div className="detail-book-page">
            <div className="container mt-5">
                <div className="card shadow-lg p-4 book-card">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <Link to="/book" className="btn btn-info custom-btn">Back to List</Link>
                        <div>
                            <button className="btn btn-warning custom-btn me-2" onClick={handleEdit}>Edit</button> {/* Edit Button */}
                            <button className="btn btn-danger custom-btn" onClick={handleDelete}>Delete</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <img src={data.bookImage} alt="Book cover" className="img-fluid rounded shadow-sm book-image" />
                        </div>
                        <div className="col-md-8">
                            <h1 className="text-success mb-3">Title: {data.bookTitle}</h1>
                            <h4 className="text-muted mb-3">Author: {data.bookAuthor}</h4>
                            <p className="text-justify">{data.bookDetails}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailBook;
