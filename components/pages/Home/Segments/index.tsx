'use client'
import Segments from '@/components/common/segments';
import segmentsData from "@/__mocks__/jsonData/segments.json"
import React from 'react'
import SectionTitle from '@/components/common/widget/section-title';


const Service = () => {
  return (
    <section id="service" className="section-gap">
        <div className="container mx-auto ">
            <SectionTitle title='Our Business Segments'/>
            <div className='grid xl:grid-cols-4 sm:grid-cols-2 gap-6 service'>
                {segmentsData.segments.map((segments: any, i: number) => {
                    return (
                        <div className="overflow-hidden">
                        <Segments
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

export default Service