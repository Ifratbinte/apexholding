'use client'
import React from 'react';
import Slider from 'react-slick';
import heroData from "@/__mocks__/jsonData/hero.json"
// import {HeroInterface} from "@/interface/index"

const HeroComponent = () => {
  const HeroSlider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const hero = heroData.hero.banner
  return (
    <div className='section-gap-b'>
      <Slider {...HeroSlider}>
        {hero.map((data: any, i:number ) => {
          return(
            <div className='relative'>
              <img src={data.banner_img} alt="Banner image" className='w-full h-[80vh]'/>
              <div className='absolute top-[50%] left-[40%] text-white text-3xl'>{data.content}</div>
            </div>
          )
        })}
      </Slider>
    </div>
  );
};

export default HeroComponent;
