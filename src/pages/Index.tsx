import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Chapters from "@/components/Chapters";
import DetailedContent from "@/components/DetailedContent";
import LabAssessments from "@/components/LabAssessments";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Overview />
      <Chapters />
      <DetailedContent />
      <LabAssessments />
      <Footer />
    </div>
  );
};

export default Index;
