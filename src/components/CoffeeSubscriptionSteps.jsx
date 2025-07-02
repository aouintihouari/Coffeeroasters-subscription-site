import CreatePlanBtn from "./CreatePlanBtn";
import HowItWorks from "./HowItWorks";

const CoffeeSubscriptionSteps = () => {
  return (
    <section className="mt-180 mb-60 text-center md:mt-100 md:mb-40 md:text-left lg:my-60">
      <h4 className="h4 text-grey-100 text-center md:text-left">
        How it works?
      </h4>
      <HowItWorks />
      <CreatePlanBtn />
    </section>
  );
};

export default CoffeeSubscriptionSteps;
