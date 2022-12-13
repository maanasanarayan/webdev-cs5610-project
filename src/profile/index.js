import { React, useState, useEffect } from "react";
import "./index.css"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Location from "./location.js" ;
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ProfileComponent = () => {
    const [file, setFile] = useState();
    useEffect(() => {
        // call api or anything
        // setFile("../images/owner.jpg");
    });
    function handleChange(e) {
        console.log(e.target.files[0]);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    const profile = useSelector(state => state.profile)

    const navigate = useNavigate();

    function goToEditProfile(event) {

        navigate('../editProfile');
    }



    function goToBookMarks() {
        navigate("/bookmarks");
    }
    return (
        <div className="profileContainer">
            <div className="row" style={{marginTop: "5px"}}>
                <div className="col-10">
                    <h2 style={{float: "left"}}>Personal Info &nbsp;
                        <button style={{float: "right"}} className="btn btn-secondary btn-block rounded-pill"
                                onClick={goToEditProfile}>
                            <i className="bi bi-pencil-square"></i>
                        </button>
                    </h2>
                </div>
                <div className="col-2">
                    <i className="bi bi-bookmarks bookMarks" aria-hidden="true" onClick={goToBookMarks}></i>
                    <h6>Bookmarks</h6>
                </div>
            </div>



            <div class="row">
                <div class="col-md-4offset-4">
                    {file == undefined ? (
                        <img width="150px" height="150px" style={{ borderRadius: "50%" }} className="text-center" src={require(`../images/profile.png`)} />
                    ) : (
                        <img width="150px" height="150px" style={{ borderRadius: "50%" }} className="text-center" src={file} />
                    )}



                </div>
            </div>
            <br></br>
            <div class="row ">
                <div class="col-md-4offset-4 mt-10 imgUploadButton" style={{ height: "30px" }}>
                    <button type="button" class="btn btn-primary btn-block rounded-pill"> <input type="file" id="img" name="img" style={{ display: "none" }} class="hidden" onChange={handleChange} /> <label id="imgUpload" for="img"><i class="bi bi-camera"></i></label></button>
                </div>
            </div>

            <br />
            <Form>
                <div class="row">
                    <div class="col-md-6">
                        <Form.Group className="mb-3" controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control value={profile.firstName} type="text" />
                            <Form.Text value={profile.firstName} className="text-muted">

                            </Form.Text>
                        </Form.Group>
                    </div>

                    <div class="col-md-6">
                        <Form.Group className="mb-3" controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control value={profile.lastName} type="text" />
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>
                    </div>

                </div>
                <div class="row">

                    <div class="col-md-6">
                        <Form.Group className="mb-3 formValues" controlId="firstName">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control value={profile.gender} type="text" />
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>
                    </div>
                    <div class="col-md-6">
                        <Form.Group className="mb-3" controlId="date">
                            <Form.Label>Nick Name</Form.Label>
                            <Form.Control value={profile.nickname} type="text" />
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <Form.Group className="mb-3" controlId="date">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control value={profile.dateOfBirth} type="text" />
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>
                    </div>
                    <div class="col-md-6 ">
                        <Form.Group className="mb-3" controlId="date">
                            <Form.Label>Location</Form.Label>
                            <Form.Control value={profile.location} type="text" />
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>
                    </div>
                    <Location/>

                </div>
            </Form>


        </div>
    );
};

export default ProfileComponent;