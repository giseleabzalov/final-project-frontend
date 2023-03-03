import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./components/List";
import ListCard from "./components/ListCard";
import OccasionList from "./components/OccasionList";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/occasion"
          element={<OccasionList occasion="Occasion" />}
        />
      </Routes>
    </BrowserRouter>
    // <main>
    //   <List />
    // </main>
  );
}
export default App;
