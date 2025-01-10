import Banner from "../images/Banner2.png";
import Image from "next/image";
import Link from "next/link";

const FeatureSection: React.FC = () => {
  return (
    <section className="feature-section py-8 sm:py-12 bg-white">
      {/* Title */}
      <h4 className="px-4 sm:ml-[100px] text-lg sm:text-xl font-bold mb-4 sm:mb-6">Featured</h4>

      {/* Banner Image */}
      <div className="flex justify-center">
        <Image
          src={Banner}
          alt="Featured Banner"
          className="w-full max-w-lg sm:max-w-2xl "
        />
      </div>

      {/* Text Content */}
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-6 sm:mt-10 leading-tight">
          STEP INTO WHAT FEELS GOOD
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700">
          Cause everyone should know the feeling of running in that perfect pair.
        </p>
        <Link href="/AllProduct">
          <button className="mt-6 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
            Find Your Shop
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FeatureSection;

  