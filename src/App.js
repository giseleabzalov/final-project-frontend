import { BrowserRouter, Routes, Route } from "react-router-dom";
import OccasionList from "./components/OccasionList";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Header />
      <OccasionList />
      <Footer />
    </main>
  );
}
export default App;
