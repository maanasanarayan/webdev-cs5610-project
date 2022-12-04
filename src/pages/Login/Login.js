import React, { Component } from "react";

import Form from 'react-bootstrap/Form';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:4000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./userDetails";
        }

   
        
        else{ 
          if (data.error ==="User Not found"){
          alert("login failure USER NOT FOUND!!! plz register");}
          else
          alert("INVALID PASSWORD PLZ CHECK PASSWORD");
          window.location.reload();
        }
      });
  }
  render() { 
    return (
    <section style={{backgroundColor:"#9A616D"}} className="vh-100"  >
    <button className="btn btn-dark btn-md btn-block" onclick="location.href='index.html'" type="button">HOME</button>
    <div className="container py-5 h-100">
        <div class="row d-flex justify-content-center align-    items-center h-100">
            <div className="col col-xl-10">
                <div className="card" style={{borderRadius: "1rem"}}>
                    <div class="row g-0">
                        <div class="col-md-6 col-lg-5 d-none d-md-block">
                            <img src="../images/coin.jpg"
                                 alt="login form" className="img-fluid h-100" style={{borderRadius: "1rem 0 0 1rem"}} />
                        </div>
                        <div class="col-md-6 col-lg-7 d-flex align-items-center">
        <div class="card-body p-4 p-lg-5 text-black">
      <Form onSubmit={this.handleSubmit}>
      
      <div class="d-flex align-items-center mb-3 pb-1">
                                        <i class="fas fa-cubes fa-2x me-3" style={{color: "#D35400"}}></i>
                                        <span class="h1 fw-bold mb-0" style={{color: "#D35400"}}>NEUStockTrade</span>
                                    </div>

            <h5 class="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Sign into your account</h5>

        <div className="form-outline mb-4">
       
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        
          
            
          
          
        

        <div className="pt-1 mb-4">
        <button className="btn btn-primary btn-lg btn-block" type="submit">
            Submit
          </button>
          
        </div>
        <p class="mb-5 pb-lg-2" style={{color: "#393f81"}}>Don't have an account? 
          <a href="/sign-up">Sign Up</a>
        </p>
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
  }
}
