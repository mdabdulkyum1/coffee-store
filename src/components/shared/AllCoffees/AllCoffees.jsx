import { useContext } from "react";
import { CoffeeContext } from "../../../providers/CoffeeProviders";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";

const AllCoffees = () => {
  const { coffees } = useContext(CoffeeContext);

  return (
    <>
      {coffees.map((coffee) => (
        <div className="bg-[#eceae3] p-4 rounded-lg shadow-md" key={coffee._id}>
          <div
            className="flex items-center"
            style={{ maxWidth: "400px" }}
          >
            <img
              src={coffee.photo}
              alt="Coffee cup with holder mockup"
              className="w-24 h-36 object-cover rounded-lg"
            />
            <div className="ml-4">
              <p className="text-gray-700">
                <span className="font-semibold">Name:</span> {coffee.coffeeName}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Chef:</span> {coffee.chef}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Price:</span> ${coffee.price}
              </p>
            </div>
            <div className="ml-auto flex flex-col space-y-2">
              <button className="bg-gray-200 p-2 rounded-full">
                <FaEye className="text-gray-700" />
              </button>
              <button className="bg-gray-700 text-white p-2 rounded-full">
                <FaPen />
              </button>
              <button className="bg-red-500 text-white p-2 rounded-full">
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AllCoffees;
