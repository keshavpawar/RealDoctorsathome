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
import Infotab from "./components/Infotab/Infotab";
import {   Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Homepage from "./Homepage";
import Signup from "./components/Auth/Signup/Signup";
import Login from "./components/Auth/Login/Login";
import { Profile } from "./Page/Profile/Profile";



function App() {
  return (
    <BrowserRouter>
    <ChakraProvider>     
    <Routes>
        <Route path="/" element={<Homepage />}>
              </Route>

              <Route path="/Signup" element={<Signup />}>
              </Route>

              <Route path="/Login" element={<Login/>}>
              </Route>

              <Route path="/profile" element={<Profile/>}>
              </Route>
                          
      </Routes>
    </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;