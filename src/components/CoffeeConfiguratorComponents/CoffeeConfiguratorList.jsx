const configData = {
  preference: { title: "How do you drink your coffee?" },
  beanType: { title: "What type of coffee?" },
  quantity: { title: "How much would you like?" },
  grindOption: { title: "Want us to grind them?" },
  delivery: { title: "How often should we deliver?" },
};

const CoffeeConfiguratorList = ({
  selections,
  openSections,
  onSectionToggle,
}) => {
  const sectionOrder = [
    "preference",
    "beanType",
    "quantity",
    "grindOption",
    "delivery",
  ];

  const getSelectionDisplay = (key) => {
    const selectionValue = selections[key];
    if (!selectionValue) return "";
    const displayMap = {
      preference: {
        capsule: "Capsule",
        filter: "Filter",
        espresso: "Espresso",
      },
      beanType: {
        "single-origin": "Single Origin",
        decaf: "Decaf",
        blended: "Blended",
      },
      quantity: { "250g": "250g", "500g": "500g", "1000g": "1000g" },
      grindOption: {
        wholebean: "Wholebean",
        filter: "Filter",
        cafetiére: "Cafetiére",
      },
      delivery: {
        "every-week": "Every week",
        "every-2-weeks": "Every 2 weeks",
        "every-month": "Every month",
      },
    };

    return displayMap[key]?.[selectionValue] || selectionValue;
  };

  return (
    <div className="mb-10 hidden lg:mb-0 lg:block lg:pr-20">
      <ol className="space-y-6">
        {sectionOrder.map((key, index) => {
          const isDisabled =
            key === "grindOption" && selections.preference === "capsule";
          return (
            <li key={key} className="flex items-start">
              <span
                className={`fraunces mr-6 text-[24px] font-bold ${
                  isDisabled ? "text-gray-300" : "text-[#FDD6BA]"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <button
                  className={`fraunces mb-2 cursor-pointer text-left text-[24px] font-bold transition-colors duration-300 ${
                    isDisabled
                      ? "cursor-not-allowed text-gray-300"
                      : openSections[key]
                        ? "text-[#333D4B]"
                        : "text-[#83888F] hover:text-[#333D4B]"
                  }`}
                  onClick={!isDisabled ? () => onSectionToggle(key) : undefined}
                  disabled={isDisabled}
                >
                  {configData[key].title}
                </button>
                {selections[key] && !isDisabled && (
                  <p className="body text-[16px] text-[#83888F]">
                    {getSelectionDisplay(key)}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default CoffeeConfiguratorList;
