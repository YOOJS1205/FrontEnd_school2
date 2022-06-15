import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { data } from '../../asset/data/data'
import ProductCard from '../../components/ProductCard/ProductCard'
import './homePage.css'

export default function HomePage() {
  const [list, setList] = useState([]);

  // 데이터 불러오기 로딩 구현
  useEffect(() => {
    console.log('로딩중...');
    const getData = async () => {
      const result = await fetch('http://test.api.weniv.co.kr/mall');
      await result.json().then(data => {
        setList(data);
      })
    }
    const timer = () => setTimeout(getData, 3000);
    timer();
  }, [])

  const loadData = useContext(data);

  return (
    <main className="product">
        <ul className="product-list">
        {list.map(item => 
                <ProductCard
                    key={item.id} 
                    productName={item.productName}
                    price={item.price}
                    thumbnailImg={item.thumbnailImg}
                />
        )}
        </ul>
        <a className='link-btn cart-link' href='!#'>.</a>
    </main>
  )
}
