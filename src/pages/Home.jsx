import CoffeeSubscriptionSteps from "../components/CoffeeSubscriptionSteps";
import Collection from "../components/Collection";
import FeatureHighlights from "../components/FeatureHighlights";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="h-full min-h-screen w-full max-w-full overflow-hidden">
      <Hero />
      <Collection />
      <FeatureHighlights />
      <CoffeeSubscriptionSteps />
    </div>
  );
};

export default Home;
