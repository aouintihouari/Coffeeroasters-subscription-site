const UncompromisingQuality = () => {
  return (
    <section className="relative z-0 my-40 w-full rounded-[16px] bg-[url('./images/about/mobile/bg-quality.png')] bg-cover bg-center bg-no-repeat md:mt-[40%] md:h-[488px] md:bg-[url('./images/about/tablet/bg-quality.png')] lg:mt-[15%] lg:flex lg:flex-row-reverse lg:items-center lg:justify-between lg:bg-[url('./images/about/desktop/bg-quality.png')] lg:px-20 lg:py-20">
      <picture className="block w-full lg:w-auto">
        <source
          srcSet="./images/about/desktop/image-quality.jpg"
          media="(min-width: 1024px)"
        />
        <source
          srcSet="./images/about/tablet/image-quality.jpg"
          media="(min-width: 769px)"
        />
        <source
          srcSet="./images/about/mobile/image-quality.jpg"
          media="(max-width: 768px)"
        />
        <img
          className="absolute left-[10%] mx-auto mt-[-20%] w-[80%] rounded-[16px] md:top-[-45%] md:left-[8%] md:mt-0 md:w-[600px] lg:top-[-10%] lg:right-[10%] lg:left-[unset] lg:mt-0 lg:h-[474px] lg:w-[445px]"
          src="./images/about/mobile/image-quality.jpg"
          alt="Uncompromising quality"
        />
      </picture>
      <div className="pt-[30%] pb-[20%] text-center text-[#FEFCF7] md:pt-20 md:pb-10 lg:max-w-[540px] lg:pt-0 lg:text-left">
        <h3 className="fraunces mx-auto w-[80%] pt-[0px] text-[28px] md:mt-[70px] md:text-[32px] lg:mx-0 lg:w-full lg:text-[40px]">
          Uncompromising quality
        </h3>
        <p className="body mx-auto mt-10 w-[90%] md:w-[80%] lg:mx-0 lg:w-full">
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </div>
    </section>
  );
};

export default UncompromisingQuality;
