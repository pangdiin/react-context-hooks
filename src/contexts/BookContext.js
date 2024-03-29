import React , { createContext, useReducer } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer( bookReducer, [
        { title: 'name of the wind', author: 'test name' , id: 1},
        { title: 'name of the sond', author: 'test name2', id: 2},
    ]);
    return (
        <BookContext.Provider value={{ books, dispatch }}>
            { props.children }
        </BookContext.Provider>
    );
}

export default BookContextProvider;