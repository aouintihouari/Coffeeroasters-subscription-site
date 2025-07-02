const CreatePlanHero = () => {
  return (
    <div className="relative my-10 w-full overflow-hidden rounded-lg">
      <div className="relative h-[600px] w-full md:h-[500px] lg:h-[600px]">
        <picture className="absolute inset-0 h-full w-full">
          <source
            srcSet="./images/plan/mobile/image-hero-blackcup.jpg"
            media="(max-width: 768px)"
          />
          <source
            srcSet="./images/plan/desktop/image-hero-blackcup.jpg"
            media="(min-width: 768px)"
          />
          <img
            className="h-full w-full object-cover"
            src="./images/plan/mobile/image-hero-blackcup.jpg"
            alt="coffee image"
          />
        </picture>
        <div className="relative z-10 flex h-full items-center">
          <div className="w-full px-6 md:px-12 lg:px-16">
            <div className="max-w-full md:max-w-2xl lg:max-w-3xl">
              <h1 className="fraunces mx-1 mb-4 text-center text-[40px] tracking-[0] text-white md:mb-6 md:w-6/12 md:text-left md:text-[48px] md:leading-[48px] lg:w-8/12 lg:text-[72px] lg:leading-[72px]">
                Create plan
              </h1>
              <p className="body mb-6 max-w-md text-center leading-[25px] text-white opacity-90 md:mb-8 md:w-8/12 md:text-left lg:mb-10 lg:w-7/12 lg:max-w-xl">
                Coffee the way you wanted it to be. For coffee delivered
                tomorrow, or next week. For whatever brew method you use. For
                choice, for convenience, for quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePlanHero;
