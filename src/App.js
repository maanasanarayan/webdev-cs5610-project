import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import HomeComponent from "./home";
import NavigationComponent from "./navigation";
import newsReducer from "./reducers/news-reducer";
import stockReducer from "./reducers/stocks-reducer";
import userReducer from "./reducers/user-reducer";
import Footer from "./navigation/footer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup";
import UserDetails from "./pages/dashboard";
import EditProfile from "./pages/editProfile";
import ProfileComponent from "./profile";
import Bookmarks from "./bookmarks";
const store = configureStore({
  reducer: {
    news: newsReducer,
    stockdata: stockReducer,
    user: userReducer,
  },
});

function App() {
  const user = localStorage.getItem("token");


  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <NavigationComponent />
          <div>
            <Routes>
              <Route path="/*" element={<HomeComponent />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="profile" element={<ProfileComponent/>}/>
              <Route path="bookmarks" element={<Bookmarks/>}/>
              {user && <Route path="/userDetails" element={<UserDetails />} />}
              {user && <Route path="/editProfile" element={<EditProfile />} />}
            </Routes>
          </div>
          <Footer />
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
