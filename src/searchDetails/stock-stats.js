import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {countHowManyLikesThunk, findUserLikesStockThunk, toggleLikeThunk} from "../services/likes/like-thunk";

const StockStats = ({newComment, setNewComment, newCommentHandler, stockID}) => {
    const { user, loggedIn } = useSelector((state) => state.user);
    const [showCommentBox, setShowCommentBox] = useState(false);
    console.log("Inside the Stock Stats, checking which user :", user)
    const userId = user._id
    const likesCount = useSelector((state) => state.likes.likes.count)
    const isStockLiked = useSelector((state) => state.likes.likes.userLiked)
    const dispatch = useDispatch();
    useEffect( () => {
            dispatch(countHowManyLikesThunk(stockID))
            dispatch(findUserLikesStockThunk({userId, stockID}))
        }, []
    )

    console.log("likesCount", likesCount)

    //Like a song
    const likeStock = (stockID) => {
        dispatch(toggleLikeThunk({userId, stockID}))
    }

    return(
        <div>
            <div className="row wd-symbols">
                <div className="col-6 text-center">
                    <button
                        className= {isStockLiked ?
                            "bi bi-hand-thumbs-up wd-heart wd-icon-button" :
                            "bi bi-hand-thumbs-up wd-grey-text wd-heart wd-icon-button"}
                        style={{color: isStockLiked ? 'red': ''}}
                        onClick={() => likeStock(stockID)}>
                    </button>
                    <span className="wd-icons-text">
                        {likesCount}
                    </span>
                </div>
                <div className="col-6 text-center">
                    <button onClick={ () => setShowCommentBox(!showCommentBox)}
                            className="fa-regular bi bi-chat wd-grey-text wd-icon-button"></button>
                    <span className="wd-icons-text" >
                        234
                    </span>
                </div>
            </div>
            <div className="row">
                {showCommentBox ? <
                        div className="input-group mt-2">
                        <input
                            type="text"
                            value={newComment}
                            onChange={(event) => setNewComment(event.target.value)}
                            className="form-control"
                            aria-label="With textarea"
                            placeholder="Write a comment...">
                        </input>
                        <button
                            className="btn btn-primary text-white"
                            type="button"
                            id="button-addon2"
                            onClick={newCommentHandler}>
                            Comment
                        </button>
                    </div> :
                    <div></div>
                }
            </div>
        </div>

    )

}

export default StockStats