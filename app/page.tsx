import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Experiment from "@/components/Experiment";
import Token from "@/components/Token";
import Roadmap from "@/components/Roadmap";
import Community from "@/components/Community";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Philosophy />
        <Experiment />
        <Token />
        <Roadmap />
        <Community />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
