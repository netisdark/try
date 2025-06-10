import styles from './MenuNav.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function MenuNav(){

    const menuCategory = [
        'All',
        'Coffee',
        'Tea',
        'Cold Drinks',
        'Pastries',
        'Sandwiches',
        'Salads',
        'Breakfast',
        'Desserts',
        'Smoothies',
        'Specials'
      ];
      
    return (
        <div className={styles.menuNav}>
            <Swiper style={{padding:'1vh'}}
                    spaceBetween={10}
                    slidesPerView={'auto'}
                    >
                    {
                        menuCategory.map((item,i)=>{
                           return  <SwiperSlide key={i} className={styles.menuCatg}>{item}</SwiperSlide>
                        })
                    }
            </Swiper>
        </div>
    )
}