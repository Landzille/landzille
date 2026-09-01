// import AboutResources from "@/components/aboutResouces"
import Footer from "@/components/footer";
import Header from "@/components/header";
import OtherPageHero from "@/components/otherHero";
import StartingPoint from "@/components/startingPoint";
import ResourceJourney from "@/components/resourceJourney";

const ResourcePage = () => {
  return (
    <div>
      <Header />
      <OtherPageHero headerText="Resources" />
      {/* <AboutResources /> */}
      <StartingPoint />
      <ResourceJourney />
      <Footer />
    </div>
  );
};

export default ResourcePage;
