import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import HomeComponent from "./home";
import NavigationComponent from "./navigation";
import ProfileComponent from "./profile";
import EditProfile from "./profile/edit-profile"

import profileReducer from "./reducers/profile-reducer";
import { configureStore }
  from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import Bookmarks from "./bookmarks";
const store = configureStore({reducer:
    {profile: profileReducer}});
function App() {
  return (

      <Provider store={store}>
      <BrowserRouter>
        <NavigationComponent />
        <div className="container-fluid">
          <Routes>
            <Route path="/*" element={<HomeComponent />} />
            <Route path="profile" element={<ProfileComponent/>}/>
              <Route path="editProfile" element={<EditProfile/>}/>
              <Route path="bookmarks" element={<Bookmarks/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      </Provider>
  );
}

export default App;
