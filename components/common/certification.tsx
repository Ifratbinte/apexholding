import React from 'react'
import styles from "../pages//Home/Certification/certification.module.css"
interface CertificationComponentProps {
    thumb : string
}
const CertificationComponent:React.FC<CertificationComponentProps> = ({thumb}) => {
  return (
    <div className={`${styles.thumb_box} flex items-center justify-center bg-white shadow-base xl:shadow-none m-1.5 sm:m-2 xl:m-0 xl:bg-transparent`}>
        <img src={thumb} className="certification transition max-h-[150px] min-h-[150px] cursor-pointer p-8 xl:grayscale xl:hover:grayscale-0" alt="Web Logo ILO" />
    </div>
  )
}

export default CertificationComponent