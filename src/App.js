import Footer from "./components/footer";
import Hero from "./components/main/hero";
import Header from "./components/header";
import OurLatestNews from "./components/main/our-latest-news";
import Clients from "./components/main/clients";
import OurExpert from "./components/main/our-expert";
import OurPlans from "./components/main/our-plans";
import Check from "./components/main/check";
import Statistics from "./components/main/statistics";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Statistics/>
      <Check/>
      <OurPlans/>
      <OurExpert/>
      <Clients/>
      <OurLatestNews/>
      <Footer />
    </>
  );
}

export default App;
