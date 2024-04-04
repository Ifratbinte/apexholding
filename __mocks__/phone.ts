import { AiOutlinePhone } from "react-icons/ai";
import { IconType } from "react-icons/lib";
export interface PhoneInterface {
  id: number;
  Icon: IconType;
  phone: string;
}

const phone: PhoneInterface[] = [
  {
    id: 1,
    Icon: AiOutlinePhone,
    phone: "+880 9606669988",
  },
];
export default phone;
