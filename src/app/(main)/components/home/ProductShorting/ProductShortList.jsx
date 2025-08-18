import React from 'react'
import ShortListItems from './ShortListItems'

const ProductShortList = () => {
  return (
      <div className='container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-10 px-2'>
          <ShortListItems/>
          <ShortListItems/>
          <ShortListItems/>
          <ShortListItems/>
    </div>
  )
}

export default ProductShortList