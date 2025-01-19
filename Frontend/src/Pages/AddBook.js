import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useLocation } from 'react-router-dom';
import '../style/AddBook.css';
import axios from "axios";

function AddBook() {
    const [data, setData] = useState({ id: "", bookTitle: "", bookAuthor: "", bookImage: "" });
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.book) {
            setData(location.state.book);
        }
    }, [location.state]);

    const handleSubmit = async () => {
        if (!data.id || !data.bookTitle || !data.bookAuthor || !data.bookImage) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all the fields!',
                confirmButtonColor: '#e69fc8',
                confirmButtonText: 'Okay'
            });
            return;
        }

        const apiUrl = location.state && location.state.book ?
            `http://localhost:3002/update/${data.id}` :
            "http://localhost:3002/books";

        try {
            const response = await axios({
                method: location.state && location.state.book ? 'put' : 'post',
                url: apiUrl,
                data: data,
                headers: { "Content-Type": "application/json" }
            });

            Swal.fire({
                icon: 'success',
                title: location.state && location.state.book ? 'Updated!' : 'Submitted!',
                text: location.state && location.state.book ? 'Book details updated successfully!' : 'Book details submitted successfully!',
                showConfirmButton: true,
                confirmButtonColor: '#bd475b',
                confirmButtonText: 'Great!'
            }).then(() => {
                navigate('/book');
            });
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong while submitting the data!',
                confirmButtonColor: '#e69fc8',
                confirmButtonText: 'Okay'
            });
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const form = e.target.form;
            const index = Array.prototype.indexOf.call(form, e.target);
            form.elements[index + 1]?.focus();
            e.preventDefault();
        }
    };

    return (
        <>
            <div className="back" style={{ margin: "20px" }}>
                <Link to="/" className="back-button text-decoration-none">
                    Back To Home
                </Link>
            </div>
            <div className="container mt-5 d-flex justify-content-center">
                <div className="card shadow-lg p-4" style={{ width: "100%", maxWidth: "600px", backgroundColor: "#f8c8dc", border: '1px solid #f18fa0' }}>
                    <div className="text-center fs-3 mb-4" style={{ color: "#661d2f" }}>{location.state && location.state.book ? 'Edit Book Details' : 'Enter Book Details'}</div>

                    <form>
                        <div className="form-group mb-3">
                            <label htmlFor="text2" className="form-label" style={{ color: "#661d2f" }}>Book ID</label>
                            <input
                                value={data.id}
                                onChange={(e) => setData({ ...data, id: e.target.value })}
                                onKeyDown={handleKeyDown}
                                type="text"
                                className="form-control shadow-sm"
                                style={{ borderColor: "#e69fc8" }}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="text1" className="form-label" style={{ color: "#661d2f" }}>Book Title</label>
                            <input
                                value={data.bookTitle}
                                onChange={(e) => setData({ ...data, bookTitle: e.target.value })}
                                onKeyDown={handleKeyDown}
                                type="text"
                                className="form-control shadow-sm"
                                style={{ borderColor: "#e69fc8" }}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="text3" className="form-label" style={{ color: "#661d2f" }}>Author Name</label>
                            <input
                                value={data.bookAuthor}
                                onChange={(e) => setData({ ...data, bookAuthor: e.target.value })}
                                onKeyDown={handleKeyDown}
                                type="text"
                                className="form-control shadow-sm"
                                style={{ borderColor: "#e69fc8" }}
                            />
                        </div>

                        <div className="form-group mb-4">
                            <label htmlFor="text4" className="form-label" style={{ color: "#661d2f" }}>Image Path</label>
                            <input
                                value={data.bookImage}
                                onChange={(e) => setData({ ...data, bookImage: e.target.value })}
                                onKeyDown={handleKeyDown}
                                type="text"
                                className="form-control shadow-sm"
                                style={{ borderColor: "#e69fc8" }}
                            />
                        </div>

                        <div className="text-center">
                            <button
                                onClick={handleSubmit}
                                className="btn bg-danger bg-opacity-50 px-4 py-2 shadow"
                                type="button">
                                {location.state && location.state.book ? 'Update' : 'Submit'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddBook;
