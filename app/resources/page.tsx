import AboutResources from "@/components/aboutResouces";
import BrowseResources from "@/components/browseResources";
import Footer from "@/components/footer";
import Header from "@/components/header";
import OtherPageHero from "@/components/otherHero";

const ResourcePage = () => {
  return (
    <div>
      <Header />
      <OtherPageHero headerText="Resources" />
      <AboutResources />
      <BrowseResources />
      <Footer />
    </div>
  );
};

export default ResourcePage;
