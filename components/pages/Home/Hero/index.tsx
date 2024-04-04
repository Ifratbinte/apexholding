'use client'
import React from 'react';
import Slider from 'react-slick';
import heroData from "@/__mocks__/jsonData/hero.json"
import Button from '@/components/common/widget/button';
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
      <div className='hero_shape_rotate relative overflow-hidden'></div>
      <div className="container mx-auto">
          <Slider {...HeroSlider}>
            {hero.map((data: any, i:number ) => {
              return(
                <>
                    <div className="flex items-center justify-between lg:w-[80%] mx-auto my-20">
                        <div className="lg:w-5/12">
                        <span className="bg-green-100 text-green-800 text-[13px] font-bold me-2 px-2.5 py-0.5 rounded">Key of Apex</span>
                            <h2 className="my-3 text-4xl font-medium">{data.banner_title} <span className='animate-text font-bold'>{data.keyword}</span></h2>
                            <p className='mb-8 tracking-wide leading-7'>{data.content}</p>
                            <Button buttonText='Explore More' url={data.url}/>
                        </div>
                        <div className="lg:w-6/12 mt-10 lg:mt-0 flex justify-end ">
                            <img src={data.banner_img} alt="about" className='h-[550px] w-[550px] rounded-full'/>
                        </div>
                    </div>
                </>
              )
            })}
          </Slider>
      </div>
    </div>
  );
};

export default HeroComponent;
