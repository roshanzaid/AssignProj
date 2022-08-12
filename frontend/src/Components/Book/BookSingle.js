import React from 'react';

const  BookSingle = (props) => {
    return (
 
        <div className="row">
            <h4>Selected Book</h4>
            <div className="col s12">
                <div className="card hoverable">
                    <div className="card-image">
                        <img src="books.jpeg"/>
                        <span className="card-title">{props.book.name}</span>
                    </div>
                    <div className="card-content">
                        <p className="card-panel teal lighten-2" >
                            Author Name: {props.book.author}
                        </p>
                        <p className="card-panel teal lighten-2" >
                            Total Pages: {props.book.page}
                        </p>
                        <p className="card-panel teal lighten-2" >
                            Book Price: {props.book.price}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default BookSingle;