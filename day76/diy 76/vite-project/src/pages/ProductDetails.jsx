import React from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetails = () => {
    const params=useParams();
    console.log('params: ' ,params)
  return (
    <div>
        this is product details page {params.id}

    </div>
  )
}

