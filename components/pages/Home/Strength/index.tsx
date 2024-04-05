'use client'
import React, { useState } from 'react'
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import SectionTitle from '@/components/common/widget/section-title';
import strengthCounter from "@/__mocks__/jsonData/strength.json"


const KeyStrength = () => {
const [count, setCount] = useState(false);
  return (
    <section className="section-gap bg_gradient">
        <div className="container mx-auto ">
            <div data-aos="fade-left" data-aos-duration="700">
                <SectionTitle title={strengthCounter.title} subtitle={strengthCounter.subtitle}/>
            </div>
            <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-6 px-6 lg:px-0'>
                {strengthCounter.counter.map((counter: any, i: number) => {
                return (
                    // <ScrollTrigger
                    //     onEnter={() => setCount(true)}
                    //     onExit={() => setCount(false)}
                    // >
                        <div className="gap-12 text-center cursor-pointer p-6 rounded-md shadow-base transition-all border bg-white border-transparent hover:border-[#42b7ca]" key={i}  data-aos="fade-down" data-aos-duration="1200">
                            <img
                                src={counter.icon}
                                alt="count"
                                className="mx-auto w-20 h-20 p-2"
                            />
                            <h4 className="text-4xl font-poppins font-semibold mb-3">
                                {/* {count && ( */}
                                    <CountUp
                                        start={0}
                                        end={counter.number}
                                        duration={2}
                                        delay={0}
                                    />
                                {/* )}  */}
                                +
                            </h4>
                            <p className="lg:text-lg text-base font-poppins">
                                {counter.content}
                            </p>
                        </div>
                    // </ScrollTrigger>
                    );
                })}
            </div>
        </div>
    </section>
  )
}

export default KeyStrength