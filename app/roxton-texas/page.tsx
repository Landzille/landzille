import DownloadMagazine from "@/components/downloadMagazine";
import Footer from "@/components/footer";
import Header from "@/components/header";
import OtherHeroSection from "@/components/otherHeros";
import RoxtonGallerySection from "@/components/roxtonTexasComp/gallery";
import RoxtonHero from "@/components/roxtonTexasComp/header";
import RoxtonTexts from "@/components/roxtonTexasComp/textSection";
import RoxtonWhyInvest from "@/components/roxtonTexasComp/whyInvest";
import React from "react";

const RoxtonTexas = () => {
  return (
    <div>
      <Header />
      <RoxtonHero />
      <RoxtonWhyInvest />
      <RoxtonTexts />
      <RoxtonGallerySection />
      <OtherHeroSection />
      <DownloadMagazine />
      <Footer />
    </div>
  );
};

export default RoxtonTexas;
