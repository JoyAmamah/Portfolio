import HeroSection from "../components/HeroSection";
import SocialLinkLeft from "../components/SocialLinkLeft";
import SocialLinkRight from "../components/SocialLinkRight";

const Home = () => {
  return (
    <main className="min-h-screen flex flex-row justify-between items-center bg-slate-900 relative">
      {/* Simple Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"></div>
      
      {/* Social Links */}
      <SocialLinkLeft />
      <HeroSection />
      <SocialLinkRight />
    </main>
  );
};

export default Home;