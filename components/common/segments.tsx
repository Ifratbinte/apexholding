
import React from "react";
import styles from "../pages/Home/Segments/segments.module.css"
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
interface SegmentsProps {
  image?: string;
  title: string;
  content: string;
  index: number;
  url: string
}

const Services: React.FC<SegmentsProps> = ({ index, image, title, content , url}) => {
  return (
    <div className={`${index % 2 === 0 ? "bg-gradient-to-r from-[#cbedee] to-[#f3f2f3] " : "bg-gradient-to-r from-[#f8f8f1] to-[#eff3c7] "} ${styles.segments_inner} relative min-h-[300px] max-h-[300px] rounded-2 p-5`}>
      <div className="absolute">
        <div className="segments-icon w-[80px] h-[80px">
          <img src={image} alt="" className="rounded-circle p-3 mb-3 h-16 w-16" />
        </div>
        <div className="px-4 min-h-[140px]">
          <h5 className="text-xl font-semibold mb-3">{title}</h5>
          <p className="text-base">{content}</p>
        </div>
        <Link href={url} className="text-blue-600 font-medium flex items-center gap-2 mt-3 pl-4">Read More <FaLongArrowAltRight/></Link>
      </div>
    </div>
  );
};

export default Services;
