import { Button } from "@/components/ui/button";
import heroImage from "@/assets/Se3-Group-s-e1528365728866.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const handleNavigateToDashboard = () => {
    navigate("/new-pkr");
  };

  return (
    <section className="relative mt-[72px] md:mt-[138px]">
      {/* Hero Image */}
      <div className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Students working on computers at PKR Arts College" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
        
        {/* Hero Text */}
        <div className="absolute inset-0 flex items-center">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="mb-3 font-serif text-2xl font-bold leading-tight text-white sm:text-3xl md:text-5xl sm:mb-4">
                Accredited by NAAC with 'A' Grade
              </h2>
              <p className="mb-4 text-base text-white sm:text-lg md:text-xl sm:mb-6">
                Promoting knowledge and skills of learner
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* OBE Button */}
      <div className="py-4 bg-gradient-to-r from-accent to-accent/90">
        <div className="flex justify-center px-4 max-w-7xl mx-a-uto sm:px-6 lg:px-8">
          <Button
            onClick={handleNavigateToDashboard}
            className="px-6 py-4 text-sm font-semibold transition-all transform bg-white shadow-lg text-primary hover:bg-white/90 sm:text-base md:text-lg sm:px-8 sm:py-6 hover:scale-105"
          >
            OBE CO/PO Course Attainment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
