import heroImage from "@/assets/images/hero-banner.webp";

const Hero = () => {
  return (
    <section className="relative scroll-mt-25 overflow-hidden pt-2 pb-20 lg:pt-4 lg:pb-5" id="home">
      <div className="mx-auto max-w-[1700px] px-3 sm:px-4 md:px-5 lg:px-8 xl:px-12">
        <div className="grid items-center gap-4 lg:grid-cols-[44%_56%] lg:gap-4">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Top Text */}
            <p className="text-[18px] font-semibold tracking-wide text-white">
              PROFESSIONAL & TRUSTED
            </p>

            {/* Heading */}
            <h1 className="mt-4 text-[52px] leading-[1.08] font-extrabold tracking-[-1px] text-white sm:text-[62px] xl:text-[72px]">
              Laptop & Computer
              <br />
              <span className="bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,183,255,0.25)]">
                Repair Services
              </span>
            </h1>

            {/* Service Highlights */}
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[20px] font-medium text-white">
              <span>Fast Diagnosis</span>
              <span>•</span>
              <span>Genuine Parts</span>
              <span>•</span>
              <span>Same Day Service</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <img
              src={heroImage}
              alt="Illustration of laptop repair service for iTEK Computers"
              className="w-full max-w-162.5 xl:max-w-200 2xl:max-w-212.5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
