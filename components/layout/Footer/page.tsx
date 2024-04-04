
'use client'
import React from 'react'
import footerData from "@/__mocks__/jsonData/footer.json"
import Link from 'next/link'
import Email from '@/components/common/widget/email'
import PhoneContact from '@/components/common/widget/phoneContact'
import CellContact from '@/components/common/widget/cellContact'
import locationTime from '@/__mocks__/location_time'
import socialIcon, { SocialIconInterface } from '@/__mocks__/social'

const Footer = () => {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <>
    {/* footer top */}
      <footer className="bg-gray-900 px-6 lg:px-0">
        <div className="container py-16 mx-auto">
          <div className="grid row-gap-10 lg:grid-cols-6">
            <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3">
              <div>
                <div className="font-medium text-xl tracking-wide text-gray-300 mb-3">{footerData.name}</div>
                <p className='text-gray-500 text-sm tracking-wider leading-6 transition-colors duration-300 hover:text-deep-purple-accent-200'>{footerData.description}</p>
              </div>
              <div className='ml-14'>
                <p className="font-medium tracking-wide text-gray-300 mb-3">
                  Quick Links
                </p>
                <ul className="space-y-2">
                  {footerData.quicks_links.map((links:any, i:number) => {
                    return (
                        <li key={i}>
                          <Link
                            href="#"
                            className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300 hover:text-deep-purple-accent-200"
                          >
                            {links.title}
                          </Link>
                        </li>
                    )
                  })}
                </ul>
              </div>
              <div>
                <p className="font-medium tracking-wide text-gray-300 mb-3">
                  Contact Us
                </p>
                <ul className="space-y-4">
                    <li>
                      <PhoneContact />
                    </li>
                    <li>
                      <Email />
                    </li>
                    <li>
                      <CellContact />
                    </li>
                </ul>
              </div>
            </div>
            <div className="md:max-w-md lg:col-span-2">
              <span className="text-base font-medium tracking-wide text-gray-300">
                Subscribe for updates
              </span>
              <form className="flex flex-col mt-4 md:flex-row">
                <input
                  placeholder="Email"
                  required
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-gray-600 border border-gray-800 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Subscribe
                </button>
              </form>
              <div className="text-gray-500 mt-8 space-y-3">
                  {locationTime.map((data:any, i:number) => {
                    return (
                      <div className='flex' key={i}>
                        <span>{data.Icon ? <data.Icon className="w-5 h-5 me-2" /> : null}</span>
                        <span className='text-sm mr-14 tracking-wider leading-6'>{data.locationTime}</span>
                      </div> 
                    )
                  })}
                </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer bottom */}
      <footer className="bg-gray-900 border-t border-gray-800 ">
        <div className="container mx-auto py-4 flex flex-col justify-between sm:flex-row">
          <p className="text-sm text-gray-500 tracking-wider">
            © Copyright &copy;{getCurrentYear()} <span className='text-teal-300'>Apex Holding Ltd</span>. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            {socialIcon.map((icon:any, i:number)=> {
              return (
                <Link href={icon.url} key={i} className='text-gray-500 text-2xl'><icon.Icon/></Link>
              )
            })}
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer


