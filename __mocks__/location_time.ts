import { FiClock, FiMapPin } from "react-icons/fi";
import { IconType } from "react-icons/lib";
export interface LocationTimeInterface {
  id: number;
  Icon: IconType;
  locationTime?: string;
}

const locationTime: LocationTimeInterface[] = [
  {
    id: 1,
    Icon: FiMapPin,
    locationTime: "18 Gulshan Avenue, Shanta Skymark, Gulshan, Dhaka--1212, Bangladesh",
  },
  {
    id: 1,
    Icon: FiClock,
    locationTime: "Sat-Thu 08:00AM - 4:30PM",
  },
];
export default locationTime;
