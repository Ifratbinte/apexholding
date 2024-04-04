import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
import { IconType } from "react-icons/lib";

export interface SocialIconInterface {
  id: number;
  Icon: IconType;
  url: string;
}

const socialIcon: SocialIconInterface[] = [
{
    id: 1,
    Icon: BsTwitter,
    url: "#",
},
  {
    id: 2,
    Icon: FaSquareFacebook,
    url: "#",
  },
  {
    id: 3,
    Icon: BsLinkedin,
    url: "#",
  }
];
export default socialIcon;
