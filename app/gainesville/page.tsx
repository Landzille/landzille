import DownloadMagazine from "@/components/downloadMagazine";
import Footer from "@/components/footer";
import GainesvilleTexts from "@/components/gainesvilleComponents/textSection";
import WhyInvest from "@/components/gainesvilleComponents/whyInvest";
import GainesvilleHero from "@/components/gainesvilleHero";
import GalleryTwoSection from "@/components/galleryTwo";
import Header from "@/components/header";
import OtherHeroSection from "@/components/otherHeros";
import React from "react";

const Gainesville = () => {
  return (
    <div>
      <Header />
      <GainesvilleHero />
      <WhyInvest />
      <GainesvilleTexts />
      <GalleryTwoSection />
      <OtherHeroSection />
      <DownloadMagazine />
      <Footer />
    </div>
  );
};

export default Gainesville;
