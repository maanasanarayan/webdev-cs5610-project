import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import HomeComponent from "./home";
import NavigationComponent from "./navigation";
import newsReducer from "./reducers/news-reducer";
import stockReducer from "./reducers/stocks-reducer";
import Footer from "./navigation/footer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    news: newsReducer,
    stockdata: stockReducer,
  },
});

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <NavigationComponent />
          <div>
            <Routes>
              <Route path="/*" element={<HomeComponent />} />
            </Routes>
          </div>
          <Footer />
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
