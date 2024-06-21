import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Context } from "./Context/Context";

function App() {
  return (
    <Context>
      <div className="App">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </Context>
  );
}

export default App;
