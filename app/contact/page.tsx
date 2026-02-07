import ContactSection from "@/components/contactSection";
import Footer from "@/components/footer";
import Header from "@/components/header";
import OtherPageHero from "@/components/otherHero";

const ContactPage = () => {
  return (
    <>
      <Header />
      <OtherPageHero headerText="Contact Us" />
      <ContactSection />
      <Footer />
    </>
  );
};

export default ContactPage;
