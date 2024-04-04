import Button from '@/components/common/widget/button'
import React from 'react'

const About = () => {
  return (
    <section id='#about' className='section-gap'>
      <div className="container mx-auto">
          <div className="flex flex-col lg:justify-between lg:flex-row-reverse items-center xl:w-[90%] mx-auto px-6 lg:px-0">
            <div className="lg:w-5/12" data-aos="fade-up">
              <h6 className="text-green-600 text-lg font-semibold">Who We Are</h6>
              <h2 className="my-3 text-4xl font-normal">We are From <span className='font-extrabold'>Another Space to Automate </span>the World</h2>
              <p className='mb-8 tracking-wide leading-7'>Apex Holdings Limited (AHL) is a holding company for the management of a wide range of manufacturing and export-oriented enterprises, ranging from Frozen & Convenience Foods, Textiles & Apparels, Chemicals & Agro businesses. The company was formed and registered in Bangladesh in 1998. The sponsors of AHL had set up its first export-oriented manufacturing enterprise in 1980 and have ever since grown into a sizable group of companies. As the number of companies under the management increased, the need for a management company to facilitate coordination and to maintain control over the individual company became necessary.</p>
              <Button buttonText='More About Us' url='https://www.apexholdings.com/about'/>
            </div>
            <div className="lg:w-6/12 mt-10 lg:mt-0 flex justify-start relative">
                <img src="/images/gallery/gallery-5.jpg" alt="about" className='h-[550px] w-[450px]'/>
                <img src="/images/gallery/gallery-2.jpg" alt="about" className='absolute h-[250px] bottom-6 -right-32 lg:-right-12 xl:-right-6 2xl:right-20 hidden md:block'/>
            </div>
          </div>
      </div>
    </section>
  )
}

export default About