import "./App.css";
import Cards from "./components/Cards/Cards";
import Faq from "./components/Faq/Faq";
import { Hero } from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Plans from "./components/Plans/Plans";
import { ChakraProvider } from "@chakra-ui/react";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <ChakraProvider>
      <div className="app">
        <div className="parent">
          <Navbar />
          <Hero />
          <Cards />
          <Plans />
          <Testimonials />
          <Blogs />
          <Faq />
          <Footer />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
