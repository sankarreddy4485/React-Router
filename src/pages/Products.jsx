import React from 'react'
import { Link } from 'react-router-dom';
import products from '../final/data';
const Products = () => {
    return (
        <section className="section">
            <div className='products'>
                { products.map((product)=>{
                    return(

                        <article className='article-p' key={product.id}>
                        <h2>{product.name}</h2>
                        <Link to={'/products/${product.id}'}>moreInfo</Link>
                        </article>
                    );
                        
                    
                }

                
                
                
                
                
                )
                
                
                
                }

            </div>

        </section>
    )
}

export default Products