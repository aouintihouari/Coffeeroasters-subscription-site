import { useState } from "react";
import OrderSummaryModal from "./OrderSummaryModal";

const OrderSummary = ({ selections }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const getFrequency = () => {
    if (selections.delivery === "every-week") return "Every week";
    if (selections.delivery === "every-2-weeks") return "Every 2 weeks";
    if (selections.delivery === "every-month") return "Every month";
    return "_____";
  };
  const getMethod = () => {
    if (selections.preference === "capsule") return "Capsules";
    if (selections.preference === "filter") return "Filter";
    if (selections.preference === "espresso") return "Espresso";
    return "_____";
  };
  const getType = () => {
    if (selections.beanType === "single-origin") return "Single Origin";
    if (selections.beanType === "decaf") return "Decaf";
    if (selections.beanType === "blended") return "Blended";
    return "_____";
  };
  const getQuantity = () => {
    return selections.quantity || "_____";
  };
  const getGrind = () => {
    if (selections.grindOption === "wholebean") return "Wholebean";
    if (selections.grindOption === "filter") return "Filter";
    if (selections.grindOption === "cafetiére") return "Cafetiére";
    return "_____";
  };
  const isComplete = () => {
    const baseComplete =
      selections.preference &&
      selections.beanType &&
      selections.quantity &&
      selections.delivery;
    if (selections.preference === "capsule") return baseComplete;
    return baseComplete && selections.grindOption;
  };
  const handleCreatePlan = () => {
    if (isComplete()) {
      setIsModalOpen(true);
    }
  };
  return (
    <>
      <div className="mt-20 rounded-[10px] bg-[#2C343E] p-8">
        <h4 className="mb-6 text-[16px] font-bold tracking-[5px] text-[#83888F] uppercase">
          Order Summary
        </h4>
        {selections.preference === "capsule" ? (
          <p className="fraunces mb-6 text-[24px] leading-[40px] font-bold text-white">
            "I drink my coffee using{" "}
            <span className="text-[#0E8784]">{getMethod()}</span>, with a{" "}
            <span className="text-[#0E8784]">{getType()}</span> type of bean.{" "}
            <span className="text-[#0E8784]">{getQuantity()}</span>, sent to me{" "}
            <span className="text-[#0E8784]">{getFrequency()}</span>."
          </p>
        ) : (
          <p className="fraunces mb-6 text-[24px] leading-[40px] font-bold text-white">
            "I drink my coffee as{" "}
            <span className="text-[#0E8784]">{getMethod()}</span>, with a{" "}
            <span className="text-[#0E8784]">{getType()}</span> type of bean.{" "}
            <span className="text-[#0E8784]">{getQuantity()}</span> ground ala{" "}
            <span className="text-[#0E8784]">{getGrind()}</span>, sent to me{" "}
            <span className="text-[#0E8784]">{getFrequency()}</span>."
          </p>
        )}
        <button
          className={`w-full rounded-[6px] py-4 text-[18px] font-bold text-white transition-colors ${
            isComplete()
              ? "bg-[#0E8784] hover:bg-[#66D2CF]"
              : "cursor-not-allowed bg-gray-400"
          }`}
          disabled={!isComplete()}
          onClick={handleCreatePlan}
        >
          Create my plan!
        </button>
      </div>
      <OrderSummaryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selections={selections}
      />
    </>
  );
};

export default OrderSummary;
