import DownloadMagazine from "@/components/downloadMagazine";
import Footer from "@/components/footer";
import Header from "@/components/header";
import LeonardHero from "@/components/leonardComponents/hero";
import LeonardTexts from "@/components/leonardComponents/otherTexts";
import WhyInvest from "@/components/leonardComponents/whyInvest";
import LeonardGallery from "@/components/leonardGallery";
import OtherHeroSection from "@/components/otherHeros";
import React from "react";

const Leonard = () => {
  return (
    <div>
      <Header />
      <LeonardHero />
      <WhyInvest />
      <LeonardTexts />
      <LeonardGallery />
      <OtherHeroSection />
      <DownloadMagazine />
      <Footer />
    </div>
  );
};

export default Leonard;
