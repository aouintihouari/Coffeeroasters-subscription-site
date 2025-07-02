const FeatureHighlights = () => {
  return (
    <section className="bg-grey-500 relative z-0 flex h-[902px] w-full rounded-lg p-10 text-center text-[#FEFCF7] md:mb-10 md:h-[573px] lg:my-20 lg:mb-10 lg:h-[577px]">
      <div className="flex flex-col">
        <h4 className="h3 lg:my-8">Why choose us?</h4>
        <p className="body mx-auto my-4 w-[90%]">
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>
      <div className="absolute top-[35%] z-10 w-full gap-[3%] md:bottom-[-60%] lg:ml-[-.75%] lg:flex">
        {[
          {
            icon: "/images/home/features/icon-coffee-bean.svg",
            title: "Best quality",
            text: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
          },
          {
            icon: "/images/home/features/icon-gift.svg",
            title: "Exclusive benefits",
            text: "Special offers and swag when you subscribe, including 30% off your first shipment.",
          },
          {
            icon: "/images/home/features/icon-truck.svg",
            title: "Free shipping",
            text: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="mx-[1%] mb-5 flex h-[382px] w-[80%] flex-col items-center justify-center rounded-2xl bg-cyan-500 p-6 md:my-10 md:h-[180px] md:w-[90%] md:flex-row lg:h-[382px] lg:w-[28%] lg:flex-col"
          >
            <img className="w-[72px]" src={card.icon} alt="" />
            <div className="md:text-left lg:my-8 lg:text-center">
              <h4 className="h4 my-8 md:mx-8 lg:my-6">{card.title}</h4>
              <p className="body mx-8">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureHighlights;
