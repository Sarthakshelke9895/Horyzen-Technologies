import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landingpage from './Components/Landingpage/Landingpage';
import ApplyInternship from './Components/Applyinternship/Apply';
import Scrolltotop from './Components/Scrolltotop';


function App() {
  return (
    <BrowserRouter>

<Scrolltotop/>

    <Routes>
      <Route path="/" element={<Landingpage/>} />

        <Route
          path="/apply-internship"
          element={<ApplyInternship />}
        />

    </Routes>

  </BrowserRouter>

  );
}

export default App;
