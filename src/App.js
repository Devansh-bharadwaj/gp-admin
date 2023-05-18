import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./components/login-page/Login";
import Sidebar from "./components/sidebar/Sidebar";
import Commercial from "./components/commercial-properties/Commercial";
import Residential from "./components/residential-properties/Residential";
import ResPropertyType from "./components/residential-property-type/ResPropertyType";
import Media from "./components/media/Media";
import Country from "./components/country/Country";
import State from "./components/state/State";
import City from "./components/city/City";
import Microlocation from "./components/microlocation/Microlocation";
import Amenities from "./components/amenities/Amenities";
import Builders from "./components/builders/Builders";

function App() {
  return (
    <div>
      {/* <Login /> */}
      <div className="wrapper">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="mainpanel">
          <Routes>
            <Route path="/" element={<Commercial />} />
            <Route path="/residential-properties" element={<Residential />} />
            <Route path="/residential-property-type" element={<ResPropertyType />} />
            <Route path="/media" element={<Media />} />
            <Route path="/country" element={<Country />} />
            <Route path="/state" element={<State />} />
            <Route path="/city" element={<City />} />
            <Route path="/microlocation" element={<Microlocation />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/builders" element={<Builders />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
