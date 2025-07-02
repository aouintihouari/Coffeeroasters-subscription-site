const Commitment = () => {
  return (
    <section className="my-30 flex w-full flex-col md:my-30 md:flex-row md:gap-20 lg:my-[140px] lg:ml-20 lg:gap-40">
      <picture>
        <source
          srcSet="./images/about/desktop/image-commitment.jpg"
          media="(min-width: 1024px)"
        />
        <source
          srcSet="./images/about/tablet/image-commitment.jpg"
          media="(min-width: 769px)"
        />
        <source
          srcSet="./images/about/mobile/image-commitment.jpg"
          media="(max-width: 768px)"
        />
        <img
          className="rounded-xl"
          src="./images/about/mobile/image-commitment.jpg"
          alt="Commitment"
        />
      </picture>
      <article className="my-10 flex flex-col justify-center gap-6 text-center md:w-[50%] md:text-left lg:w-[50%]">
        <h2 className="h2">Our commitment</h2>
        <p className="body lg:w-[80%]">
          We’re built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world’s best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </p>
      </article>
    </section>
  );
};

export default Commitment;
