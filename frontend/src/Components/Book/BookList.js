import React from 'react';

const  BookList = (props) => {
    return ( 
            <><h4>Books</h4>
            <table className="responsive-table highlight">
            <thead>
                <tr>
                    <th>
                        Book name
                    </th>
                    <th>
                        Author name
                    </th>
                    <th>
                        Page
                    </th>
                    <th>
                        Price
                    </th>
                    <th className="cellcentered">
                        Action
                    </th>
                </tr>
            </thead>
            {props.books.map((item, index) => (
                <tbody key={item._id}>
                    <tr>
                        <td>
                            {item.name}
                        </td>
                        <td>
                            {item.author}
                        </td>
                        <td>
                            {item.page}
                        </td>
                        <td>
                            {item.price}
                        </td>
                        <td key={index} className="cellcentered">
                            <button key={index._id} onClick={props.viewCurrentBook.bind(this,item)} id="btnView" className="waves-effect waves-light btn-small rightsp" type="button">View</button>
                            <button key={index._id} onClick={props.editCurrentBook.bind(this,item)} id="btnEdit" className="waves-effect waves-light btn-small rightsp" type="button">Edit</button>
                            <button key={index._id} onClick={props.deleteCurrentBook.bind(this,item)} id="btnDelete" className="waves-effect waves-light btn-small rightsp" type="button">Delete</button>
                        </td>
                    </tr>
                </tbody>
            ))}
        </table></>
        
            /* <ul className="collection with-header">
                <li className="collection-header"><h3>Books</h3></li>
                {props.books.map((item) => (
                    <a href="#!" className="collection-item" key={item._id}
                    onClick={props.updateCurrentBook.bind(this,item)}>{item.name}</a>
                ))}
            </ul> */
     );
}
 
export default BookList;