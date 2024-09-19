import { memo } from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const sidebarMenus = [
    {
      name: "Dashboard",
      link: "home",
    },
    {
      name: "Users",
      link: "users",
    },
    {
      name: "Brands",
      link: "brands",
    },
    {
      name: "Categories",
      link: "categories",
    },
    {
      name: "Products",
      link: "products",
    },
    {
      name: "Orders",
      link: "orders",
    },
    {
      name: "Reviews",
      link: "reviews",
    },
    {
      name: "Invoices",
      link: "invoices",
    },
    {
      name: "Settings",
      link: "settings",
    },
  ];
  return (
    <div className="w-full text-white flex flex-col items-center h-full">
      <div className="w-full h-full flex flex-col gap-3 p-3 pr-0">
        {sidebarMenus.map((menu) => (
          <NavLinks key={menu.name} to={menu.link}>
            {menu.name}
          </NavLinks>
        ))}
      </div>
    </div>
  );
};

const NavLinks: React.FC<{ to: string; children: React.ReactNode }> = ({
  to,
  children,
}) => {
  return (
    <NavLink
      className={({ isActive }) =>
        (isActive ? "bg-primary text-white " : "text-gray-900") +
        " font-semibold  rounded-l-md text-xl p-3"
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};
export default memo(SideBar);
