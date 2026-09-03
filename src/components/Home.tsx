import {
  Navbar,
  Hero,
  Stats,
  Services,
  ProcessAndWhyChoose,
  BrandsAndReviews,
  ContactSection,
  Footer,
  Seo,
} from "@/components";

const Home = () => {
  return (
    <>
      <Seo
        title="Laptop & Computer Repair Service in Chennai"
        description="iTEK Computers in Perungudi, Chennai offers laptop repair, desktop repair, data recovery, virus removal, motherboard repair, OS installation, CCTV installation, SSD upgrades and hardware upgrades. Fast diagnosis, genuine parts, same-day service, doorstep pickup and expert support for home and business users."
        keywords="Laptop Repair Chennai, Computer Repair Chennai, Desktop Repair Chennai, Data Recovery Chennai, Virus Removal Chennai, Motherboard Repair Chennai, OS Installation Chennai, CCTV Installation Chennai, SSD Upgrade Chennai, Laptop Screen Replacement Chennai, Perungudi Laptop Service"
      />

      <main className="website-layout min-h-screen bg-[#000827]">
        <Navbar />
        <Hero />
        <Stats />
        <Services />
        <ProcessAndWhyChoose />
        <BrandsAndReviews />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Home;
