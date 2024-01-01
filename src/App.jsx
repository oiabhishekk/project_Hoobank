import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeals,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./components";
import style from "./style.js";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}><Navbar /></div>
      </div>

      <div className={`bg-primary  px-0 `}>
        <div className={`bg-primary ${style.boxWidth}`}><Hero /></div>
      </div>

      <div className={`bg-primary ${style.paddingX} ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeals />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
