import { addNewBook, removeBook, updateBook, viewBooks, viewSingleBook } from '../controller/bookController.js';

const route = (app) => {
    app.route('/book')
    //CREATE POST API
        .post(addNewBook)
    //VIEW GET API
        .get(viewBooks);
    app.route('/book/id=:BookId')
    //VIEW SINGLE API
        .get(viewSingleBook)
    //UPDATE BOOK
        .put(updateBook)
    //REMOVE BOOK
        .delete(removeBook);
}

export default route;