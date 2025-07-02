import { useState } from "react";
import CoffeeConfiguratorList from "./CoffeeConfiguratorComponents/CoffeeConfiguratorList";
import CoffeeConfiguratorSection from "./CoffeeConfiguratorComponents/CoffeeConfiguratorSection";

const CoffeeConfigurator = () => {
  const [selections, setSelections] = useState({
    preference: "",
    beanType: "",
    quantity: "",
    grindOption: "",
    delivery: "",
  });

  const [openSections, setOpenSections] = useState({
    preference: true,
    beanType: false,
    quantity: false,
    grindOption: false,
    delivery: false,
  });

  const [currentSection, setCurrentSection] = useState("preference");

  const onSectionToggle = (section) => {
    if (section === "grindOption" && selections.preference === "capsule")
      return;
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
    setCurrentSection(section);
  };

  const onSelect = (section, value) => {
    setSelections((prev) => ({
      ...prev,
      [section]: value,
    }));

    if (section === "preference" && value === "capsule") {
      setSelections((prev) => ({
        ...prev,
        grindOption: "",
      }));
      setOpenSections((prev) => ({
        ...prev,
        grindOption: false,
      }));
    }

    const sectionOrder = [
      "preference",
      "beanType",
      "quantity",
      "grindOption",
      "delivery",
    ];
    const currentIndex = sectionOrder.indexOf(section);
    if (currentIndex < sectionOrder.length - 1) {
      const nextSection = sectionOrder[currentIndex + 1];
      if (nextSection === "grindOption" && value === "capsule") {
        setOpenSections((prev) => ({
          ...prev,
          [section]: false,
          delivery: true,
        }));
        setCurrentSection("delivery");
      } else {
        setOpenSections((prev) => ({
          ...prev,
          [section]: false,
          [nextSection]: true,
        }));
        setCurrentSection(nextSection);
      }
    } else {
      setOpenSections((prev) => ({
        ...prev,
        [section]: false,
      }));
    }
  };

  return (
    <section className="mx-auto px-6 py-20 lg:grid lg:grid-cols-[1fr_2fr] lg:gap-0">
      <CoffeeConfiguratorList
        openSections={openSections}
        onSectionToggle={onSectionToggle}
        selections={selections}
        setSelections={setSelections}
      />
      <CoffeeConfiguratorSection
        currentSection={currentSection}
        openSections={openSections}
        selections={selections}
        onSelect={onSelect}
        onSectionToggle={onSectionToggle}
      />
    </section>
  );
};

export default CoffeeConfigurator;
