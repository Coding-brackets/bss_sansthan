"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiMail } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { TbBell } from "react-icons/tb";
import { usePathname } from "next/navigation";

/* ------------------------------------------------------------------
   DYNAMIC NAVIGATION DATA (ONLY EDIT THIS PART)
-------------------------------------------------------------------*/

// Desktop Navigation Menu
const navItems = [
  {
    title: "About",
    submenu: [
      { label: "About Us", href: "/about-us" },
      { label: "Our Leadership", href: "/leadership" },
    ],
  },
  {
    title: "Our Institutions",
    submenu: [
      {
        label: "Colleges",
        children: [
          {
            label: "Pooja Nursing College",
            href: "/colleges/pooja-Nursing-college",
          },
          {
            label: "BB Ayurvedic College",
            href: "/colleges/bb-ayurvedic-college",
          },
          { label: "BB Medical College", href: "/colleges/bb-medical-college" },
          {
            label: "Manjubai BA/MA College",
            href: "/colleges/manju-bai-college",
          },
          {
            label: "Ambedkar Niwasi School",
            href: "/colleges/dr-babasaheb-aambedkar-niwasi-matimand-school",
          },
          {
            label: "Universal BA College",
            href: "/colleges/universal-ba-college",
          },
          {
            label: "Sant Gadge Baba School",
            href: "/colleges/sant-gadge-baba-madhyamik-shala",
          },
          {
            label: "Janmubai Madhyamik Shala",
            href: "/colleges/swayamsevi-janmubai-madhyamik-shala",
          },
          {
            label: "Janmubai Bhondekar College",
            href: "/colleges/swayamsevi-janmubai-bhondekar-college",
          },
        ],
      },
      {
        label: "Hospitals",
        children: [
          {
            label: "BB Physiotherapy",
            href: "/colleges/bb-physiotherapy-college",
          },
          {
            label: "PES Multispeciality Hospital",
            href: "/colleges/pes-multispeciality-hospital",
          },
        ],
      },
      { label: "Specially Abled Support", href: "/specialStudents" },
    ],
  },
  { title: "Admissions", href: "/admission" },
  {
    title: "Infrastructure & Facilities",
    href: "/infrastructure-and-facilities",
  },
  { title: "Career", href: "/career" },
  { title: "Gallery", href: "/gallery" },
  { title: "News & Events", href: "/news" },
  { title: "Contact Us", href: "/contact-us" },
];

// Mobile Sidebar Items (same data simplified)
const sidebarItems = navItems;

/* ------------------------------------------------------------------
   NAVBAR COMPONENT
-------------------------------------------------------------------*/

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const pathname = usePathname();
  const isHome = pathname === "/";

  const toggleDropdown = (key) => {
    setOpenDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className={`nav-banner ${isScrolled ? "nav-shadow" : ""} container-fluid p-0 ${
    !isHome ? " nav_container" : ""
  }`}>
      <div className="navbar_section my-40">
        {/* Logo Section */}
        <div className="nav1 d-flex align-items-center">
          <div className="navbar_logo mx-1">
            <Link href="/">
              <Image
                src="/assets/logo.png"
                alt="logo"
                width={1000}
                height={1000}
                className="mainLogo w-100 h-100"
              />
            </Link>
            <Link href="/">
              <Image
                src="/assets/mobile-view-logo.png"
                alt="logo-mobile"
                width={1000}
                height={1000}
                className="mobile-logo d-none h-100"
              />
            </Link>
          </div>
        </div>

        {/* News Section */}
        <div className="nav2">
          <div className="bell_icon">
            <TbBell />
          </div>
          <div className="news_scroll_sec">
            <div className="scroll-content">
              <Link href="/news" className="tag">
                🎓 Admission Open for 2025–26 – Apply now for B.Sc. Nursing, GNM
                & ANM programs
              </Link>
              |
              <Link href="/news" className="tag">
                🧬 Workshop on Healthcare Innovations
              </Link>
              |
              <Link href="/news" className="tag">
                🏥 Campus Placements 2025 – Register Today!
              </Link>
              |
              <Link href="/news" className="tag">
                🎓 Admission Open for 2025–26 – Apply now for B.Sc. Nursing, GNM
                & ANM programs
              </Link>
              |
              <Link href="/news" className="tag">
                🧬 Workshop on Healthcare Innovations
              </Link>
              |
              <Link href="/news" className="tag">
                🏥 Campus Placements 2025 – Register Today!
              </Link>
              |
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="nav3 navbar_Social_links">
          <Link href="tel:+917823006818">
            <IoCallOutline className="nav-icon" />
          </Link>
          <Link href="mailto:info@bhondekarss.com">
            <CiMail className="nav-icon" />
          </Link>
          <Link href="https://www.google.com/maps/place/Pes+Hospital+And+Research+Centre/@21.179175,79.651557,18z/data=!4m6!3m5!1s0x3a2b3fb962971951:0xa648f8fc0e407ba6!8m2!3d21.179711!4d79.6516375!16s%2Fg%2F11j1k0gzpr?hl=en&entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D" target="_blank">
            <IoLocationOutline className="nav-icon" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="nav4">
          <div className="navbar_menu_wrapper">
            <div className="navbar_menu d-none d-lg-flex">
              {navItems.map((item, index) =>
                item.submenu ? (
                  <div className="dropdown" key={index}>
                    <button className="dropbtn nav_drop_btn">
                      {item.title} <IoIosArrowDown />
                    </button>

                    <div className="dropdown-content">
                      {item.submenu.map((sub, i) =>
                        sub.children ? (
                          <div className="dropdown-item" key={i}>
                            <div className="drop_btns d-flex justify-content-between align-items-center">
                              <span>{sub.label}</span>
                              <IoIosArrowForward />
                            </div>
                            <div className="dropdown-submenu">
                              {sub.children.map((child, j) => (
                                <Link key={j} href={child.href}>
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link key={i} href={sub.href}>
                            {sub.label}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                ) : (
                  <Link key={index} href={item.href}>
                    {item.title}
                  </Link>
                )
              )}
            </div>

            {/* Mobile Hamburger Button */}
            {/* <button className="menu-toggle d-lg-none" onClick={() => setSidebarOpen(true)}>
              <Menu size={28} />
            </button> */}
            <button
              className="menu-toggle d-lg-none border-0 bg-transparent p-2"
              onClick={() => setSidebarOpen(true)}
            >
              
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      <div className={`mobile_sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar_header d-flex justify-content-between">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              width={1000}
              height={1000}
              alt="logo"
              className="w-100 h-100"
            />
          </Link>
          <button
            className="border-0 bg-transparent"
            onClick={() => setSidebarOpen(false)}
          >
            
            <X size={26} />
          </button>
        </div>

        <div className="sidebar_scroll">
          {sidebarItems.map((item, index) =>
            item.submenu ? (
              <div key={index} className="sidebar_item">
                <button
                  className="sidebar_btn"
                  onClick={() => toggleDropdown(item.title)}
                >
                  {item.title}
                  <IoIosArrowDown
                    className={openDropdowns[item.title] ? "rotate-icon" : ""}
                  />
                </button>

                {openDropdowns[item.title] && (
                  <div className="sidebar_dropdown">
                    {item.submenu.map((sub, i) =>
                      sub.children ? (
                        <div key={i}>
                          <button
                            className="sidebar_btn_sub"
                            onClick={() => toggleDropdown(sub.label)}
                          >
                            {sub.label}
                            <IoIosArrowForward
                              className={
                                openDropdowns[sub.label] ? "rotate-icon" : ""
                              }
                            />
                          </button>

                          {openDropdowns[sub.label] && (
                            <div className="sidebar_sub_dropdown">
                              {sub.children.map((child, j) => (
                                <Link
                                  key={j}
                                  href={child.href}
                                  onClick={() => setSidebarOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          key={i}
                          href={sub.href}
                          onClick={() => setSidebarOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={index}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
              >
                {item.title}
              </Link>
            )
          )}
        </div>
      </div>

      {sidebarOpen && (
        <div
          className="sidebar_overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
