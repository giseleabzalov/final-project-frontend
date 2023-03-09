import { BrowserRouter, Routes, Route } from "react-router-dom";
import OccasionList from "./components/OccasionList";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

function App() {
  return (
    <main>
      <Header />
      <OccasionList />
    </main>
  );
}
export default App;
