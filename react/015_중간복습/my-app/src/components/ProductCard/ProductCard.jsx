import React from 'react'
import ProductImage from '../ProductImages/ProductImage'
import ProductName from '../ProductName/ProductName'
import ProductPrice from '../ProductPrice/ProductPrice'
import './productCard.css';

export default function ProductCard({ productName, price, thumbnailImg }) {
    return (
      <>
      <p>card</p>
      <ProductImage thumbnailImg={thumbnailImg}/>
      <ProductName productName={productName}/>
      <ProductPrice price={price}/>
      </>
    )
  }
