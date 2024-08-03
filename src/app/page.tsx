import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import MusicSchoolTestimonialCards from "@/components/TestimonialCards";
import Upcommingwebinar from "@/components/Upcommingwebinar";
import Whychoseus from "@/components/WhyChoseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <Whychoseus />
      <MusicSchoolTestimonialCards />
      <Upcommingwebinar />
      <Instructor />
      <Footer />
    </main>
    
  );
}
