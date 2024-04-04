import React from 'react'
import styles from "./widget.module.css"

interface TitleProps{
    title: string
    subtitle?: string
}

const SectionTitle:React.FC<TitleProps> = ({title, subtitle}) => {
  return (
    <div className="relative mb-14 w-full md:w-[80%] lg:w-[70%] xl:w-1/2 mx-auto">
        {/* <div className={`${styles.section_border} text-4xl font-semibold text-center pb-5 mb-16`}>{title}</div> */}
        <div className="text-4xl font-semibold text-center mb-4">{title}</div>
        <p className='text-center px-10'>{subtitle}</p>
    </div>
  )
}

export default SectionTitle