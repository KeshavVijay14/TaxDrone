
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Plans } from "@/components/Plans";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Plans />
      <Testimonials />
      <FAQ />
      <ConsultationForm />
      <Footer />
    </div>
  );
};

export default Index;
