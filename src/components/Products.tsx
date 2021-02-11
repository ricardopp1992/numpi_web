import React, { FunctionComponent } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from '../assets/scss/_products.module.scss';

export interface IProductsProp {
  isMobile: boolean;
}

const Products: FunctionComponent<IProductsProp> = ({ isMobile }) => {
  const slideImages = Array.from({ length: 6 }, (_, i) => {
    return (
    <SwiperSlide className={styles.productItem} key={`slide-${i}`}>
      <img
        src={`https://picsum.photos/id/${i + 1}/500/300`}
        alt={`Slide ${i}`}
      />
      <p>hello {`${i}`}</p>
      <button className="button-blue">Ver Producto</button>
    </SwiperSlide>
    );
  });

  return (
    <div className={styles.productsBackground}>
      <h1>Productos</h1>
      <Swiper
        spaceBetween={40}
        slidesPerView={isMobile ? 1 : 3}
        className={styles.productsSlide}
        >
        {slideImages}
      </Swiper>
    </div >
  );
}

export default Products;
