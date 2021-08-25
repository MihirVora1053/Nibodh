import "./App.css";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Banner from "./components/banner/banner";
import DonateInfo from "./components/donateInfo/donateInfo";
import Card1 from "./components/card1/card1";
import Banner2 from "./components/banner2/banner";
import Chart from "./components/chart/chart";
import Card2 from "./components/card2/cards";
import Event from "./components/event/event";
import Footer from "./components/Footer/footer";
import Team from "./components/team-slider/slider";
import Contact from './components/contact/contact';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <Banner />
      <DonateInfo />
      <Card1 />
      <Chart />
      <Card2 />
      <Banner2 />
      <Contact/>
      <Team />
      <Event />
      <Footer />
    </>
  );
}

export default App;
