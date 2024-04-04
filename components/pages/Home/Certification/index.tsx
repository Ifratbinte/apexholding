import CertificationComponent from '@/components/common/certification'
import certificationData from "@/__mocks__/jsonData/certification.json"
import SectionTitle from '@/components/common/widget/section-title'
import React from 'react'

const Certification = () => {
  return (
    <section id="certification" className="section-gap">
        <div className="container mx-auto">
            <div data-aos="fade-right" data-aos-duration="700">
                <SectionTitle title={certificationData.title} subtitle={certificationData.subtitle}/>
            </div>
            
            <div className="flex items-center justify-center px-4 xl:px-0">
                <div className='grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 w-full xl:w-[90%]'>
                    {certificationData.certification.map((certification:any, i:number) => {
                        return (
                                <CertificationComponent key={i} thumb={certification.thumb}/>
                            )
                        })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Certification