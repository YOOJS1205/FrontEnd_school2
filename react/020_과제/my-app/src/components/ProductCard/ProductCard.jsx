import React, { useRef } from 'react';
import ProductImage from '../ProductImage/ProductImage'
import ProductName from '../ProductName/ProductName'
import ProductPrice from '../ProductPrice/ProductPrice'
import './productCard.css'

export default function ProductCard({productName, price, thumbnailImg}){
    const button = useRef();
    
    const handleOnClickHeart = e => {
        e.currentTarget.classList.toggle('on');
    }

    return (
        <li className="product-item">
            <div className="product-img">
                <ProductImage thumbnailImg={thumbnailImg} productName={productName}/>
            </div>
                <ProductName productName={productName}/>
            <button className='like-btn' ref={button} onClick={handleOnClickHeart}>
            </button>
            <div className="product-price">
                <ProductPrice price={price}/>
            </div>
        </li>
    )
}
