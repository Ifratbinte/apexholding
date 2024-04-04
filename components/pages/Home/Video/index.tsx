'use client'
import YouTubeEmbed from '@/components/common/video'
import SectionTitle from '@/components/common/widget/section-title'
import React from 'react'
import blogData from "@/__mocks__/jsonData/blog.json"
import Slider from 'react-slick';

const VideoBlog = () => {
    var BlogSlider = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
        ]
      };
  return (
    <section id="blog" className="section-gap">
        <div className="container mx-auto ">
            <SectionTitle title='Video Gallery'/>
            <div className="px-6 xl:px-0">
                <Slider {...BlogSlider}>
                    {blogData.video.map((video:any, i:number) => {
                        return (
                                <YouTubeEmbed key={i} embedId={video.embedId}/>
                            )
                        })}
                </Slider>
            </div>
        </div>
    </section>
  )
}

export default VideoBlog