const OrderSummaryModal = ({ isOpen, onClose, selections }) => {
  if (!isOpen) return null;

  const getPrice = () => {
    if (selections.delivery === "every-week") return "$7.20";
    if (selections.delivery === "every-2-weeks") return "$9.60";
    if (selections.delivery === "every-month") return "$12.00";
    return "$0.00";
  };

  const getFrequency = () => {
    if (selections.delivery === "every-week") return "Every Week";
    if (selections.delivery === "every-2-weeks") return "Every 2 Weeks";
    if (selections.delivery === "every-month") return "Every Month";
    return "";
  };

  const getMethod = () => {
    if (selections.preference === "capsule") return "Capsules";
    if (selections.preference === "filter") return "Filter";
    if (selections.preference === "espresso") return "Espresso";
    return "";
  };

  const getType = () => {
    if (selections.beanType === "single-origin") return "Single Origin";
    if (selections.beanType === "decaf") return "Decaf";
    if (selections.beanType === "blended") return "Blended";
    return "";
  };

  const getQuantity = () => {
    return selections.quantity || "";
  };

  const getGrind = () => {
    if (selections.grindOption === "wholebean") return "Wholebean";
    if (selections.grindOption === "filter") return "Filter";
    if (selections.grindOption === "cafetiére") return "Cafetiére";
    return "";
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,.5)] p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-md rounded-lg bg-white p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
        <h2 className="fraunces mb-6 text-2xl font-bold text-gray-800">
          Order Summary
        </h2>
        <div className="mb-6">
          {selections.preference === "capsule" ? (
            <p className="leading-relaxed text-gray-600">
              "I drink my coffee as{" "}
              <span className="font-semibold text-[#0E8784]">
                {getMethod()}
              </span>
              , with a{" "}
              <span className="font-semibold text-[#0E8784]">{getType()}</span>{" "}
              type of bean.{" "}
              <span className="font-semibold text-[#0E8784]">
                {getQuantity()}
              </span>{" "}
              ground, sent to me{" "}
              <span className="font-semibold text-[#0E8784]">
                {getFrequency()}
              </span>
              ."
            </p>
          ) : (
            <p className="leading-relaxed text-gray-600">
              "I drink my coffee as{" "}
              <span className="font-semibold text-[#0E8784]">
                {getMethod()}
              </span>
              , with a{" "}
              <span className="font-semibold text-[#0E8784]">{getType()}</span>{" "}
              type of bean.{" "}
              <span className="font-semibold text-[#0E8784]">
                {getQuantity()}
              </span>{" "}
              ground ala{" "}
              <span className="font-semibold text-[#0E8784]">{getGrind()}</span>
              , sent to me{" "}
              <span className="font-semibold text-[#0E8784]">
                {getFrequency()}
              </span>
              ."
            </p>
          )}
        </div>
        <div className="mb-6 text-center">
          <p className="mb-2 text-sm text-gray-500">
            Is this correct? You can proceed to checkout or go back to plan
            selection if you wish to make changes. Subscription discount codes
            can also be redeemed at the checkout.
          </p>
          <div className="fraunces text-3xl font-bold text-gray-800">
            {getPrice()}
            <span className="text-lg">/mo</span>
          </div>
        </div>
        <button
          onClick={() => {
            alert("Proceeding to checkout...");
            onClose();
          }}
          className="w-full rounded-md bg-[#0E8784] px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-[#66D2CF]"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderSummaryModal;
