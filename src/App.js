import "./App.css";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Worksection from "./components/Worksection";

function App() {
  return <div className=" ">
    <Navbar />
    <Hero/>
    <Feature/>
    <Worksection/>
    <Price/>
    <Footer/>

    </div>;
}

export default App;
