import { React, useState, useEffect } from "react";
import "./index.css";
import Form from "react-bootstrap/Form";


const ProfileComponentAdmin = () => {
  
  return (
    <section className="bg-light">
    <div className="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
          <div className="card" style={{ borderRadius: "1rem" }}>
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <img
                  src="../images/th.jpeg"
                  alt="login form"
                  className="img-fluid h-100"
                  style={{ borderRadius: "1rem 0 0 1rem" }}
                />
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">
                  <Form>
                    <h3 className="mb-3 text-uppercase">USER STASTICS</h3>

                    <div className="form-outline mb-4">
                    <Form.Group className="mb-3" controlId="users">
                      <Form.Label>TOTAL USERS</Form.Label>
                         <Form.Control
                         // value={address.address}
                         type="text"
                         //  disabled={isDisabled}
                         // onChange={addressChangeHandler}
                         />
                        <Form.Text className="text-muted"></Form.Text>
                        </Form.Group>
                    </div>

                    <div className="form-outline mb-4">
                    <Form.Group className="mb-3" controlId="stocks">
                      <Form.Label>TOTAL STOCKS</Form.Label>
                         <Form.Control
                         // value={address.address}
                         type="text"
                         //  disabled={isDisabled}
                         // onChange={addressChangeHandler}
                         />
                        <Form.Text className="text-muted"></Form.Text>
                        </Form.Group>
                    </div>

                    
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default ProfileComponentAdmin;