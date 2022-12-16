import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import HomeStockStrip from "../home/home-stock-strip";
import StockStats from "./stock-stats";
import {profile} from "../services/user-service";
import StockComments from "./StockComments";
import {createCommentThunk, findCommentsThunk} from "../services/comments/comment-thunk";
import {createStocksThunk} from "../services/stocks/stock-thunk";
import {findAllStocksLikedByUser} from "../services/likes/like-service"

const SearchDetails = () => {
    const { state } = useLocation();
    console.log("Parameters recevied :", state.stockDetails);
    const stock = state.stockDetails
    const { user, loggedIn } = useSelector((state) => state.user);
    console.log("=====>>>>Currently logged in user is :", user)
    const {currentStockId} = useSelector((state) => state.stocks)
    const location = useLocation()
    const navigate = useNavigate()

    //Load comments from store
    const {comments} = useSelector((state) => state.comments)
    console.log("From store ---- Comments :", comments)
    let [newComment, setNewComment] = useState('');
    const dispatch = useDispatch();

    // Add a new comment
    const newCommentHandler = () => {
        const newCommentBody = {
            stockID: currentStockId,
            comment: newComment,
            postedBy: user._id
        }
        dispatch(createCommentThunk(newCommentBody))
    }

    useEffect( () => {
        dispatch(createStocksThunk(stock))
    }, [])

    useEffect(() => {
        if (currentStockId) {
            console.log("Reached. Going to dispatch comments! ", currentStockId)
            dispatch(findCommentsThunk(currentStockId))
        }
        }, [currentStockId]
    )

    useEffect( () => {
        if (user) {
            console.log("inside useEffect : User is ", user)
        } else {
            navigate('/sign-in')
        }
    }, []);
    /*const logout = () => {
        service.logout()
            .then(() => navigate('/login'));
    }
*/
    // Formatting data
    /*const artists = song.artists.join(', ')
    const minutes = Math.floor(song.songDurationInMs / 60000);
    const seconds = ((song.songDurationInMs % 60000) / 1000).toFixed(0);
    const duration = minutes + ":" + (seΩconds < 10 ? '0' : '') + seconds;
    const releaseYear = dateFormat(song.releaseYear+"T08:59:00.000Z", "mmmm dS, yyyy")*/

    return(
        <div>
            <HomeStockStrip />
            <div className="p-2">
                <div className="mb-2 position-relative">
                </div>
                <h2 className="fw-bolder">{stock.instrument_name}</h2>
                <div>
                    <div className="pt-0 pb-4">
                        <span  className="h4">{stock.exchange} </span>
                    </div>
                    <p>
                        <i className="fa-sharp fa-solid fa-album me-2"></i>
                        {stock.mic_code}
                        <i className="far fa-stopwatch ms-3 me-2"></i>
                        {stock.exchange_timezone}
                        <i className="far fa-calendar ms-3 me-2"></i>
                        {stock.instrument_type}
                        <i className="far fa-link ms-3 me-2"></i>
                        <a href={`${stock.country}`} className=" text-dark"></a>
                        <br/>
                    </p>
                    <hr/>
                    {console.log("Current stock id", currentStockId)}
                    {   currentStockId &&
                        <StockStats newComment={newComment}
                               setNewComment={setNewComment}
                               newCommentHandler={newCommentHandler}
                               stockID={currentStockId}
                    />}
                    <hr/>
                </div>
                {
                    comments.length > 0  &&
                    <div>
                        <div className="wd-grey-text">
                            Comments
                        </div>
                        <ul className="list-group">
                            {   currentStockId &&
                                comments.map((comment, index) =>
                                    <StockComments
                                        key={comment._id}
                                        comment={comment}
                                        userID={"me"}
                                        user={user}
                                    />
                                )
                            }
                        </ul>
                    </div>
                }
                {
                    comments.length === 0 &&
                    <div>
                        <div className="wd-grey-text">
                            No comments
                        </div>
                    </div>
                }
                {/*<button
                    className="btn btn-primary text-white mt-3"
                    type="button"
                    onClick={logout}>
                    Logout
                </button>*/}
            </div>
        </div>
    );
};
export default SearchDetails;
