import CertificationComponent from '@/components/common/certification'
import certificationData from "@/__mocks__/jsonData/certification.json"
import SectionTitle from '@/components/common/widget/section-title'
import React from 'react'

const Certification = () => {
  return (
    <section id="certification" className="section-gap">
        <div className="container mx-auto ">
            <SectionTitle title='Our Certifications'/>
            <div className="flex items-center justify-center">
                <div className='grid xl:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 w-[80%]'>
                    {certificationData.certification.map((certification:any, i:number) => {
                        return (
                                <CertificationComponent thumb={certification.thumb}/>
                            )
                        })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Certification