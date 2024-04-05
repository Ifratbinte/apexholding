export interface NavInterface {
    id: number;
    title: string;
    path: string;
    submenu?: any;
  }
  
  const NavItems: NavInterface[] = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "About Us",
      path: "#",
    },
    {
      id: 3,
      title: "Our Businesses",
      path: "#",
    },
    {
      id: 4,
      title: "Sustainability",
      path: "#",
    },
    {
      id: 5,
      title: "CSR",
      path: "#",
    },
    {
      id: 6,
      title: "Career",
      path: "#",
    },
    {
      id: 7,
      title: "Contact",
      path: "#",
    },
  ];
  export default NavItems;
  