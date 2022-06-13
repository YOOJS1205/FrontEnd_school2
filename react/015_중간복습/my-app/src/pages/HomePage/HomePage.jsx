import React from 'react'
import { data } from '../../asset/data/data';
import ProductCard from '../../components/ProductCard/ProductCard';
import './homePage.css';

export default function HomePage() {
  return (
    <>
        {data.map(item =>
            <ProductCard
            key={item.id}
            productName={item.productName}
            price={item.price}
            thumbnailImg={item.thumbnailImg}
            />
        )}
    </>
  )
}
