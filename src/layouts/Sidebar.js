import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-clipboard-data",
  },
  {
    title: "ICO Token Sale",
    href: "/icotokensale",
    icon: "bi bi-coin",
  },
  {
    title: "Buy Tokens",
    href: "/badges",
    icon: "bi bi-patch-check",
  },
  {
    title: "Withdrawal",
    href: "/buttons",
    icon: "bi bi-hdd-stack",
  },
  {
    title: "Transactions",
    href: "/cards",
    icon: "bi bi-card-text",
  },
  {
    title: "My Referals",
    href: "/grid",
    icon: "bi bi-columns",
  },
  {
    title: "Help Desk",
    href: "/table",
    icon: "bi bi-layout-split",
  },
  {
    title: "Terms",
    href: "/forms",
    icon: "bi bi-textarea-resize",
  },
  {
    title: "Admin",
    href: "/breadcrumbs",
    icon: "bi bi-person-bounding-box",
  },
  {
    title: "Log Out",
    href: "/about",
    icon: "bi bi-box-arrow-right",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
