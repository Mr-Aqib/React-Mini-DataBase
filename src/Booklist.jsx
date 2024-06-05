import React from 'react'
import Booksitems from './Booksitems'

const Booklist = () => {
    return (
        <div className='p-3 Container holder gap-2'>
            <Booksitems />
            <Booksitems />
            <Booksitems />

        </div>
    )
}

export default Booklist