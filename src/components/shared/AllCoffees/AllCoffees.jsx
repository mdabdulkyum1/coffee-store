import { useContext } from "react";
import { CoffeeContext } from "../../../providers/CoffeeProviders";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AllCoffees = () => {
  const { coffees, setCoffees} = useContext(CoffeeContext);

  const handelDeleteCoffee = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remainingCoffee = coffees.filter(coffee=> coffee._id !== _id);
              setCoffees(remainingCoffee);
            }
          });
      }
    });
  };


  const handelCoffeeDetails = _id => {
    fetch(`http://localhost:5000/coffees/${_id}`)
  }

  return (
    <>
      {coffees.map((coffee) => (
        <div className="bg-[#eceae3] p-4 rounded-lg shadow-md" key={coffee._id}>
          <div className="flex items-center" style={{ maxWidth: "400px" }}>
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
              <Link to={`/coffee/details/${coffee._id}`}>
              <button onClick={()=> handelCoffeeDetails(coffee._id)} className="bg-gray-200 p-2 rounded-full">
                <FaEye className="text-gray-700" />
              </button>
              </Link>
              <button className="bg-gray-700 text-white p-2 rounded-full">
                <FaPen />
              </button>
              <button
                onClick={() => handelDeleteCoffee(coffee._id)}
                className=" text-red-500 hover:bg-red-500 hover:text-white transition duration-500 p-2 rounded-full"
              >
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
