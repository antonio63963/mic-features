import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SpeechToText from "./components/SpeechToText";
import RecorgingSpeech from "./components/RecorgingSpeech/RecorgingSpeech";
import AppHeader from "./components/AppHeader";

function App() {
  return <BrowserRouter>
    <AppHeader />
    <Routes>
      <Route path="/" element={<SpeechToText />} />
      <Route path="/rec" element={<RecorgingSpeech />} />
    </Routes>
  </BrowserRouter>
}

export default App;
