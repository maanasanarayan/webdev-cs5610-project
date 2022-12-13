import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import HomeComponent from "./components/home";
import NavigationComponent from "./components/navigation";
import newsReducer from "./components/reducers/news-reducer";
import stockReducer from "./components/reducers/stocks-reducer";
import Footer from "./components/navigation/footer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Search from "./components/search";
import SearchDetails from "./components/searchDetails";
import searchReducer from "./components/search/search-reducer";

const store = configureStore({
  reducer: {
    news: newsReducer,
    stockdata: stockReducer,
    stocks: searchReducer
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
              <Route path="/" element={<HomeComponent />} />
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
