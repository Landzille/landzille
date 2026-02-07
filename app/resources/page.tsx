import AboutResources from "@/components/aboutResouces";
import Footer from "@/components/footer";
import Header from "@/components/header";
import OtherPageHero from "@/components/otherHero";
import ResourcesSection from "@/components/resourceSection";

const ResourcePage = () => {
  return (
    <div>
      <Header />
      <OtherPageHero headerText="Resources" />
      <AboutResources />
      <ResourcesSection />
      <Footer />
    </div>
  );
};

export default ResourcePage;
