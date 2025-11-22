import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { TbBell } from "react-icons/tb";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [institutionOpen, setInstitutionOpen] = useState(false);
  const [collegeOpen, setCollegeOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className={`container-fluid p-0 ${!isHome ? " nav_container" : ""}`}>
      <div className="navbar_section my-40">
        <div className="nav1 d-flex align-items-center">
          <div className="navbar_logo">
            <Link href="/">
              <Image src="/assets/logo.png" alt="" className="w-100 mainLogo h-100" width={1000} height={1000}/>
            </Link>
            <Link href="/">
              <Image
                src="/assets/mobile-view-logo.png"
                alt=""
                className=" d-none mobile-logo h-100"
                width={1000}
                height={1000}
              />
            </Link>
          </div>
        </div>
        <div className="nav2">
          <div className="bell_icon">
            <TbBell className="" />
          </div>
          <div className="news_scroll_sec">
            <div className="scroll-content">
              <Link href="/news" className="tag">🎓 Admission Open for 2025–26 – Apply now for B.Sc. Nursing, GNM & ANM programs</Link> 
              | <Link href="/news" className="tag">🧬 Workshop on Healthcare Innovations</Link> |
              <Link href="/news" className="tag">🏥 Campus Placements 2025 – Register Today!</Link> |
               <Link href="/news" className="tag">🎓 Admission Open for 2025–26 – Apply now for B.Sc. Nursing, GNM & ANM programs</Link> 
              | <Link href="/news" className="tag">🧬 Workshop on Healthcare Innovations</Link> |
              <Link href="/news" className="tag">🏥 Campus Placements 2025 – Register Today!</Link> |
            </div>
          </div>
          <div
            style={{
              background:
                "linear-gradient(90deg, rgba(255, 255, 255, 0) -57.89%, #FFFFFF 73.68%)",
            }}
          />
        </div>
        <div className="nav3 navbar_Social_links">
          <div className="">
            <Link href="tel:+917823006818">
              <IoCallOutline className="nav-icon" />
            </Link>
            <Link href="mailto:info@bhondekarss.com">
              <CiMail className="nav-icon" />
            </Link>
            <Link href="https://www.google.com/maps/place/Sahakar+Nagar,+Bhandara,+Maharashtra+441904/@21.1785209,79.6458981,17z/data=!3m1!4b1!4m10!1m2!2m1!1sSahakar+Nagar+Bank+Colony+Krishna+Chowk+Bhandara+Maharashtra+441904!3m6!1s0x3a2b3f4b4767432f:0xeaa0649fc3d8c1c1!8m2!3d21.1783908!4d79.6509123!15sCkNTYWhha2FyIE5hZ2FyIEJhbmsgQ29sb255IEtyaXNobmEgQ2hvd2sgQmhhbmRhcmEgTWFoYXJhc2h0cmEgNDQxOTA0kgEMc3VibG9jYWxpdHkxqgGnARABKjkiNWJhbmsgY29sb255IGtyaXNobmEgY2hvd2sgYmhhbmRhcmEgbWFoYXJhc2h0cmEgNDQxOTA0KAAyHxABIhu8oET4J_1OR4-2RIFCFnYWP909dTym97eW4-syRxACIkNzYWhha2FyIG5hZ2FyIGJhbmsgY29sb255IGtyaXNobmEgY2hvd2sgYmhhbmRhcmEgbWFoYXJhc2h0cmEgNDQxOTA04AEA!16s%2Fg%2F11h1qxnz9?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D" target="_blank">
              <IoLocationOutline className="nav-icon" />
            </Link>
          </div>
        </div>
        <div className="nav4">
          {/* Navbar Menu Section */}
          <div className="navbar_menu_wrapper ">
            <div className="navbar_menu d-none d-lg-flex d-flex">
              {/* <Link href="">About</Link> */}

              <div className="dropdown d-flex align-items-center">
                <button className="dropbtn  nav_drop_btn">
                  About <IoIosArrowDown className="ms-1" />
                </button>
                <div className="dropdown-content">
                  <Link
                    href="/about-us"
                    className="border-top-0 bg-transparent"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/leadership"
                    className="border-bottom-0 bg-transparent"
                  >
                    Our Leadership
                  </Link>
                </div>
              </div>

              {/* Our Institutions Dropdown */}
              <div className="dropdown d-flex align-items-center">
                <button className="dropbtn nav_drop_btn">
                  Our Institutions <IoIosArrowDown className="ms-1" />
                </button>
                <div className="dropdown-content">
                  <div className="dropdown-item ">
                    <div className="drop_btns d-flex justify-content-between align-items-center border-top-0 bg-transparent">
                      <span>Colleges</span>
                      <IoIosArrowForward />
                    </div>
                    <div className="dropdown-submenu">
                      <Link
                        href="/colleges/pooja-Nursing-college"
                        className="border-top-0 bg-transparent"
                      >
                        Pooja Nursing College
                      </Link>
                      <Link href="/colleges/bb-ayurvedic-college">
                        Bhagyashri Bhondekar Ayurvedic College
                      </Link>
                      {/* <Link href="/colleges/bb-physiotherapy-college">
                        Bhagyashri Bhondekar Physiotherapy
                      </Link> */}
                      <Link href="/colleges/bb-medical-college">
                        Bhagyashri Bhondekar Medical College
                      </Link>
                      {/* <Link href="/colleges/pes-multispeciality-hospital">
                        PES Multispeciality Hospital
                      </Link> */}
                      <Link href="/colleges/manju-bai-college">
                        Manjubai BA/MA College, Bhawani
                      </Link>
                      <Link href="/colleges/dr-babasaheb-aambedkar-niwasi-matimand-school">
                        Dr. Babasaheb Ambedkar Mosa Mahavidyalaya School
                      </Link>
                      <Link href="/colleges/universal-ba-college">
                        Universal BA College
                      </Link>
                      <Link href="/colleges/sant-gadge-baba-madhyamik-shala">
                        Sant Gadge Baba Madhyamik Shala
                      </Link>
                      <Link href="/colleges/swayamsevi-janmubai-madhyamik-shala">
                        Swayamsevi Janmubai Madhyamik Shala
                      </Link>
                      <Link
                        href="/colleges/swayamsevi-janmubai-bhondekar-college"
                        className="border-bottom-0 bg-transparent"
                      >
                        Swayamsevi Janmubai Bhondekar College
                      </Link>
                    </div>
                  </div>
                  <div className="dropdown-item ">
                    <div className="drop_btns d-flex justify-content-between align-items-center border-top-0 bg-transparent">
                      <span>Hospitals</span>
                      <IoIosArrowForward />
                    </div>
                    <div className="dropdown-submenu">
                      <Link href="/colleges/bb-physiotherapy-college">
                        Bhagyashri Bhondekar Physiotherapy
                      </Link>
                      <Link href="/colleges/pes-multispeciality-hospital">
                        PES Multispeciality Hospital
                      </Link>
                      
                    </div>
                  </div>
                  {/* <Link href="#">Hospitals</Link> */}

                  {/* <Link href="#">Research & Training Center</Link> */}
                  <Link
                    href="/specialStudents"
                    className="border-bottom-0 bg-transparent"
                  >
                    Specially Abled Support
                  </Link>
                </div>
              </div>
              <Link href="/admission">Admissions</Link>
              <Link href="/infrastructure-and-facilities">
                Infrastructure & Facilities
              </Link>
              <Link href="/career">Career</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/news">News & Events</Link>
              <Link href="/contact-us">Contact Us</Link>
            </div>

            {/* Hamburger for mobile only */}
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
        <div className="sidebar_header d-flex justify-content-between align-items-center">
          <Link href="/">
            <Image src="/assets/logo.png" alt="" className="w-100" width={1000} height={1000}/>
          </Link>
          <button
            className="border-0 bg-transparent"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={26} />
          </button>
        </div>

        {/* SIDEBAR SCROLLABLE AREA */}
        <div className="sidebar_scroll">
          {/* ABOUT DROPDOWN */}
          <div className="sidebar_item">
            <button
              className="sidebar_btn p-0"
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              About{" "}
              <IoIosArrowDown className={aboutOpen ? "rotate-icon" : ""} />
            </button>

            {aboutOpen && (
              <div className="sidebar_dropdown">
                <Link href="/about-us" onClick={() => setSidebarOpen(false)}>
                  About Us
                </Link>
                <Link href="/leadership" onClick={() => setSidebarOpen(false)}>
                  Our Leadership
                </Link>
              </div>
            )}
          </div>

          {/* OUR INSTITUTIONS DROPDOWN */}
          <div className="sidebar_item">
            <button
              className="sidebar_btn p-0"
              onClick={() => setInstitutionOpen(!institutionOpen)}
            >
              Our Institutions{" "}
              <IoIosArrowDown
                className={institutionOpen ? "rotate-icon" : ""}
              />
            </button>

            {institutionOpen && (
              <div className="sidebar_dropdown">
                {/* Colleges Submenu */}
                <button
                  className="sidebar_btn_sub pt-3 pb-0"
                  onClick={() => setCollegeOpen(!collegeOpen)}
                >
                  Colleges{" "}
                  <IoIosArrowForward
                    className={collegeOpen ? "rotate-icon" : ""}
                  />
                </button>

                {collegeOpen && (
                  <div className="sidebar_sub_dropdown">
                    <Link
                      href="/colleges/pooja-Nursing-college"
                      onClick={() => setSidebarOpen(false)}
                    >
                      Pooja Nursing College
                    </Link>
                    <Link href="/colleges/bb-ayurvedic-college" onClick={() => setSidebarOpen(false)}>
                      Bhagyashri Bhondekar Ayurvedic College
                    </Link>
                    <Link href="/colleges/bb-physiotherapy-college" onClick={() => setSidebarOpen(false)}>
                      Bhagyashri Bhondekar Physiotherapy
                    </Link>
                    <Link href="/colleges/bb-medical-college" onClick={() => setSidebarOpen(false)}>
                      Bhagyashri Bhondekar Medical College
                    </Link>
                    <Link href="/colleges/pes-multispeciality-hospital" onClick={() => setSidebarOpen(false)}>
                      PES Multispeciality Hospital
                    </Link>
                    <Link href="/colleges/manju-bai-college">
                      Manjubai BA/MA College, Bhawani
                    </Link>
                    <Link href="/colleges/dr-babasaheb-aambedkar-niwasi-matimand-school" onClick={() => setSidebarOpen(false)}>
                      Dr. Babasaheb Ambedkar Mosa Mahavidyalaya School
                    </Link>
                    <Link href="/colleges/universal-ba-college" onClick={() => setSidebarOpen(false)}>
                      Universal BA College
                    </Link>
                    <Link href="/colleges/sant-gadge-baba-madhyamik-shala" onClick={() => setSidebarOpen(false)}>
                      Sant Gadge Baba Madhyamik Shala
                    </Link>
                    <Link href="/colleges/swayamsevi-janmubai-madhyamik-shala" onClick={() => setSidebarOpen(false)}>
                      Swayamsevi Janmubai Madhyamik Shala
                    </Link>
                    <Link href="/colleges/swayamsevi-janmubai-bhondekar-college" onClick={() => setSidebarOpen(false)}>
                      Swayamsevi Janmubai Bhondekar College
                    </Link>
                  </div>
                )}

                <Link href="#" onClick={() => setSidebarOpen(false)}>Hospitals</Link>
                <Link href="#" onClick={() => setSidebarOpen(false)}>Research & Training Center</Link>
                <Link href="/specialStudents" onClick={() => setSidebarOpen(false)}>Specially Abled Support</Link>
              </div>
            )}
          </div>

          {/* REST OF LINKS */}
          <Link href="/admission" onClick={() => setSidebarOpen(false)}>Admissions</Link>
          <Link href="/infrastructure-and-facilities" onClick={() => setSidebarOpen(false)}>
            Infrastructure & Facilities
          </Link>
          <Link href="/career" onClick={() => setSidebarOpen(false)}>Career</Link>
          <Link href="/gallery" onClick={() => setSidebarOpen(false)}>Gallery</Link>
          <Link href="/news" onClick={() => setSidebarOpen(false)}>News & Events</Link>
          <Link href="/contact-us" onClick={() => setSidebarOpen(false)}>Contact Us</Link>
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
