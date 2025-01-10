import Image from "next/image";
import product1 from "../images/shoe1.png";
import product2 from "../images/shoe2.png";
import { FaArrowRight } from "react-icons/fa"; // Importing a right arrow icon from react-icons
import Link from "next/link";

const ProductCarousel: React.FC = () => {
  return (
    <section className="product-carousel py-8 bg-white">
      {/* Header Section */}
      <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 lg:px-12 mb-6">
        <h2 className="text-base sm:text-lg lg:text-xl font-bold">Best of Air Max</h2>
        {/* Replacing the image of the arrow with a react-icon */}
        <FaArrowRight className="w-6 h-6 text-gray-600" />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-12">
        {/* Product 1 */}
        <div className="text-center">
          <Link href="/ProductPage">
            <Image src={product1} alt="Nike Air Max Pulse" width={300} height={300} />
            <div className="flex justify-between mt-4">
              <h3 className="font-bold text-sm sm:text-base">Nike Air Max Pulse</h3>
              <p className="text-gray-600 text-sm sm:text-base">₹13,995</p>
            </div>
          </Link>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">Women's Shoes</p>
        </div>

        {/* Product 2 */}
        <div className="text-center">
          <Link href="/ProductPage">
            <Image src={product2} alt="Nike Air Max 97 SE" width={300} height={300} />
            <div className="flex justify-between mt-4">
              <h3 className="font-bold text-sm sm:text-base">Nike Air Max Pulse</h3>
              <p className="text-gray-600 text-sm sm:text-base">₹13,995</p>
            </div>
          </Link>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">Men's Shoes</p>
        </div>

        {/* Product 3 */}
        <div className="text-center">
          <Link href="/ProductPage">
            <Image src={product2} alt="Nike Air Max 97 SE" width={300} height={300} />
            <div className="flex justify-between mt-4">
              <h3 className="font-bold text-sm sm:text-base">Nike Air Max Pulse</h3>
              <p className="text-gray-600 text-sm sm:text-base">₹13,995</p>
            </div>
          </Link>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">Men's Shoes</p>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;

