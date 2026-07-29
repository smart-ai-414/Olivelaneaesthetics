import Header from "./components/Header";
import PromoBand from "./components/PromoBand";
import HeroBanner from "./components/HeroBanner";
import Intro from "./components/Intro";
import GetStarted from "./components/GetStarted";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <PromoBand />
        <HeroBanner asHeading />
        <Intro />
        {/*
          The Divi export repeats the "Aesthetic Services" banner here, and the
          live MedCove page renders it twice as well. Kept for parity — delete
          this line if the duplication was unintentional.
        */}
        <HeroBanner />
        <GetStarted />
        <Services />
      </main>
      <Footer />
    </>
  );
}
