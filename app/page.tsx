import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyOliveLane from "./components/WhyOliveLane";
import Services from "./components/Services";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <WhyOliveLane />
        <Services />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
