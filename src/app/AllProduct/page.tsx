import Image, { StaticImageData } from 'next/image'; // Import Image and StaticImageData
import Sidebar from "../components2/sidebar";
import Footer from "../components/footer";
import Header from "../components/header";

import Img1 from "../images/Rectangle (1).png";
import Img2 from "../images/Rectangle (2).png";
import Img3 from "../images/Rectangle (3).png";
import Img4 from "../images/Rectangle (4).png";
import Img5 from "../images/Rectangle (5).png";
import Img6 from "../images/Rectangle (6).png";
import Img7 from "../images/Rectangle (7).png";

const products = [
  { id: 1, image: Img1, title: "Nike Air Force 1", price: "7,999" },
  { id: 2, image: Img2, title: "Nike React Infinity", price: "8,499" },
  { id: 3, image: Img3, title: "Nike Zoom Pegasus", price: "9,199" },
  { id: 4, image: Img4, title: "Men's Training Tee", price: "2,199" },
  { id: 5, image: Img5, title: "Men's Training Shorts", price: "1,999" },
  { id: 6, image: Img6, title: "Women's Sports Bra", price: "3,499" },
  { id: 7, image: Img7, title: "Women's Training Jacket", price: "4,999" },
];

// ProductCard Component within Home.tsx
const ProductCard = ({ image, title, price }: { image: StaticImageData, title: string, price: string }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      {/* Image Section */}
      <div className="relative w-full pb-[100%]"> {/* Maintain 1:1 Aspect Ratio */}
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
      {/* Text Section */}
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">PKR {price}</p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col bg-gray-100">
        <div className="flex flex-grow flex-col lg:flex-row">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="w-full lg:w-4/5 p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                />
              ))}
            </div>
          </main>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}


