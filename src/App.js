import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import HomeComponent from "./home";
import NavigationComponent from "./navigation";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup";
import UserDetails from "./pages/dashboard";
import EditProfile from "./pages/editProfile"
function App() {
  const user = localStorage.getItem("token");


  return (
    <>
      <BrowserRouter>
       <NavigationComponent/> 
        <div className="container-fluid">
          <Routes>
            <Route path="/*" element={<HomeComponent />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              {user && <Route path="/userDetails" element={<UserDetails />} />}
              {user && <Route path="/editProfile" element={<EditProfile />} />}
            
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
