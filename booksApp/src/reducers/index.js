import { combineReducers } from 'redux';
import BooksReducer from './books'

const rootReducer = combineReducers({
    books: booksReducer
});

export default rootReducer;