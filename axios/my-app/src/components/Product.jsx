import React, { useEffect} from 'react';
import axios from 'axios';

export default function Product() {
    useEffect(() => {
        axios.get('http://test.api.weniv.co.kr/mall')
        // 바로 데이터가 나온다. 개꿀
            .then(res => {
                console.log('axios');
                console.log(res.data);
            })
            // .then()
        
            fetch('http://test.api.weniv.co.kr/mall')
            // .json()을 하면? => pending 상태의 promise 객체가 반환된다.
                .then(res => {
                    console.log('fetch');
                    // console.log(res);
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                })
    }, [])
  return (
    <div>Product</div>
  )
}
