import React from "react";
import { configureStore }
    from '@reduxjs/toolkit';
import "./index.css";
import bookMarks from "./bookmarks.json";
import { Card } from 'react-bootstrap';
import { useNavigate } from "react-router";

const BookmarksComponent = () => {
    const navigate = useNavigate();
    function goToProfile() {
        navigate("/profile");
    }
    return (
        <div class="bookMarkPage">
            <div class="row">

                <div class="col-11">
                    <h1 style={{ color: "lightblue", textAlign: "center" }}>Your Bookmarks</h1>
                </div>
                <div class="col-1">
                    <i style={{ fontSize: "35px", color: "lightblue", cursor: "pointer" }} onClick={goToProfile} class="bi bi-person-circle "></i>

                </div>


            </div>

            {
                bookMarks.map(bookMark =>
                    <div class="row" style={{ marginTop: "20px" }}>
                        <div class="col-8 offset-2">

                            <Card className="bg-light text-black" key={bookMark._id} >
                                <Card.Body>
                                    <Card.Title>{bookMark.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Day Range : <span style={{ color: "orange" }} >{bookMark.dayRange}</span> <br></br>52 Week Range : <span style={{ color: "orange" }} >{bookMark.WeekRange}</span> </Card.Subtitle>
                                    <Card.Text>
                                        Market Cap <span style={{ color: "green" }}>{bookMark.marketCap}</span>
                                    </Card.Text>
                                </Card.Body>



                            </Card>
                        </div>
                    </div>)
            }

        </div>
    );
};
export default BookmarksComponent;