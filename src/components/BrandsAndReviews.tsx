/**
 * -----------------------------------------------------
 * Brands & Reviews Section
 * -----------------------------------------------------
 * Client Approved Design
 * -----------------------------------------------------
 */

import { Star, ArrowRight } from "lucide-react";

import Container from "@/components/Container";
import { GOOGLE_REVIEW_LINK, brands, reviews } from "@/constants/constants";

import googleLogo from "@/assets/logos/google.svg";

const BrandsAndReviews = () => {
  return (
    <section className="scroll-mt-25 pb-5" id="reviews">
      <Container>
        <div className="rounded-[18px] border border-[#D9DDE8] bg-white p-3 lg:p-4">
          <div className="grid gap-8 xl:grid-cols-2">
            {/* ===================================== */}
            {/* Brands */}
            {/* ===================================== */}

            <div className="flex h-full flex-col justify-center">
              <h2 className="mb-8 text-[20px] font-bold text-[#111827]">Brands We Support</h2>

              <div className="grid min-h-75 grid-cols-4 content-center gap-x-6 gap-y-10">
                {brands.map((brand, index) => (
                  <div key={index} className="flex h-17.5 items-center justify-center">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      loading="lazy"
                      className={`${brand.className} w-auto object-contain`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ===================================== */}
            {/* Reviews */}
            {/* ===================================== */}

            <div className="border-t border-[#E5E7EB] pt-8 xl:border-t-0 xl:border-l xl:pl-8">
              <h2 className="mb-4 text-[20px] font-bold text-[#111827]">Google Reviews</h2>

              <div>
                {/* Rating Section */}
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <div className="text-[60px] leading-none font-bold text-[#111827]">5.0</div>

                    <div className="mt-3 flex gap-1">
                      {[...Array(5)].map((_, index) => (
                        <Star key={index} size={20} fill="#F4B400" color="#F4B400" />
                      ))}
                    </div>

                    <p className="mt-3 text-[14px] text-[#6B7280]">Based on 130+ Reviews</p>
                  </div>

                  <a
                    href={GOOGLE_REVIEW_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-[#5B47F7] px-5 py-3 text-[13px] font-medium text-white transition hover:bg-[#4C39E8]"
                  >
                    See All Reviews on Google
                    <ArrowRight size={16} />
                  </a>
                </div>

                {/* Divider */}
                <div className="my-6 border-t border-[#E5E7EB]" />

                {/* Review Cards */}
                <div className="grid gap-4 md:grid-cols-3">
                  {reviews.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-xl border border-[#E5E7EB] bg-[#FAFBFD] p-4 transition-all duration-300 hover:shadow-md"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="h-12 w-12 rounded-full object-cover"
                        />

                        <div>
                          <h3 className="text-[14px] font-semibold text-[#111827]">{item.name}</h3>

                          <p className="text-[12px] text-[#6B7280]">{item.time}</p>
                        </div>
                      </div>

                      <p className="mt-4 min-h-18 text-[13px] leading-6 text-[#4B5563]">
                        {item.review}
                      </p>

                      <img
                        src={googleLogo}
                        alt="Google"
                        loading="lazy"
                        className="mt-4 h-5 w-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BrandsAndReviews;
