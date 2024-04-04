'use client'
import "./globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import AOS_ANIMATE from "./Animate_AOS";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MasterLayout from "@/containers/MasterLayout";
import { useEffect } from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout: React.FC<Props> = ({ children }) => {

  useEffect(() => {
    AOS.init(AOS_ANIMATE);
  }, []);

  return (
    <html lang="en">
      <body>
        <MasterLayout>{children}</MasterLayout>
      </body>
    </html>
  );
};

export default Layout;
