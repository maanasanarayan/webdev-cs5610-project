import { React, useState, useEffect } from "react";
import "./index.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  changeFirstName,
  changeLastName,
  changeGender,
  changePhoneNumber,
  changeDateOfBirth,
  changeAddress,
} from "../reducers/user-reducer";

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
  const { user, loggedIn } = useSelector((state) => state.user);
  console.log(user);
  const navigate = useNavigate();
  let [isDisabled, setDisabled] = useState(true);
  function goToEditProfile(event) {
    // navigate('../editProfile');
    setDisabled(false);
  }

  function disableEditProfile(event) {
    // navigate('../editProfile');
    isDisabled = true;
  }

  let [fname, setFirstName] = useState({ fname: user.fname });
  const firstNameChangeHandler = (event) => {
    const newFirstName = {
      fname: event.target.value,
    };
    setFirstName(newFirstName);
  };

  let [lname, setLastName] = useState({ lname: user.lname });
  const lastNameChangeHandler = (event) => {
    const newLastName = {
      lname: event.target.value,
    };
    setLastName(newLastName);
  };
  let [phonenumber, setPhoneNumber] = useState({
    phonenumber: user.phonenumber,
  });
  const nickNameChangeHandler = (event) => {
    const newPhoneNumber = {
      phonenumber: event.target.value,
    };
    setPhoneNumber(newPhoneNumber);
  };

  let [gender, setGender] = useState({ gender: user.gender });
  const genderChangeHandler = (event) => {
    const newGender = {
      gender: event.target.value,
    };
    setGender(newGender);
  };

  let [dob, setDateOfBirth] = useState({ dob: user.dob });
  const dateOfBirthChangeHandler = (event) => {
    const newDateOfBirth = {
      dob: event.target.value,
    };
    setDateOfBirth(newDateOfBirth);
  };
  let [address, setAddress] = useState({ address: user.address });
  const locationChangeHandler = (event) => {
    const newAddress = {
      address: event.target.value,
    };
    setAddress(newAddress);
  };

  const dispatch = useDispatch();

  const saveProfile = (e) => {
    e.preventDefault();
    dispatch(changeFirstName(fname));
    dispatch(changeLastName(lname));
    dispatch(changePhoneNumber(phonenumber));
    dispatch(changeGender(gender));
    dispatch(changeDateOfBirth(dob));
    dispatch(changeAddress(address));
    disableEditProfile();
  };

  function goToBookMarks() {
    navigate("/bookmarks");
  }
  return (
    <div className="profileContainer container mt-2 mb-4">
      <div className="row" style={{ marginTop: "5px" }}>
        <div className="col-10">
          <h2 style={{ float: "left" }}>
            Personal Info &nbsp;
            <button
              style={{ float: "right" }}
              className="btn btn-secondary btn-block rounded-pill"
              onClick={goToEditProfile}
            >
              <i className="bi bi-pencil-square"></i>
            </button>
          </h2>
        </div>
        <div className="col-2">
          <i
            className="bi bi-bookmarks bookMarks"
            aria-hidden="true"
            onClick={goToBookMarks}
          ></i>
          <h6>Bookmarks</h6>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4offset-4">
          {file == undefined ? (
            <img
              width="150px"
              height="150px"
              style={{ borderRadius: "50%" }}
              className="text-center"
              src={require(`../images/profile.png`)}
            />
          ) : (
            <img
              width="150px"
              height="150px"
              style={{ borderRadius: "50%" }}
              className="text-center"
              src={file}
            />
          )}
        </div>
      </div>
      <br></br>
      <div class="row ">
        <div
          class="col-md-4offset-4 mt-10 imgUploadButton"
          style={{ height: "30px" }}
        >
          <button type="button" class="btn btn-primary btn-block rounded-pill">
            {" "}
            <input
              type="file"
              id="img"
              name="img"
              style={{ display: "none" }}
              class="hidden"
              onChange={handleChange}
            />{" "}
            <label id="imgUpload" for="img">
              <i class="bi bi-camera"></i>
            </label>
          </button>
        </div>
      </div>

      <br />
      <Form>
        <div class="row">
          <div class="col-md-6">
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                value={user.username}
                type="text"
                disabled={isDisabled}
              />
              <Form.Text
                value={user.username}
                className="text-muted"
              ></Form.Text>
            </Form.Group>
          </div>

          <div class="col-md-6">
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                value={user.lname}
                type="text"
                disabled={isDisabled}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <Form.Group className="mb-3 formValues" controlId="firstName">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                value={user.gender}
                type="text"
                disabled={isDisabled}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </div>
          <div class="col-md-6">
            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                value={user.phonenumber}
                type="text"
                disabled={isDisabled}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                value={user.dob}
                type="date"
                disabled={isDisabled}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </div>
          <div class="col-md-6 ">
            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Address</Form.Label>
              <Form.Control
                value={user.address}
                type="text"
                disabled={isDisabled}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 offset-4">
            <button
              className="btn btn-secondary btn-block rounded-pill"
              onClick={saveProfile}
            >
              Save
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ProfileComponent;
