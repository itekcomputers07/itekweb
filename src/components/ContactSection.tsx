import { Phone, Mail, MapPin, Clock3 } from "lucide-react";

import Container from "@/components/Container";
import { MAP_URL } from "@/constants/constants";

import contactBanner from "@/assets/images/contact-banner.webp";

const ContactSection = () => {
  return (
    <section className="scroll-mt-25 pb-5" id="contact">
      <Container>
        <div className="rounded-[18px] border border-[#D9DDE8] bg-white p-6 lg:p-8">
          <div className="grid gap-0 xl:grid-cols-3">
            {/* ================================================= */}
            {/* Contact Info */}
            {/* ================================================= */}

            <div className="pr-0 xl:pr-8">
              <h2 className="mb-8 text-[22px] font-bold text-[#111827]">
                Let's Fix Your Device Today!
              </h2>

              <div className="space-y-7">
                <a
                  href="tel:+918148300494"
                  className="flex items-start gap-4 transition hover:text-[#2563EB]"
                >
                  <Phone size={24} className="mt-1 shrink-0 text-[#2563EB]" />

                  <div>
                    <p className="text-sm text-[#6B7280]">Phone</p>

                    <p className="text-[16px] font-medium text-[#111827]">+91 81483 00494</p>
                  </div>
                </a>

                <a
                  href="mailto:admin@itekcomputers.in"
                  className="flex items-start gap-4 transition hover:text-[#2563EB]"
                >
                  <Mail size={24} className="mt-1 shrink-0 text-[#2563EB]" />

                  <div>
                    <p className="text-sm text-[#6B7280]">Email</p>

                    <p className="text-[16px] font-medium text-[#111827]">admin@itekcomputers.in</p>
                  </div>
                </a>

                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open iTEK Computers location in Google Maps"
                  className="flex items-start gap-4 transition hover:text-[#2563EB]"
                >
                  <MapPin size={24} className="mt-1 shrink-0 text-[#2563EB]" />

                  <div>
                    <p className="text-sm text-[#6B7280]">Address</p>

                    <p className="text-[16px] leading-7 text-[#111827]">
                      10, Rajiv Gandhi Salai,
                      <br />
                      OMR Service Rd,
                      <br />
                      Kandhanchavadi, Perungudi,
                      <br />
                      Chennai, Tamil Nadu 600096
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <Clock3 size={24} className="mt-1 shrink-0 text-[#2563EB]" />

                  <div>
                    <p className="text-sm text-[#6B7280]">Working Hours</p>

                    <p className="text-[16px] leading-7 text-[#111827]">
                      Mon - Sat : 10:30 AM - 7:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* Why Choose */}
            {/* ================================================= */}

            <div className="mt-8 border-t border-[#E5E7EB] pt-8 xl:mt-0 xl:border-t-0 xl:border-l xl:px-8 xl:pt-0">
              <h2 className="mb-8 text-[22px] font-bold text-[#111827]">Why Choose iTEK?</h2>

              <div className="space-y-5">
                {[
                  "Same Day Service",
                  "Genuine Parts",
                  "Expert Technicians",
                  "Affordable Pricing",
                  "Warranty Support",
                  "Doorstep Service",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="text-lg font-bold text-[#2563EB]">✓</span>

                    <span className="text-[16px] text-[#4B5563]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Get directions to iTEK Computers on Google Maps"
                  className="inline-flex items-center rounded-md border border-[#2563EB] px-5 py-3 font-semibold text-[#2563EB] transition hover:bg-[#2563EB] hover:text-white"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* ================================================= */}
            {/* Image */}
            {/* ================================================= */}

            <div className="mt-8 border-t border-[#E5E7EB] pt-8 xl:mt-0 xl:border-t-0 xl:border-l xl:pl-8">
              <div className="h-full overflow-hidden">
                <img
                  src={contactBanner}
                  alt="Contact banner featuring iTEK Computers repair services"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
