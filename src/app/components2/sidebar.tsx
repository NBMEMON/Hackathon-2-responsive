const Sidebar = () => {
  return (
    <aside className="w-full sm:w-1/4 lg:w-1/5 bg-white border-r border-gray-200 p-6">
      {/* Sidebar Header */}
      <h2 className="text-xl font-semibold mb-6">New (500)</h2>

      {/* Category Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Category</h3>
        <ul className="space-y-1 text-gray-600">
          <li><button className="hover:text-black font-bold">Shoes</button></li>
          <li><button className="hover:text-black font-bold">Sports Bra</button></li>
          <li><button className="hover:text-black font-bold">Top & Tshirts</button></li>
          <li><button className="hover:text-black font-bold">Hoodies & SweatShirts</button></li>
          <li><button className="hover:text-black font-bold">Jackets</button></li>
          <li><button className="hover:text-black font-bold">Shorts</button></li>
          <li><button className="hover:text-black font-bold">Track Suits</button></li>
          <li><button className="hover:text-black font-bold">Jumpsuits & Rompers</button></li>
          <li><button className="hover:text-black font-bold">Skirts & Dresses</button></li>
          <li><button className="hover:text-black">Socks</button></li>
          <li><button className="hover:text-black font-bold">Accessories & Equipments</button></li>
        </ul>
      </div>

      {/* Gender Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Gender</h3>
        <ul className="space-y-1 text-gray-600">
          <li><button className="hover:text-black">Men</button></li>
          <li><button className="hover:text-black">Women</button></li>
          <li><button className="hover:text-black">Unisex</button></li>
        </ul>
      </div>

      {/* Price Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Price</h3>
        <ul className="space-y-1 text-gray-600">
          <li><button className="hover:text-black">₹1,000 - ₹5,000</button></li>
          <li><button className="hover:text-black">₹5,000 - ₹10,000</button></li>
          <li><button className="hover:text-black">₹10,000+</button></li>
        </ul>
      </div>

      {/* Additional Filters */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Other Filters</h3>
        <ul className="space-y-1 text-gray-600">
          <li><button className="hover:text-black">New Arrivals</button></li>
          <li><button className="hover:text-black">On Sale</button></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
