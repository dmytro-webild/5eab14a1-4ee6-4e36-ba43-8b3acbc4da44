import FooterMinimal from '@/components/sections/footer/FooterMinimal';
import NavbarCentered from '@/components/ui/NavbarCentered';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
    { name: "Expertise", href: "#expertise" },
    { name: "Approach", href: "#approach" },
    { name: "Results", href: "#results" },
    { name: "Contact", href: "#contact" },
    { name: "Hero", href: "#hero" },
    { name: "Social", href: "#social" },
    { name: "Testimonials", href: "#testimonials" }
  ];

  return (
    <StyleProvider buttonVariant="stagger" siteBackground="gridDots" heroBackground="lightRaysCenter">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarCentered
          logo="Liberty West"
          ctaButton={{ text: "Consult Us", href: "#contact" }}
          navItems={navItems}
        />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterMinimal
          brand="Liberty West Prospects"
          copyright="© 2024 Liberty West Prospects. All rights reserved."
          socialLinks={[
            { icon: "Twitter", href: "#" },
            { icon: "Linkedin", href: "#" },
            { icon: "Instagram", href: "#" }
          ]}
        />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
