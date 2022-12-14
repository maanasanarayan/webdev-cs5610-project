import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import NavigationComponent from "../navigation";
import {findStockBySearchTermThunk} from "../../services/search/search-thunk";
import HomeStockStrip from "../home/home-stock-strip";

const Search = () => {
    const [title, setTitle] = useState('');
    const {stocks} = useSelector((state) => state.stocks)
    console.log("Stocks are :", stocks)
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
                            stocks && stocks.map(function(stock) {
                                return (
                                    <li className="list-group-item ">
                                        <div className="card album-artwork">
                                            <div className="card">
                                                <div className="card-body">
                                                    <Link to="/search-details" state={{stockDetails: stock}} className="card-title">
                                                        <h5>{stock.instrument_name}</h5>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                        {
                            stocks && stocks.length === 0 &&
                            <h4> No Results. </h4>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Search;