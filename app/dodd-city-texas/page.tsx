import Footer from "@/components/footer";
import Header from "@/components/header";
import DoddCityHero from "@/components/doddCityComponents/hero";
import DoddCityStats from "@/components/doddCityComponents/stats";
import DoddCityPitch from "@/components/doddCityComponents/pitch";
import DoddCityWhyInvest from "@/components/doddCityComponents/whyInvest";
import DoddCityWhyDoddCity from "@/components/doddCityComponents/whyDoddCity";
import DoddCityAmenities from "@/components/doddCityComponents/amenities";
import DoddCityOpportunities from "@/components/doddCityComponents/opportunities";
import DoddCityCta from "@/components/doddCityComponents/cta";

export const metadata = {
  title: "Dodd City, Texas | Landzille",
  description:
    "A limited, strategic land offering in Dodd City, Texas — front-row positioning beside the $1.6B Bois d'Arc Lake and 30 minutes from Texas Instruments' $40B Sherman campus.",
};

const DoddCityPage = () => {
  return (
    <div>
      <Header />
      <DoddCityHero />
      <DoddCityStats />
      <DoddCityPitch />
      <DoddCityWhyInvest />
      <DoddCityWhyDoddCity />
      <DoddCityAmenities />
      <DoddCityOpportunities />
      <DoddCityCta />
      <Footer />
    </div>
  );
};

export default DoddCityPage;
