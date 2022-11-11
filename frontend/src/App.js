import Banner1 from "./component/Banner/Banner1";
import Banner2 from "./component/Banner/Banner2";
import Contact from "./component/Contact/Contact";
import Footer from "./component/footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import Pricing from "./component/Pricing/Pricing";
import Services from "./component/Services/Services";
import Test from "./component/Testimonials/test";
import Testimonials from "./component/Testimonials/Testimonials";

 

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Services/>
     <Pricing/>
     <Banner1/>
     <Testimonials/>
     <Test/>
     <Banner2/>
     <Contact/>
     <Footer/>

    </div>
  );
}

export default App;
