import DownloadMagazine from "@/components/downloadMagazine";
import Footer from "@/components/footer";
import Header from "@/components/header";
import OtherHeroSection from "@/components/otherHeros";
import SmallTownHero from "@/components/smallTownComponents/smallTownHero/page";
import SmallTownText from "@/components/smallTownComponents/textSection";
import SmallTownWhyInvest from "@/components/smallTownComponents/whyInvest";
import React from "react";

const SmallTown = () => {
  return (
    <div>
      <Header />
      <SmallTownHero />
      <SmallTownWhyInvest />
      <SmallTownText />
      <OtherHeroSection />
      <DownloadMagazine />
      <Footer />
    </div>
  );
};

export default SmallTown;
