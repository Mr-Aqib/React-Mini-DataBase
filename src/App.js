import React from 'react'
import './style.css'
import BookDetails from './BookDetails'
const minidatabase = [
  {
    id: 1,
    Image:"https://m.media-amazon.com/images/I/71jq9dBSp3L._AC_SY450_.jpg",
    Heading: 'Book1',
    Description: 'This Is book1',
    price:2000
  },
  {
    id: 2,
    Image:"https://m.media-amazon.com/images/I/71jq9dBSp3L._AC_SY450_.jpg",
    Heading: 'Book2',
    Description: 'This Is book2',
    price:3000
  }
]
const App = () => {
  return (
    <div className='p-3 Container holder gap-2'>
      {minidatabase.map((items, index) =>
      {
        return (
          <><BookDetails image={items.Image} price={items.price} description={items.Description} heading={items.Heading} />
            
          </>
        )
      })}
        </div>
  )
}



export default App