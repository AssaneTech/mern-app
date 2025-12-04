import { Box } from "@chakra-ui/react";
import {Route, Routes} from "react-router-dom";

import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import SuccessPopup from "./components/SuccessPopup";


function App() {
    console.log("API_URL =", import.meta.env.VITE_API_URL);
  return (
    <Box minH ={"100vh"}>
      <Navbar/>
      <Routes>
        <Route path ="/" element = {<HomePage/>} />
        <Route path ="/create" element = {<CreatePage/>} />
        <Route path ="/about" element = {<AboutPage/>} />
        <Route path="/success-popup" element={<SuccessPopup/>}/>
      </Routes>
      <Footer/>
    </Box>
)
}

export default App;