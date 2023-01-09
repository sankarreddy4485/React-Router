import {useParams} from 'react'

const SingleProduct = () => {
    console.log(useParams)
    const productId =useParams();
  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct