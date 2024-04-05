'use client'
import SegmentsComponent from '@/components/common/segments';
import segmentsData from "@/__mocks__/jsonData/segments.json"
import React from 'react'
import SectionTitle from '@/components/common/widget/section-title';


const Segments = () => {
  return (
    <section className="section-gap bg-[#F9F9F9]">
        <div className="container mx-auto">
            <div data-aos="fade-right" data-aos-duration="700">
                <SectionTitle title={segmentsData.title} subtitle={segmentsData.subtitle} />
            </div>
            <div className='grid xl:grid-cols-4 sm:grid-cols-2 gap-6 segments px-6 lg:px-0'>
                {segmentsData.segments.map((segments: any, i: number) => {
                    return (
                        <div className="overflow-hidden">
                            <SegmentsComponent
                                index={i}
                                image={segments.icon}
                                title={segments.title}
                                content={segments.content}
                                url={segments.url}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
  )
}

export default Segments