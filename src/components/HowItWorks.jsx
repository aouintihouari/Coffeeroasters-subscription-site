import Steps from "./Steps";

const HowItWorks = ({ type }) => {
  const steps = [
    {
      number: "01",
      title: "Pick your coffee",
      description:
        "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
    },
    {
      number: "02",
      title: "Choose the frequency",
      description:
        "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
    },
    {
      number: "03",
      title: "Receive and enjoy!",
      description:
        "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
    },
  ];

  return (
    <>
      <Steps type={type} />
      <section
        className={`${type === "create" ? "p-12" : ""} mb-10 grid gap-10 text-center md:grid-cols-3 md:text-left`}
      >
        {steps.map((step, index) => (
          <article
            key={step.number}
            className={`my-10 md:my-0 ${index === 2 ? "lg:ml-20" : ""}`}
          >
            <h4 className="h1 my-4 text-orange-500">{step.number}</h4>
            <h5
              className={`${type === "create" ? "text-cream-500" : "text-grey-500"} h3 my-10`}
            >
              {step.title}
            </h5>
            <p
              className={`${type === "create" ? "text-cream-500" : "text-grey-500"} body`}
            >
              {step.description}
            </p>
          </article>
        ))}
      </section>
    </>
  );
};

export default HowItWorks;
