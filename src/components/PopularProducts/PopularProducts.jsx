import { Link } from "react-router-dom";
import AllCoffees from "../shared/AllCoffees/AllCoffees";
import { useContext } from "react";
import { CoffeeContext } from "../../providers/CoffeeProviders";

const PopularProducts = () => {
  const {coffees} = useContext(CoffeeContext);
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

      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 px-3 md:px-0">
            {
              coffees.length === 0 ? <>
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-32 w-full"></div>
              </> :
              <AllCoffees></AllCoffees>
            }
            
      </div>

    </div>
  );
};

export default PopularProducts;
