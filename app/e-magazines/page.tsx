import Footer from "@/components/footer";
import Header from "@/components/header";
import MagazinesSection from "@/components/magazineSection";
import OtherPageHero from "@/components/otherHero";

const MagazinesPage = () => {
  return (
    <div>
      <Header />
      <OtherPageHero headerText="E-Magazines" />
      <MagazinesSection />
      <Footer />
    </div>
  );
};

export default MagazinesPage;
