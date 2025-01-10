// pages/product.js
// pages/product.js
import Image from 'next/image';
import ShoePic from "../images/shoe1.png"
import Header from "../components/header"
import Footer from"../components/footer"


export default function ProductPage() {
  return (
    <div>
        <Header/>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md flex flex-col md:flex-row max-w-4xl p-6">
        {/* Product Image */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={ShoePic} // Replace with the path to your image in the public directory
            alt="Nike Air Force 1 PLT.AF.ORM"
            width={400}
            height={400}
            className="rounded-md"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 mt-6 md:mt-0 md:ml-6">
          <h1 className="text-3xl font-bold">Nike Air Force 1 PLT.AF.ORM</h1>
          <p className="text-gray-600 mt-4">
            Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its
            inside out-inspired construction, including unique layering and exposed foam
            accents, ups the ante on this timeless Jordan Brand silhouette. Details like the
            deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich
            mixture of materials, and aged midsole aesthetic give this release an artisan finish.
          </p>
          <p className="text-xl font-semibold mt-6">₹ 8 695.00</p>

          <button
            className="mt-4 bg-black text-white px-6 py-2 rounded-md flex items-center hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.401 2M7 13h10l3.6-7.2a.9.9 0 00-.8-1.3H6.4M7 13l-1.6 8.8A.9.9 0 006.4 23h11.2a.9.9 0 00.9-.8L21 13M7 13h10M10 17.5a.5.5 0 110 1 .5.5 0 010-1zm6 0a.5.5 0 110 1 .5.5 0 010-1z"
              />
            </svg>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
