import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import Container from "@/components/Container";
import logo from "@/assets/logos/logo.svg";
import { NAV_ITEMS, TEL_LINK, WHATSAPP_URL, PHONE } from "@/constants/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setScrolled((prev) => {
        if (!prev && y > 24) return true;
        if (prev && y < 16) return false;
        return prev;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-white/5 bg-[#000827]/70 shadow-sm backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-21 items-center">
          {/* Logo */}
          <div className="flex w-30 items-center sm:w-37.5 lg:w-70">
            <div className="rounded-md bg-white px-1.5 py-1 shadow-lg sm:px-2 lg:px-2.5">
              <img src={logo} alt="iTEK Computers" className="h-10.5 w-auto sm:h-13 lg:h-18" />
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden flex-1 items-center justify-center gap-8 xl:flex 2xl:gap-12">
            {NAV_ITEMS.map((item, index) => {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative text-[15px] font-semibold 2xl:text-[16px] ${
                    index === 0 ? "text-white" : "text-white hover:text-[#00B7FF]"
                  } transition-all duration-300 after:absolute after:-bottom-3 after:left-0 after:h-0.75 after:rounded-full after:bg-[#00B7FF] ${
                    index === 0 ? "after:w-full" : "after:w-0 hover:after:w-full"
                  } after:transition-all after:duration-300`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-3 xl:flex">
            {/* Phone */}
            <a
              href={TEL_LINK}
              className="flex items-center gap-2 rounded-full border border-[#00B7FF] px-5 py-2 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-[#00B7FF]/10"
            >
              <Phone size={15} />
              {PHONE}
            </a>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2 text-[14px] font-semibold text-white"
            >
              <FaWhatsapp size={20} className="text-white" />
              WhatsApp Us
            </a>
          </div>

          {/* Tablet & Mobile Actions */}
          <div className="ml-auto flex items-center gap-2 xl:hidden">
            <a
              href={TEL_LINK}
              aria-label="Call iTEK Computers"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#00B7FF] text-white"
            >
              <Phone size={18} />
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat with iTEK Computers on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-[#0062FF]"
            >
              <FaWhatsapp size={20} className="text-white" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile / Tablet Menu */}
      {isOpen && (
        <div id="mobile-navigation" className="border-t border-white/10 bg-[#000827] xl:hidden">
          <Container>
            <div className="flex flex-col py-4">
              {NAV_ITEMS.map((item, index) => {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`relative py-3 text-[16px] font-medium ${index === 0 ? "text-[#00B7FF]" : "text-white"}`}
                  >
                    {item.label}
                  </a>
                );
              })}

              <a
                href={TEL_LINK}
                className="mt-4 flex items-center justify-center gap-2 rounded-full border border-[#00B7FF] px-5 py-3 text-white"
              >
                <Phone size={18} />
                Call Now
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-white"
              >
                <FaWhatsapp size={20} className="text-white" />
                WhatsApp Us
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Navbar;
