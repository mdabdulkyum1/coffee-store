import { IoMdArrowBack } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
    const coffee = useLoaderData();
    const { coffeeName, chef, supplier, taste, category, details, price, photo } = coffee;
    
  return (
    <>
      <div className="flex items-center justify-center bg-[#f4f3f0] px-4 ">
        <div className="md:w-1/2 my-12">

          <div className="flex items-center justify-start bg-[#f4f3f0] mb-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-coffee bg-[#d2b48c] py-2 px-4 rounded-md shadow hover:bg-[#c19a6b] focus:outline-none focus:ring-2 focus:ring-[#c19a6b] transition duration-300"
            >
              <IoMdArrowBack className="text-lg" />
              <span className="text-sm font-semibold">Go Back to Home</span>
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
                <div className="flex flex-col md:flex-row">
                    <div className="">
                        <img src={photo} alt={coffeeName} />
                    </div>
                    <div className="">
                        <h1 className="text-3xl text-coffee mb-5">{coffeeName}</h1>
                        <p><strong>Name:</strong> {coffeeName}</p>
                        <p><strong>Chef:</strong> {chef}</p>
                        <p><strong>Supplier:</strong> {supplier}</p>
                        <p><strong>Taste:</strong> {taste}</p>
                        <p><strong>Category:</strong> {category}</p>
                        <p><strong>Details:</strong> {details}</p>
                        <p><strong>Price:</strong> ${price}</p>
                    </div>
                </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default CoffeeDetails;
