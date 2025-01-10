import Image from "next/image";
import ShoesPic from "../images/shoespic.png";

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section bg-white text-black">
      <div className="container mx-auto py-8 px-4">
        {/* Image Section */}
        <div className="w-full h-[60vh] sm:h-[80vh] flex justify-center">
          <Image
            src={ShoesPic}
            alt="Nike Air Max Pulse"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full text-center sm:text-left mt-6 sm:mt-8">
          <p className="text-sm text-gray-600 mb-2">First Look</p>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
            Nike Air Max Pulse
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-700">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
            <br />
            —designed to push you past your limits and help you go to the max.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
              Notify Me
            </button>
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
              Shop Air Max
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

