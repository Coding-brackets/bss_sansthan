import SubPagesHero from '@/components/commonComponents/SubPagesHero'
import React, { useState } from 'react'
import Link from 'next/link' // Agar aap Next.js use kar rahe hain
import { 
  Info, Building2, GraduationCap, Briefcase, Mail, 
  ChevronRight, School, Hospital, LayoutGrid, HeartPulse
} from 'lucide-react'

const Sitemap = () => {
  // Filter state for Institutions
  const [filter, setFilter] = useState('all');

  // Institution Data with provided paths
  const institutionsData = {
    schools: [
      { label: "Dr. Babasaheb Ambedkar MR School", href: "/colleges/dr-babasaheb-ambedkar-mr-school" },
      { label: "Late Jamunabai Bhondekar MR School Umri", href: "/colleges/late-jamunabai-bhondekar-mr-school" },
      { label: "Sant Gadgebaba MR School Nerla", href: "/colleges/sant-gadgebaba-mr-school" },
    ],
    colleges: [
      { label: "Pooja Nursing College", href: "/colleges/pooja-nursing-college" },
      { label: "Bhojrajji Bhondekar Physiotherapy Mahavidyalaya", href: "/colleges/bhojrajji-bhondekar-physiotherapy-mahavidyalaya" },
      { label: "Bhojrajji Bhondekar Medical College (Proposed)", href: "/colleges/bhojrajji-bhondekar-medical-college" },
      { label: "Bhojraj Bhondekar Ayurvedic Mahavidyalaya", href: "/colleges/bhojrajji-bhondekar-ayurvedic-mahavidyalaya" },
      { label: "Manjulabai Bhondekar Mahavidyalaya", href: "/colleges/manjulabai-bhondekar-mahavidyalaya" },
      { label: "Late Jamunabai Bhondekar Mahavidyalaya Navegaon", href: "/colleges/late-jamunabai-bhondekar-mahavidyalaya" },
      { label: "Universal BA Mahavidyalaya Nerla", href: "/colleges/universal-ba-mahavidyalaya" },
    ],
    hospitals: [
      { label: "PES Ayurvedic Rugnalay", href: "/colleges/pes-ayurvedic-rugnalay" },
      { label: "PES Multi-speciality Hospital and Research Centre", href: "/colleges/pes-multispeciality-hospital-and-research-centre" },
    ]
  };

  return (
    <div className="sitemap-page">
      <style dangerouslySetInnerHTML={{ __html: `
        .sitemap-page { background-color: #f0f7ff; min-height: 100vh; font-family: 'Inter', sans-serif; }
        .custom-card {
            background: #ffffff; border-radius: 24px; padding: 30px;
            border: 1px solid #D2EDFF; height: 100%; transition: all 0.3s ease;
            box-shadow: 0 10px 25px rgba(10, 38, 86, 0.05);
        }
        .icon-box {
            width: 48px; height: 48px; border-radius: 12px;
            display: flex; align-items: center; justify-content: center; margin-bottom: 20px;
        }
        .bg-navy { background-color: #0A2656; color: white; }
        .bg-light-blue { background-color: #D2EDFF; color: #0A2656; }
        .bg-coral { background-color: #FF7765; color: white; }

        .filter-container { display: flex; gap: 8px; margin-bottom: 25px; flex-wrap: wrap; }
        .filter-btn {
            padding: 8px 16px; border-radius: 50px; border: 1px solid #D2EDFF;
            background: white; color: #4a5568; font-size: 13px; font-weight: 600;
            transition: 0.2s; cursor: pointer; display: flex; align-items: center; gap: 6px;
        }
        .filter-btn:hover { border-color: #FF7765; color: #FF7765; }
        .filter-btn.active { background: #0A2656; color: white; border-color: #0A2656; }

        .nav-item-link {
            display: flex; justify-content: space-between; align-items: center;
            padding: 12px 16px; background: #f8fbff; border-radius: 12px;
            color: #4a5568; text-decoration: none; font-size: 14px;
            margin-bottom: 8px; transition: 0.2s; border: 1px solid transparent;
        }
        .nav-item-link:hover { background: #0A2656 !important; color: white !important; padding-left: 22px; }
        .nav-item-link svg { color: #FF7765; transition: 0.2s; }
        .nav-item-link:hover svg { color: white; }

        .category-label {
            font-size: 11px; font-weight: 800; text-transform: uppercase;
            letter-spacing: 1px; color: #FF7765; margin-bottom: 12px;
            display: block; margin-top: 20px;
        }
        .sitemap-content-wrapper { margin-top: -60px; position: relative; z-index: 5; }
      ` }} />

      <SubPagesHero 
        heading="Sitemap"
        description="An overview of our institution and its branches dedicated to education, healthcare, and service"
        bgImage="/assets/heroImages/hero-background.webp"
      />

      <div className="container sitemap-content-wrapper pb-5">
        <div className="row g-4">
          
          {/* LEFT: Institutions Card */}
          <div className="col-lg-8">
            <div className="custom-card shadow-lg">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="icon-box bg-navy mb-0"><Building2 size={24} /></div>
                <h2 className="m-0 fw-bold" style={{color: '#0A2656'}}>Our Institutions</h2>
              </div>

              {/* Interactive Filters */}
              <div className="filter-container">
                <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
                  <LayoutGrid size={14}/> All
                </button>
                <button className={`filter-btn ${filter === 'college' ? 'active' : ''}`} onClick={() => setFilter('college')}>
                  <GraduationCap size={14}/> Colleges
                </button>
                <button className={`filter-btn ${filter === 'school' ? 'active' : ''}`} onClick={() => setFilter('school')}>
                  <School size={14}/> Schools
                </button>
                <button className={`filter-btn ${filter === 'hospital' ? 'active' : ''}`} onClick={() => setFilter('hospital')}>
                  <Hospital size={14}/> Hospitals
                </button>
                <button className={`filter-btn ${filter === 'combo' ? 'active' : ''}`} onClick={() => setFilter('combo')}>
                  Combo: Colleges & Schools
                </button>
              </div>

              <div className="row">
                {/* College List */}
                {(filter === 'all' || filter === 'college' || filter === 'combo') && (
                  <div className={filter === 'college' ? "col-12" : "col-md-6"}>
                    <span className="category-label">Colleges</span>
                    {institutionsData.colleges.map((item, i) => (
                      <a key={i} href={item.href} className="nav-item-link">{item.label} <ChevronRight size={14} /></a>
                    ))}
                  </div>
                )}

                {/* School List */}
                {(filter === 'all' || filter === 'school' || filter === 'combo') && (
                  <div className={filter === 'school' ? "col-12" : "col-md-6"}>
                    <span className="category-label">Schools</span>
                    {institutionsData.schools.map((item, i) => (
                      <a key={i} href={item.href} className="nav-item-link">{item.label} <ChevronRight size={14} /></a>
                    ))}
                  </div>
                )}

                {/* Hospital List */}
                {(filter === 'all' || filter === 'hospital') && (
                  <div className="col-12">
                    <span className="category-label">Hospitals</span>
                    {institutionsData.hospitals.map((item, i) => (
                      <a key={i} href={item.href} className="nav-item-link">{item.label} <ChevronRight size={14} /></a>
                    ))}
                  </div>
                )}

                {/* Main Links provided in Institutions area */}
                <div className="col-12">
                   <span className="category-label">Additional Support</span>
                   <a href="/special-students" className="nav-item-link">Specially Abled Support <ChevronRight size={14} /></a>
                   <a href="/socity" className="nav-item-link">Our Institute / Society <ChevronRight size={14} /></a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Quick Links & Contact Stack */}
          <div className="col-lg-4">
            <div className="d-flex flex-column gap-4">
              
              {/* Quick Links Card */}
              <div className="custom-card">
                <div className="icon-box bg-light-blue"><Info size={24} /></div>
                <h2 className="m-0 fw-bold mb-4" style={{color: '#0A2656'}}>Quick Links</h2>
                
                <span className="category-label">Organization</span>
                <a href="/about-us" className="nav-item-link">About Us <ChevronRight size={14} /></a>
                <a href="/leadership" className="nav-item-link">Our Leadership <ChevronRight size={14} /></a>
                <a href="/gallery" className="nav-item-link">Gallery <ChevronRight size={14} /></a>
                
                <span className="category-label">Engagement</span>
                <a href="/news" className="nav-item-link">News & Events <ChevronRight size={14} /></a>
                <a href="/career" className="nav-item-link">Career <ChevronRight size={14} /></a>
              </div>

              {/* Get in Touch Card */}
              <div className="custom-card border-bottom border-coral border-4 shadow-sm">
                <div className="icon-box bg-coral"><Mail size={24} /></div>
                <h2 className="m-0 fw-bold mb-3" style={{color: '#0A2656'}}>Contact & Admission</h2>
                <p className="text-muted small mb-4">Admission open for 2025-26. Explore our facilities.</p>
                <a href="/admission" className="nav-item-link">Admissions <ChevronRight size={14} /></a>
                <a href="/infrastructure-and-facilities" className="nav-item-link">Infrastructure & Facilities <ChevronRight size={14} /></a>
                <a href="/contact-us" className="nav-item-link">Contact Us <ChevronRight size={14} /></a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Sitemap;