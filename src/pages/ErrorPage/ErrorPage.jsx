import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ErrorImg from "../../assets/404/404.gif";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
const ErrorPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="my-12">
        <div className="flex items-center justify-center gap-2">
            <IoMdArrowBack />
          <Link to={"/"} className="text-shadow">Go Back to Home</Link>
        </div>
        <img src={ErrorImg} alt="Error" className="mx-auto" />
      </div>
      <Footer></Footer>
    </>
  );
};

export default ErrorPage;
