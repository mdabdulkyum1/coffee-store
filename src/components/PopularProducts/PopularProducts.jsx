import { Link } from "react-router-dom";

const PopularProducts = () => {
  return (
    <div className="my-12 bg-productBg bg-cover bg-no-repeat">
      <div className="text-center">
        <h3>--- Sip & Savor ---</h3>
        <h1 className="text-xl md:text-4xl font-extrabold text-coffee">
          Our Popular Products
        </h1>
        <div className="flex justify-center mt-4 gap-4">
          <Link to={'/addCoffee'}>
          <button className="flex items-center gap-2 px-4 py-2 border-2 border-coffee rounded shadow-md text-white font-bold bg-[#D4A373] hover:bg-white hover:text-[#D4A373] hover:border-[#D4A373] transition duration-300">
            <span className="text-shadow">Add Coffee</span>
            <span className="text-xl">☕</span>
          </button>
          </Link>
        </div>
      </div>

      <div className="">

      </div>

    </div>
  );
};

export default PopularProducts;
