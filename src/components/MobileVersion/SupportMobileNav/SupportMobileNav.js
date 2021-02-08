import React from "react";
import "./SupportMobileNav.sass";
import { NavLink } from "react-router-dom";

const links = [
  {
    title: "REAL BUY",
    path: "/customer-support/common",
  },
  {
    title: "투자 상품",
    path: "/customer-support/common",
  },
  {
    title: "투자 구조",
    path: "/customer-support/common",
  },
  {
    title: "투자 방법",
    path: "/customer-support/common",
  },
  {
    title: "회원 정보",
    path: "/customer-support/common",
  },
  {
    title: "기타",
    path: "/customer-support/common",
  },
];

const SupportMobileNav = () => {
  return (
    <div className="mobile-nav">
      <div className="mobile-nav__links">
        {links.map((link) => {
          return (
            <NavLink
              to={link.path}
              key={link.title}
              activeClassName="mobile-nav__link-active"
              className="mobile-nav__link"
            >
              {link.title}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default SupportMobileNav;
