const HeadQuarters = () => {
  return (
    <section className="my-40">
      <h5 className="h4 mb-10 text-center text-[#83888F] md:text-left">
        Our headquarters
      </h5>
      <nav className="my-10 flex flex-col items-center justify-center md:grid md:grid-cols-3 md:gap-6">
        <div className="my-10 text-center text-[#333D4B] md:text-left">
          <img
            className="mx-auto my-4 md:mx-0"
            src="./images/about/illustration-uk.svg"
            alt="uk"
          />
          <h6 className="my-4 text-[28px] font-bold">United Kingdom</h6>
          <p>
            68 Asfordby Rd <br />
            Alcastone <br />
            SY6 1YA <br />
            +44 1241 918425
          </p>
        </div>
        <div className="my-10 text-center text-[#333D4B] md:text-left">
          <img
            className="mx-auto my-4 md:mx-0"
            src="./images/about/illustration-canada.svg"
            alt=""
          />
          <h6 className="my-4 text-[28px] font-bold">Canada</h6>
          <p>
            1528 Eglinton Avenue <br />
            Toronto <br />
            Ontario M4P 1A6 <br />
            +1 416 485 2997
          </p>
        </div>
        <div className="my-10 text-center text-[#333D4B] md:text-left">
          <img
            className="mx-auto my-4 md:mx-0"
            src="./images/about/illustration-australia.svg"
            alt=""
          />
          <h6 className="my-4 text-[28px] font-bold">Australia</h6>
          <p>
            36 Swanston Street <br />
            Kewell <br />
            Victoria <br />
            +61 4 9928 3629
          </p>
        </div>
      </nav>
    </section>
  );
};

export default HeadQuarters;
