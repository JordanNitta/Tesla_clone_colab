import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"
import ModelS from "./pages/modelS/ModelS"
import Model3 from "./pages/model3/Model3"
import ModelX from "./pages/modelX/ModelX"
import ModelY from "./pages/modelY/ModelY"
import NotFound from "./pages/notFound/NotFound"
import SolarPlanel from "./pages/solarPlanel/SolarPlanel";
import SolarRoof from "./pages/solarRoof/SolarRoof";
import Navbar from "./components/Navbar";
import Register from "./pages/createAccount/Register";
import Shop from "./pages/ShopPage/Shop"
// import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='models' element={<ModelS/>}/>
        <Route path='model3' element={<Model3/>}/>
        <Route path='modelx' element={<ModelX/>}/>
        <Route path='modely' element={<ModelY/>}/>
        <Route path='solarpanel' element={<SolarPlanel/>}/>
        <Route path='solarroof' element={<SolarRoof/>}/>
        <Route path='account' element={<Register />}/>
        <Route path='shop' element={<Shop />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
