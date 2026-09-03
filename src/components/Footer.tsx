import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

import logo from "@/assets/logos/logo.svg";
import Container from "@/components/Container";
import { NAV_ITEMS, SERVICES, SOCIAL_URLS } from "@/constants/constants";

const Footer = () => {
  return (
    <footer className="bg-bg border-t border-white/10">
      <Container>
        <div className="py-5">
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-5">
            {/* ===================================== */}
            {/* Logo */}
            {/* ===================================== */}

            <div>
              <div className="mb-4 inline-flex rounded-xl bg-white p-3 shadow-md">
                <img
                  src={logo}
                  alt="iTEK Computers"
                  className="h-22.5 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* ===================================== */}
            {/* Quick Links */}
            {/* ===================================== */}

            <div className="pb-4">
              <h3 className="mb-3 text-[20px] font-semibold text-white">Quick Links</h3>

              <ul className="space-y-2 text-white/70">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:text-brand text-white/70 transition">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ===================================== */}
            {/* Services */}
            {/* ===================================== */}

            <div className="pb-4">
              <h3 className="mb-3 text-[20px] font-semibold text-white">Our Services</h3>

              <ul className="space-y-2 text-white/70">
                {SERVICES.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>

            {/* ===================================== */}
            {/* Support */}
            {/* ===================================== */}

            <div className="pb-4">
              <h3 className="mb-3 text-[20px] font-semibold text-white">Support</h3>

              <ul className="space-y-2 text-white/70">
                <li>Warranty</li>
                <li>Doorstep Service</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>

            {/* ===================================== */}
            {/* Social */}
            {/* ===================================== */}

            <div>
              <h3 className="mb-3 text-[20px] font-semibold text-white">Follow Us</h3>

              <div className="flex flex-wrap gap-3">
                <a
                  href={SOCIAL_URLS.facebook}
                  aria-label="Follow iTEK Computers on Facebook"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1877F2]"
                >
                  <FaFacebookF className="text-white" />
                </a>

                <a
                  href={SOCIAL_URLS.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Follow iTEK Computers on Instagram"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af]"
                >
                  <FaInstagram className="text-white" />
                </a>

                <a
                  href={SOCIAL_URLS.youtube}
                  aria-label="Follow iTEK Computers on YouTube"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FF0000]"
                >
                  <FaYoutube className="text-white" />
                </a>

                <a
                  href={SOCIAL_URLS.linkedin}
                  aria-label="Follow iTEK Computers on LinkedIn"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0A66C2]"
                >
                  <FaLinkedinIn className="text-white" />
                </a>

                <a
                  href={SOCIAL_URLS.x}
                  aria-label="Follow iTEK Computers on X Twitter"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1DA1F2]"
                >
                  <FaXTwitter className="text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* ===================================== */}
          {/* Copyright */}
          {/* ===================================== */}

          <div className="mt-6 border-t border-white/10 pt-6 text-center">
            <p className="text-[15px] text-white/60">© 2026 iTEK Computers. All Rights Reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
