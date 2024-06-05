import React from 'react'

const BooksDetails = ({ image, price, heading, description }) => {
    return (
        <div className=' p-3 rounded-3 border-dark border shadow  d-flex flex-column gap-2 text-center'>
            <div>
                <img className='blimg' src={image} alt="" />
                <h3 className='blh1'>{heading}</h3>
                <p className=' m-0 p-0 blp1'>{description}</p>
                <p className='m-0 p-0 blprice'>{price}</p>
            </div>
        </div>
    )
}


export default BooksDetails