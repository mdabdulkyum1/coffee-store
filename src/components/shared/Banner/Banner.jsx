const Banner = () => {
    return (
      <div className="bg-coffee-cupBg hero min-h-[70vh] relative z-0">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content relative z-10">
          <div className="md:w-3/4"></div>
          <div className="">
            <h1 className="mb-5 text-2xl lg:text-5xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
            <p className="mb-5">
            Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
            </p>
            <button className="btn bg-coffeeBtn hover:bg-transparent hover:text-coffeeBtn">Learn More</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  