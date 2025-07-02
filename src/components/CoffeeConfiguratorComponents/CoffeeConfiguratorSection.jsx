import Card from "./Card";
import OrderSummary from "./OrderSummary";

const configData = {
  preference: {
    title: "How do you drink your coffee?",
    options: [
      {
        id: "capsule",
        title: "Capsule",
        description: "Compatible with Nespresso systems and similar brewers",
      },
      {
        id: "filter",
        title: "Filter",
        description: "For pour over or drip methods such as V60 or Aeropress",
      },
      {
        id: "espresso",
        title: "Espresso",
        description:
          "Dense and finely ground beans for an intense, flavorful experience",
      },
    ],
  },
  beanType: {
    title: "What type of coffee?",
    options: [
      {
        id: "single-origin",
        title: "Single Origin",
        description:
          "Distinct, high quality coffee from a specific family-owned farm",
      },
      {
        id: "decaf",
        title: "Decaf",
        description:
          "Just like regular coffee, except the caffeine has been removed",
      },
      {
        id: "blended",
        title: "Blended",
        description:
          "Combination of two or three dark roasted beans of organic coffees",
      },
    ],
  },
  quantity: {
    title: "How much would you like?",
    options: [
      {
        id: "250g",
        title: "250g",
        description:
          "Perfect for the solo drinker. Yields about 12 delicious cups.",
      },
      {
        id: "500g",
        title: "500g",
        description:
          "Perfect option for a couple. Yields about 40 delectable cups.",
      },
      {
        id: "1000g",
        title: "1000g",
        description:
          "Perfect for offices and events. Yields about 90 delightful cups.",
      },
    ],
  },
  grindOption: {
    title: "Want us to grind them?",
    options: [
      {
        id: "wholebean",
        title: "Wholebean",
        description: "Best choice if you cherish the full sensory experience",
      },
      {
        id: "filter",
        title: "Filter",
        description:
          "For drip or pour-over coffee methods such as V60 or Aeropress",
      },
      {
        id: "cafetiére",
        title: "Cafetiére",
        description:
          "Course ground beans specially suited for french press coffee",
      },
    ],
  },
  delivery: {
    title: "How often should we deliver?",
    options: [
      {
        id: "every-week",
        title: "Every week",
        description: "$7.20 per shipment. Includes free priority shipping.",
      },
      {
        id: "every-2-weeks",
        title: "Every 2 weeks",
        description: "$9.60 per shipment. Includes free priority shipping.",
      },
      {
        id: "every-month",
        title: "Every month",
        description: "$12.00 per shipment. Includes free priority shipping.",
      },
    ],
  },
};

const CoffeeConfiguratorSection = ({
  openSections,
  selections,
  onSelect,
  onSectionToggle,
}) => {
  const sectionOrder = [
    "preference",
    "beanType",
    "quantity",
    "grindOption",
    "delivery",
  ];
  return (
    <div>
      {sectionOrder.map((sectionKey) => {
        const data = configData[sectionKey];
        const isOpen = openSections[sectionKey];
        const isDisabled =
          sectionKey === "grindOption" && selections.preference === "capsule";
        if (isDisabled) return null;
        return (
          <section key={sectionKey} className="mb-20">
            <button
              className="mb-8 flex w-full items-center justify-between text-left"
              onClick={() => onSectionToggle(sectionKey)}
            >
              <h3 className="fraunces text-grey-100 cursor-pointer text-[24px] font-bold md:text-[32px] lg:text-[40px]">
                {data.title}
              </h3>
              <span>
                <svg
                  width="19"
                  height="13"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z"
                    fill="#0E8784"
                    fillRule="nonzero"
                  />
                </svg>
              </span>
            </button>

            {isOpen && (
              <div className="grid gap-4 md:grid-cols-3 lg:gap-6">
                {data.options.map((option) => (
                  <Card
                    key={option.id}
                    option={option}
                    isSelected={selections[sectionKey] === option.id}
                    onSelect={() => onSelect(sectionKey, option.id)}
                  />
                ))}
              </div>
            )}
          </section>
        );
      })}
      <OrderSummary selections={selections} />
    </div>
  );
};

export default CoffeeConfiguratorSection;
