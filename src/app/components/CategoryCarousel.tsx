"use client"
import Image from "next/image";
import Men1 from "../images/men1.png";
import Men2 from "../images/men2.png";
import Women1 from "../images/women1.png";
import Women2 from "../images/women2.png";

const CategoryCarousel: React.FC = () => {
  return (
    <section className="gear-up-section py-12 bg-white">
      <h2 className="text-2xl font-bold ml-[100px] mb-4">Gear Up</h2>
      <div className="container mx-auto p-[20px] flex flex-wrap justify-between items-start">
        {/* Men's Section */}
        <div className="carousel-item w-full sm:w-1/2 md:w-1/2 lg:w-1/2 pr-4 mb-8 lg:mb-0">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Shop Mens</h3>
            <div className="flex gap-2">
              <button className="rounded-full border-2 border-gray-400 w-8 h-8 flex items-center justify-center">‹</button>
              <button className="rounded-full border-2 border-gray-400 w-8 h-8 flex items-center justify-center">›</button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Men's Item 1 */}
            <div className="text-center">
              <Image src={Men1} alt="Nike Dri-FIT ADV TechKnit Ultra" width={300} height={300} />
              <div className="flex justify-between items-center w-[300px]">
                <h4 className="mt-4 font-semibold text-sm">Nike Dri-FIT ADV TechKnit Ultra</h4>
                <p className="text-gray-600 mt-[15px]">₹3,895</p>
              </div>
              <div className="flex text-left">
                <p className="text-gray-500 text-xs">Mens Short-Sleeve Running Top</p>
              </div>
            </div>
            {/* Men's Item 2 */}
            <div className="text-center">
              <Image src={Men2} alt="Nike Dri-FIT Challenger" width={300} height={300} />
              <div className="flex justify-between items-center w-[300px]">
                <h4 className="mt-4 font-semibold text-sm">Nike Dri-FIT Challenger</h4>
                <p className="text-gray-600 mt-[15px]">₹2,495</p>
              </div>
              <div className="flex text-left">
                <p className="text-gray-500 text-xs">Mens 18cm (approx.) 2<br />-in-1 Versatile Shorts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Women's Section */}
        <div className="carousel-item w-full sm:w-1/2 md:w-1/2 lg:w-1/2 pl-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Shop Womens</h3>
            <div className="flex gap-2">
              <button className="rounded-full border-2 border-gray-400 w-8 h-8 flex items-center justify-center">‹</button>
              <button className="rounded-full border-2 border-gray-400 w-8 h-8 flex items-center justify-center">›</button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Women's Item 1 */}
            <div className="text-center">
              <Image src={Women1} alt="Nike Dri-FIT ADV Run Division" width={300} height={300} />
              <div className="flex justify-between items-center w-[300px]">
                <h4 className="mt-4 font-semibold text-sm">Nike Dri-FIT ADV Run Division</h4>
                <p className="text-gray-600 mt-[15px]">₹5,295</p>
              </div>
              <div className="flex text-left">
                <p className="text-gray-500 text-xs">Womens Long-Sleeve Running Top</p>
              </div>
            </div>
            {/* Women's Item 2 */}
            <div className="text-center">
              <Image src={Women2} alt="Nike Fast" width={300} height={300} />
              <div className="flex justify-between items-center w-[300px]">
                <h4 className="mt-4 font-semibold text-sm">Nike Fast</h4>
                <p className="text-gray-600 mt-[15px]">₹3,795</p>
              </div>
              <div className="flex text-left">
                <p className="text-gray-500 text-xs">Womens Mid-Rise 7/8 Running <br />Leggings with Pockets</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .carousel-item {
          overflow: hidden;
        }

        .carousel-item .grid {
          display: flex;
          flex-wrap: nowrap;
          overflow-x: scroll;
          -webkit-overflow-scrolling: touch;
        }

        .carousel-item .grid div {
          flex: 0 0 auto;
          width: 80%;
          margin-right: 10px;
        }

        @media (max-width: 768px) {
          .carousel-item .grid {
            display: block;
          }
        }
      `}</style>
    </section>
  );
};

export default CategoryCarousel;



