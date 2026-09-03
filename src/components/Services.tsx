import Container from "@/components/Container";
import { services } from "@/constants/constants";

const Services = () => {
  return (
    <section className="scroll-mt-25 pb-5" id="services">
      <Container>
        <div className="rounded-[18px] border border-[#155FB3] bg-[#02113A] p-4 lg:p-5">
          {/* Heading */}
          <h2 className="mb-5 text-[18px] font-semibold text-white lg:text-[20px]">Our Services</h2>

          {/* Cards */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex min-h-62.5 flex-col items-center rounded-[14px] border border-white/12 bg-[#07194A] px-3 py-4 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_24px_rgba(255,255,255,0.03)] transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_0_30px_rgba(0,183,255,0.12)]"
              >
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="mb-3 h-37.5 w-auto object-contain"
                />

                {/* Title */}
                <h3 className="mb-2 text-[16px] font-semibold text-white">{service.title}</h3>

                {/* Description */}
                <p className="text-[12px] leading-6 text-[#D5DDF4]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
