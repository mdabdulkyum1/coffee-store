import { useContext } from "react";
import { CoffeeContext } from "../../../providers/CoffeeProviders";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AllCoffees = () => {
  const { coffees, setCoffees } = useContext(CoffeeContext);

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
        fetch(`https://coffee-server-nine-eta.vercel.app/coffees/${_id}`, {
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
              const remainingCoffee = coffees.filter(
                (coffee) => coffee._id !== _id
              );
              setCoffees(remainingCoffee);
            }
          });
      }
    });
  };

  const handelCoffeeDetails = (_id) => {
    fetch(`https://coffee-server-nine-eta.vercel.app/coffees/${_id}`);
  };
  const handelCoffeeUpdate = async (_id) => {
    const { value: formValues } = await Swal.fire({
      title: "Update a Coffee",
      html: `
       <form class="space-y-4 ">
  <!-- Responsive Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label for="name" class="block text-[#3b3b3b] text-left mb-2">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter coffee name"
        class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
      />
    </div>
    <div>
      <label for="chef" class="block text-[#3b3b3b] text-left mb-2">
        Chef
      </label>
      <input
        type="text"
        id="chef"
        name="chef"
        placeholder="Enter coffee chef"
        class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
      />
    </div>
    <div>
      <label for="supplier" class="block text-[#3b3b3b] text-left mb-2">
        Supplier
      </label>
      <input
        type="text"
        id="supplier"
        name="supplier"
        placeholder="Enter coffee supplier"
        class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
      />
    </div>
    <div>
      <label for="taste" class="block text-[#3b3b3b] text-left mb-2">
        Taste
      </label>
      <input
        type="text"
        id="taste"
        name="taste"
        placeholder="Enter coffee taste"
        class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
      />
    </div>
    <div>
      <label for="category" class="block text-[#3b3b3b] text-left mb-2">
        Category
      </label>
      <input
        type="text"
        id="category"
        name="category"
        placeholder="Enter coffee category"
        class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
      />
    </div>
    <div>
      <label for="details" class="block text-[#3b3b3b] text-left mb-2">
        Details
      </label>
      <input
        type="text"
        id="details"
        name="details"
        placeholder="Enter coffee details"
        class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
      />
    </div>
  </div>

  <div>
    <label for="price" class="block text-[#3b3b3b] text-left mb-2">
      Price
    </label>
    <input
      type="text"
      id="price"
      name="price"
      placeholder="Price$"
      class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
    />
  </div>

  <div>
    <label for="photo" class="block text-[#3b3b3b] text-left mb-2">
      Photo
    </label>
    <input
      type="text"
      id="photo"
      name="photo"
      placeholder="Enter photo URL"
      class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
    />
  </div>
</form>

      `,
      focusConfirm: false,
      confirmButtonText: "Update a Coffee",

      background: "#eceae3",
      preConfirm: () => {
        const name = document.getElementById("name").value;
        const chef = document.getElementById("chef").value;
        const supplier = document.getElementById("supplier").value;
        const taste = document.getElementById("taste").value;
        const category = document.getElementById("category").value;
        const details = document.getElementById("details").value;
        const price = document.getElementById("price").value;
        const photo = document.getElementById("photo").value;
        const coffeeInfo = {
          name,
          chef,
          supplier,
          taste,
          category,
          details,
          price,
          photo,
        };

        fetch(`https://coffee-server-nine-eta.vercel.app/coffees/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(coffeeInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              const index = coffees.findIndex((coffee) => coffee._id === _id);
              console.log(index);
              if (index !== -1) {
                const updatedCoffees = [...coffees];
                updatedCoffees[index] = {
                  ...coffees[index],
                  coffeeName: name,
                  chef:chef,
                  supplier: supplier,
                  taste: taste,
                  category: category,
                  details: details,
                  price: price,
                  photo: photo,
                };
                setCoffees(updatedCoffees);
              }
            }
          });

        return "success";
      },
    });
    if (formValues) {
      Swal.fire({
        title: "Coffee Updated Successfully!",
        icon: "success",
        confirmButtonText: "Okay",
      });
    }
  };

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
                <button
                  onClick={() => handelCoffeeDetails(coffee._id)}
                  className="bg-gray-200 p-2 rounded-full"
                >
                  <FaEye className="text-gray-700" />
                </button>
              </Link>

              <button
                onClick={() => handelCoffeeUpdate(coffee._id)}
                className="bg-gray-700 text-white p-2 rounded-full"
              >
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
