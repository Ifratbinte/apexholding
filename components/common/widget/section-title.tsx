import React from 'react'
import styles from "./widget.module.css"

interface TitleProps{
    title: string
}

const SectionTitle:React.FC<TitleProps> = ({title}) => {
  return (
    <div className="relative">
        <div className={`${styles.section_border} text-4xl font-semibold text-center pb-5 mb-16`}>{title}</div>
    </div>
  )
}

export default SectionTitle