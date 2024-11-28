import { useContext } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { CoffeeContext } from "../../providers/CoffeeProviders";

const AddCoffee = () => {

    const {setCoffees} = useContext(CoffeeContext);

    const handelAddCoffee = (e) => {
        e.preventDefault();
      
        const form = e.target;
      
        // Collecting all field values
        const coffeeName = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const price = form.price.value;
        const photo = form.photo.value;
      
        // Creating an object with all the collected data
        const coffeeInfo = { coffeeName, chef, supplier, taste, category, details, price, photo };

        fetch('http://localhost:5000/coffees', {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(coffeeInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert("success added to database Your coffee")
                setCoffees((prevCoffee)=>[...prevCoffee, coffeeInfo])
            }
        })
      };
      



  return (
    <>
      {/* Back to Home Button */}
      <div className="flex items-center justify-start p-4 bg-[#f4f3f0]">
        <Link
          to="/"
          className="flex items-center gap-2 text-coffee bg-[#d2b48c] py-2 px-4 rounded-md shadow hover:bg-[#c19a6b] focus:outline-none focus:ring-2 focus:ring-[#c19a6b] transition duration-300"
        >
          <IoMdArrowBack className="text-lg" />
          <span className="text-sm font-semibold">Go Back to Home</span>
        </Link>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-[#f4f3f0] px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
          <h1 className="text-3xl font-bold text-center mb-4 text-coffee">
            Add New Coffee
          </h1>
          <p className="text-center mb-8 text-[#3b3b3b]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <form onSubmit={handelAddCoffee} className="space-y-4">
            {/* Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-[#3b3b3b] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter coffee name"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
                />
              </div>
              <div>
                <label htmlFor="chef" className="block text-[#3b3b3b] mb-2">
                  Chef
                </label>
                <input
                  type="text"
                  id="chef"
                  name="chef"
                  placeholder="Enter coffee chef"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
                />
              </div>
              <div>
                <label htmlFor="supplier" className="block text-[#3b3b3b] mb-2">
                  Supplier
                </label>
                <input
                  type="text"
                  id="supplier"
                  name="supplier"
                  placeholder="Enter coffee supplier"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
                />
              </div>
              <div>
                <label htmlFor="taste" className="block text-[#3b3b3b] mb-2">
                  Taste
                </label>
                <input
                  type="text"
                  id="taste"
                  name="taste"
                  placeholder="Enter coffee taste"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
                />
              </div>
              <div>
                <label htmlFor="category" className="block text-[#3b3b3b] mb-2">
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  placeholder="Enter coffee category"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
                />
              </div>
              <div>
                <label htmlFor="details" className="block text-[#3b3b3b] mb-2">
                  Details
                </label>
                <input
                  type="text"
                  id="details"
                  name="details"
                  placeholder="Enter coffee details"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
                />
              </div>
            </div>
            {/* Price */}
            <div>
              <label htmlFor="photo" className="block text-[#3b3b3b] mb-2">
                Price
              </label>
              <input
                type="text"
                id="price"
                name="price"
                placeholder="Price$"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
              />
            </div>
            {/* Photo URL */}
            <div>
              <label htmlFor="photo" className="block text-[#3b3b3b] mb-2">
                Photo
              </label>
              <input
                type="text"
                id="photo"
                name="photo"
                placeholder="Enter photo URL"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
              />
            </div>
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#d2b48c] text-white py-3 px-6 rounded shadow-md hover:bg-[#c19a6b] focus:ring-4 focus:ring-[#c19a6b] transition duration-300"
              >
                Add a Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCoffee;
