import React from "react";
import { Link } from 'react-router-dom'


function BookDetail(props) {
    return (
        <div className="text-center">
            <img alt={props.title} className="img-fluid mb-3" src={props.src} style={{ margin: "0 auto" }} />
            <h3 id="author">Author(s): {props.authors}</h3>
            <p>Description: {props.description}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer" className="btn btn-success mt-3">View book in Google Books</a>
            <br />
            <a href="/reading-list" onClick={props.handleButtonClick} className="btn btn-info mt-3">Save book to reading list</a>
        </div>
    );
}

export default BookDetail;