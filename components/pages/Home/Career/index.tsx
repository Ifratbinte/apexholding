import Button from '@/components/common/widget/button'
import Link from 'next/link'
import React from 'react'

const Career = () => {
  return (
    <section className='section-gap'>
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between p-12 rounded-lg w-full lg:w-[70%] mx-auto bg_gradient bg-banner" data-aos="fade-down" data-aos-duration="1000">
                <div className="md:w-3/5 lg:w-3/4">
                    <h3 className="text-3xl font-bold mb-2 text-green-600">Be with Us to Build your Career</h3>
                    <p className="text-slate-800 text-lg mb-0 pr-10">Our Strategy is to constantly strives and renews its commitment to meet the career aspiration and priorities of the employees. </p>
                </div>
                <div className="md:2/5 lg:w-1/4 flex justify-end">
                    <Button buttonText='Contact us' url='https://www.apexholdings.com/contact'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Career