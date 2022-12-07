import React, { useState } from "react";
import "./index.css"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { changeFirstName, changeLastName, changeGender, changeNickName, changeDateOfBirth, changeLocation } from "../reducers/profile-reducer";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const EditProfile = () => {

    const profile = useSelector(state => state.profile)

    const navigate = useNavigate();

    function goToProfile(event) {

        navigate('../profile');
    }

    let [firstName, setFirstName] = useState({ firstName: profile.firstName });
    const firstNameChangeHandler = (event) => {
        const newFirstName = {
            firstName: event.target.value
        }
        setFirstName(newFirstName);

    }

    let [lastName, setLastName] = useState({ lastName: profile.lastName });
    const lastNameChangeHandler = (event) => {
        const newLastName = {
            lastName: event.target.value
        }
        setLastName(newLastName);

    }
    let [nickName, setNickName] = useState({ nickName: profile.nickName });
    const nickNameChangeHandler = (event) => {
        const newNickName = {
            nickName: event.target.value
        }
        setNickName(newNickName);

    }

    let [gender, setGender] = useState({ gender: profile.gender });
    const genderChangeHandler = (event) => {
        const newGender = {
            gender: event.target.value
        }
        setGender(newGender);
    }

    let [dateOfBirth, setDateOfBirth] = useState({ dateOfBirth: profile.dateOfBirth });
    const dateOfBirthChangeHandler = (event) => {
        const newDateOfBirth = {
            dateOfBirth: event.target.value
        }
        setDateOfBirth(newDateOfBirth);

    }
    let [location, setLocation] = useState({ location: profile.location });
    const locationChangeHandler = (event) => {
        const newLocation = {
            location: event.target.value
        }
        setLocation(newLocation);

    }

    const dispatch = useDispatch();

    const saveProfile = () => {
        dispatch(changeFirstName(firstName));
        dispatch(changeLastName(lastName));
        dispatch(changeNickName(nickName));
        dispatch(changeGender(gender));
        dispatch(changeDateOfBirth(dateOfBirth));
        dispatch(changeLocation(location));
        goToProfile();
    }


    return (
        <div className="profileContainer">
            <h2>Edit Profile</h2>

            <div className="position-relative mb-2">
                <img width="48px" height="48px" className="position-absolute wd-nudge-up text-white logo_sideBar" src={require(`../images/profile.png`)} />
            </div>
            <br />


            <div className="row">
                <input className="col-12 form-control mb-2" placeholder="First Name" value={firstName.firstName} onChange={firstNameChangeHandler}></input>

                <input className="col-12 form-control mb-2" placeholder="Last Name" value={lastName.lastName} onChange={lastNameChangeHandler}></input>

                <input className="col-12 form-control mb-2" placeholder="Gender" value={gender.gender} onChange={genderChangeHandler}></input>
                <input className="col-12 form-control mb-2" placeholder="Nick Name" value={nickName.nickName} onChange={nickNameChangeHandler}></input>


                <input className="col-12 form-control mb-2" placeholder="Date of birth" value={dateOfBirth.dateOfBirth} onChange={dateOfBirthChangeHandler}></input>
                {/*<DatePicker className="col-12 form-control mb-2"  selected={dateOfBirth.dateOfBirth} onChange={dateOfBirthChangeHandler} />*/}

                <input className="col-12 form-control mb-2" placeholder="Location" value={location.location} onChange={locationChangeHandler}></input>

            </div>
            <button className="btn btn-primary btn-block rounded-pill" style={{ float: "right" }} onClick={saveProfile}>
                Save
            </button>



        </div>
    );
}

export default EditProfile;