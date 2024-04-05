import SectionTitle from '@/components/common/widget/section-title'
import React from 'react'
import galleryData from "@/__mocks__/jsonData/gallery.json"

const Gallery = () => {
  return (
    <section className="section-gap bg_gradient_teal">
    <div className="container mx-auto">
        <div data-aos="fade-left" data-aos-duration="700">
          <SectionTitle title='Gallery'/>
        </div>
        
        <div className="px-6 xl:px-0">
            <div className="grid lg:grid-cols-4 grid-cols-3 gap-8">
                {galleryData.gallery.map((gallery:any, i:number) => {
                    return(
                        <div className='border border-slate-300 p-4 relative group cursor-pointer' key={1} data-aos="zoom-in" data-aos-duration="700">
                            <img src={gallery.thumb} alt="" className=' h-full w-full opacity-100 group-hover:opacity-50 transition-opacity duration-300' />
                            <p className='opacity-0 absolute inset-0 flex items-center text-2xl bg-black/50 justify-center text-white group-hover:opacity-100'>{gallery.title}</p>
                            {/* <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50"></div> */}
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
</section>
  )
}

export default Gallery