import React from 'react'
import './style.css'
import BookDetails from './BookDetails'
import { minidatabase } from './Minidatabase'
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