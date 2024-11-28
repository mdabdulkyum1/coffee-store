const Banner = () => {
  return (
    <div
      className="bg-coffee-cupBg hero min-h-[70vh]"
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content ">
        <div className="md:w-3/4"></div>
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}; 

export default Banner;
