import Header from "./components/Header/Header";
import Promo from "./components/Promo/Promo";
import Brands from "./components/Brands/Brands";
import Arrivals from "./components/Arrivals/Arrivals";
import Sale from "./components/Sale/Sale";
import Favourite from "./components/Favourite/Favourite";
import Application from "./components/Application/Application";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Sale />
      <Favourite />
      <Application />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
