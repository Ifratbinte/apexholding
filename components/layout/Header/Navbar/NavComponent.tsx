import navItems, { NavInterface } from "./MenuItems";
import NavItem from "./NavItem";

const Nav = () => {
  console.log({ navItems });

  return (
    <>
      <ul className="menu flex lg:items-center items-start lg:flex-row flex-col lg:ml-10">
        {navItems &&
          navItems.map((item: NavInterface, index: number) => {
            return (
              <NavItem
                key={index}
                title={item.title}
                path={item.path}
                items={item.submenu || []}
              />
            );
          })}
      </ul>
    </>
  );
};

export default Nav;
