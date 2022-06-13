import React from 'react';
import './productImages.css';

export default function ProductImage({ thumbnailImg }) {
    const imgUrl = 'http://test.api.weniv.co.kr/' + thumbnailImg;
    return <img src={imgUrl} alt=''></img>;
  }
