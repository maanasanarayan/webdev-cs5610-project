import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import HomeComponent from "./home";
import NavigationComponent from "./navigation";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationComponent />
        <div className="container-fluid">
          <Routes>
            <Route path="/*" element={<HomeComponent />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
