import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import HomeComponent from "./home";
import NavigationComponent from "./navigation";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup";
import UserDetails from "./pages/dashboard";
import EditProfile from "./pages/editProfile";
import ProfileComponent from "./profile";
import Bookmarks from "./bookmarks";
import Search from "./search";
import SearchDetails from "./searchDetails";
import searchReducer from "./search/search-reducer";
import Footer from "./navigation/footer";
import newsReducer from "./reducers/news-reducer";
import userReducer from "./reducers/user-reducer";
import commentReducer from "./reducers/comment-reducer";
import likeReducer from "./reducers/like-reducer";
import stocksReducer from "./reducers/stock-reducer";
import stockReducer from "./reducers/stocks-reducer";
import ProfileComponentAdmin from "./profile/profilepages/admin";
import ProfileComponentCompany from "./profile/profilepages/comapny";

const store = configureStore({
  reducer: {
    news: newsReducer,
    stockdata: stockReducer,
    user: userReducer,
    search: searchReducer,
    comments: commentReducer,
    likes: likeReducer,
    stocks: stocksReducer
  },
});

function App() {
  const user = localStorage.getItem("token");


  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <NavigationComponent />
          <div id="mainContainer">
            <Routes>
              <Route path="/*" element={<HomeComponent />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="profile" element={<ProfileComponent />} />
              <Route path="bookmarks" element={<Bookmarks />} />
              <Route path="/profileadmin" element={<ProfileComponentAdmin/>}/>
              <Route path="/profilecompany" element={<ProfileComponentCompany/>}/>
              {user && <Route path="/userDetails" element={<UserDetails />} />}
              {user && <Route path="/editProfile" element={<EditProfile />} />}
              <Route path="/search" element={<Search/>}/>
              <Route path="/search-details" element={<SearchDetails/>}/>
            </Routes>
          </div>
          <Footer />
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
