import React from 'react'
import styles from "../pages//Home/Certification/certification.module.css"
interface CertificationComponentProps {
    thumb : string
}
const CertificationComponent:React.FC<CertificationComponentProps> = ({thumb}) => {
  return (
    <div className={`${styles.thumb_box} flex items-center justify-center`}>
        <img src={thumb} className="certification transition max-h-[150px] min-h-[150px] cursor-pointer p-9 grayscale hover:grayscale-0" alt="Web Logo ILO" />
    </div>
  )
}

export default CertificationComponent