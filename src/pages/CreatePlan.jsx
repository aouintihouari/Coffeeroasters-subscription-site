import CoffeeConfigurator from "../components/CoffeeConfigurator";
import CreatePlanHero from "../components/CreatePlanHero";
import HowItWorks from "../components/HowItWorks";

const CreatePlan = () => {
  return (
    <>
      <CreatePlanHero />
      <section className="bg-grey-500 my-[10%] text-white">
        <HowItWorks type={"create"} />
      </section>
      <CoffeeConfigurator />
    </>
  );
};

export default CreatePlan;
