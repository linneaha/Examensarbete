import "./App.css";
import Statistics from "./pages/Statistics";
import Timer from "./pages/Timer";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Activities from "./pages/Activities";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Timer />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
