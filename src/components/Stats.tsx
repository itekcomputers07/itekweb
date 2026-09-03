import Container from "@/components/Container";
import { stats } from "@/constants/constants";

const Stats = () => {
  return (
    <section className="relative z-20 -mt-16 pb-5 lg:-mt-20">
      <Container>
        <div className="mx-auto max-w-375 rounded-[22px] border border-[#D9DDE8] bg-white px-6 py-6 shadow-[0_15px_40px_rgba(0,0,0,0.18)] lg:px-10 lg:py-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex items-center gap-4">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F4F8FF]">
                    <Icon size={24} className="text-accent" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-[22px] font-bold text-[#101828]">{item.value}</h3>

                    <p className="text-[14px] font-medium text-[#475467]">{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Stats;
