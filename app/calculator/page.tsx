import Footer from "@/components/footer";
import Header from "@/components/header";
import LandCalculator from "@/components/landCalculator/LandCalculator";
import OtherPageHero from "@/components/otherHero";
import React from "react";

const CalculatorPage = () => {
  return (
    <div>
      <Header />
      <OtherPageHero headerText="Land Calculator" />
      <LandCalculator />
      <Footer />
    </div>
  );
};

export default CalculatorPage;
