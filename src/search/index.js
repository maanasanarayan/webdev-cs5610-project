import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import NavigationComponent from "../navigation";
import {findStockBySearchTermThunk} from "../services/search/search-thunk";
import HomeStockStrip from "../home/home-stock-strip";
import {createStocksThunk} from "../services/stocks/stock-thunk";
import {createStock} from "../services/stocks/stock-service";

const Search = () => {
    const [title, setTitle] = useState('');
    const navigate = useNavigate()
    const {search} = useSelector((state) => state.search)
    console.log(" Searched Stocks are : ", search)
    const dispatch = useDispatch();
    const searchForStock = () => {
        dispatch(findStockBySearchTermThunk(title));
    }
    return(
        <div>
            <HomeStockStrip />
            <h1>Search</h1>
            <div className="row">
                <div className="col">
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        placeholder={"Stock"}
                        className="form-control"/>
                </div>
                <div className="col">
                    <button onClick={searchForStock} className="btn btn-primary">Search</button>
                </div>
            </div>
            <div className="row">
                <div className="col results-spacing">
                    <ul className="list-group">
                        {
                            search && search.map(function(searchedStock) {
                                return (
                                    <li className="list-group-item ">
                                        <div className="card album-artwork">
                                            <div className="card">
                                                <div className="card-body">
                                                        <h5 onClick={
                                                            () => {
                                                                navigate("/search-details", {
                                                                    state: { stockDetails: searchedStock }
                                                                })
                                                            }
                                                        }>{searchedStock.instrument_name}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                        {
                            search && search.length === 0 &&
                            <h4> No Results. </h4>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Search;