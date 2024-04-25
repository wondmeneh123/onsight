import Recieve from "./components/Stream";
import Watcher from "./components/Watcher";
import LandingPage from "./components/LandingPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/stream" element={<Recieve />}/>
        <Route path="/watch" element={<Watcher />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
