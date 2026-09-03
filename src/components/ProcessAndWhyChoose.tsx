/**
 * -----------------------------------------------------
 * Repair Process + Why Choose Us
 * -----------------------------------------------------
 * Client approved design.
 * -----------------------------------------------------
 */

import { ChevronRight } from "lucide-react";

import Container from "@/components/Container";
import { processSteps, benefits } from "@/constants/constants";

const ProcessAndWhyChoose = () => {
  return (
    <section className="scroll-mt-25 pb-5" id="about">
      <Container>
        <div className="rounded-[18px] border border-[#D9DDE8] bg-white p-6 lg:p-8">
          <div className="grid gap-8 xl:grid-cols-2">
            {/* LEFT */}
            <div>
              <h2 className="mb-8 text-[20px] font-bold text-[#0F172A]">Our Repair Process</h2>

              <div className="grid grid-cols-2 gap-y-8 md:grid-cols-3 xl:grid-cols-5">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.number}
                      className="relative flex flex-col items-center px-2 text-center"
                    >
                      {/* Arrow Desktop Only */}
                      {index < processSteps.length - 1 && (
                        <div className="absolute top-0 left-[calc(100%-6px)] hidden h-16 items-center xl:flex">
                          <ChevronRight size={22} strokeWidth={1.5} className="text-[#D6DDF0]" />
                        </div>
                      )}

                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1E46B3]">
                        <Icon size={26} className="text-white" />
                      </div>

                      <span className="mt-4 text-[18px] font-bold text-[#0F172A]">
                        {step.number}
                      </span>

                      <h3 className="mt-2 text-[15px] font-semibold text-[#0F172A]">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-[13px] leading-6 text-[#475467]">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT */}
            <div className="border-t border-[#E4E7EC] pt-8 xl:border-t-0 xl:border-l xl:pl-8">
              <h2 className="mb-8 text-[20px] font-bold text-[#0F172A]">
                Why Choose <span className="text-accent">iTEK Computers?</span>
              </h2>

              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {benefits.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div className="flex gap-4" key={item.title}>
                      <Icon size={34} className="mt-1 shrink-0 text-[#0B8FEA]" />

                      <div>
                        <h3 className="text-[15px] font-semibold text-[#0F172A]">{item.title}</h3>

                        <p className="mt-2 text-[13px] leading-6 text-[#475467]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProcessAndWhyChoose;
