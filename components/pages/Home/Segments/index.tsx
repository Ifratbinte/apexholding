'use client'
import SegmentsComponent from '@/components/common/segments';
import segmentsData from "@/__mocks__/jsonData/segments.json"
import React from 'react'
import SectionTitle from '@/components/common/widget/section-title';


const Segments = () => {
  return (
    <section id="segments" className="section-gap">
        <div className="container mx-auto ">
            <SectionTitle title='Our Business Segments'/>
            <div className='grid xl:grid-cols-4 sm:grid-cols-2 gap-6 segments'>
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