import React, { Component, useState } from "react";



export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      address:"",
      phonenumber:"",
      dob:"",
      gender:"",
      role:"",
      confirmpassword:"",
      error:"",
      };
     
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
   
  
  handleSubmit(e) {
    
    e.preventDefault();
    const { fname, lname, email, password,address,phonenumber,dob,gender,role,confirmpassword,error} = this.state;
    console.log(fname, lname, email, password,address,phonenumber,dob,gender,role,confirmpassword,error);
    if (password !== confirmpassword) {
    alert("Passwords don't match");
    }
    else{
    fetch("http://localhost:4000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        email,
        lname,
        password,
        address,
        phonenumber,
        dob,
        gender,
        role,
        }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("CONGRATS YOU ARE SUCCESSFULLY REGISTERED SIGNIN NOW");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./sign-in";
          }
        else{
          alert("USER ALREADY EXISTS USE DIFFERENT EMAIL ID");
          window.location.href = "./sign-up";
        }
      
      });
    }
  }
  
  render() {
  const {gender,role,error} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
      <section className="h-100 bg-dark">
      <button className="btn btn-warning btn-md btn-block" onclick="location.href='index.html'" type="button">HOME</button>
      <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col">
                  <div className="card card-registration my-4">
                      <div className="row g-0">
                          <div className="col-xl-6 d-none d-xl-block">
                              <img src="../images/how-to-save-money.jpg"
                                   alt="howtosave" class="img-fluid h-100"
                                   style={{borderTopLeftRadius:".25rem",borderBottomLeftRadius:".25rem;" }}/>
                          </div>
                          
      
      <div className="col-xl-6">
                              <div className="card-body p-md-5 text-black">
                                  <h3 className="mb-5 text-uppercase">Registration Form</h3>

        
      
<div className="row">

<div className="row">
    <div class="col-md-6 mb-4">
        <div class="form-outline">
          <label>First name</label>
          <input
           required="yes"
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e) => this.setState({ fname: e.target.value })}
          />
        </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="form-outline">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            onChange={(e) => this.setState({ lname: e.target.value })}
          />
        </div>
      </div>
      </div>

          <div className="form-outline">
        
          <label>Email address</label>
          <input
            required="yes"
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>
        

       
          <div className="form-outline">
          <label className="form-label" for="address">Address</label>
            <input type="text" id="address" className="form-control form-control-lg" onChange={(e) => this.setState({ address: e.target.value })} />
             
              </div>
              
            
                
    <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
    <h6 className="mb-0 me-4">Gender: </h6>
    
<div class="form-check form-check-inline mb-0 me-4">
    <input class="form-check-input" type="radio" name="gender" id="femalegender"
           value="female"
           required
           checked= {gender==="female"} 
           onChange={(e) => this.setState({ gender: e.target.value })}/>
    <label class="form-check-label" for="femalegender">Female</label>
</div>

<div class="form-check form-check-inline mb-0 me-4">
    <input class="form-check-input" type="radio" name="gender" id="malegender"
           value="male"
           checked= {gender==="male"} 
           onChange={(e) => this.setState({ gender: e.target.value }) }/>
    <label class="form-check-label" for="maleGender">Male</label>
</div>

<div class="form-check form-check-inline mb-0">
    <input class="form-check-input" type="radio" name="gender" id="othergender"
           value="other"
           checked= {gender==="other"} 
           onChange={(e) => this.setState({ gender: e.target.value }) }/>
    <label class="form-check-label" for="othergender">Other</label>
</div>

</div>

 

<div className="form-outline">

<input type="date" id="dob" class="form-control form-control-lg" required="yes" onChange={(e) => this.setState({ dob: e.target.value })} />
<label class="form-label" for="dob">DOB</label>
</div>




<div className="form-outline">


<input type="tel" id="number" placeholder="012-345-6789" class="form-control form-control-lg" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required="yes" onChange={(e) => this.setState({ phonenumber: e.target.value })}/>
<label className="form-label" for="number">Phone Number</label>
</div>

<div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

<h6 className="mb-0 me-4">Role: </h6>

<div className="form-check form-check-inline mb-0 me-4">
    <input required className="form-check-input" type="radio" name="role" id="admin"
           value="admin"
           checked= {role==="admin"} 
           onChange={(e) => this.setState({ role: e.target.value }) }/> 
    <label class="form-check-label" for="admin">Admin</label>
</div>

<div className="form-check form-check-inline mb-0 me-4">
    <input  className="form-check-input" type="radio" name="role" id="trader"
           value="trader"
           checked= {role==="trader"} 
           onChange={(e) => this.setState({ role: e.target.value }) }/> 
    <label class="form-check-label" for="trader">StockTrader</label>
</div>

<div className="form-check form-check-inline mb-0">
    <input class="form-check-input" type="radio" name="role" id="industry"
           value="Industry"
           checked= {role==="Industry"} 
           onChange={(e) => this.setState({ role: e.target.value }) }/> 
    <label class="form-check-label" for="Industry">Industry</label>
</div>
  </div>                                 
                                      
                                
                                
                                

        


		

		

          <div className="form-outline">
        
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            required="yes"
            placeholder="Enter password"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>
        

        
          <div className="form-outline">
          <label className="form-label" for="confirmpassword">Confirm Password</label>
                                        <input type="password" id="confirmpassword" class="form-control form-control-lg"
                                        onChange={(e) => this.setState({ confirmpassword: e.target.value })} required="yes"
                                        />
                                       
        
        </div>
        

        <div className="d-flex justify-content-end pt-3"> 
        <div className="d-grid">
        
          <button type="submit" className="btn btn-warning btn-md ms-2">
          Submit form
          </button>
        </div>
        </div>


       
        
        <div> <p class="mb-5 pb-lg-2" style={{color: "#393f81"}}>Already have an account? <a href="/sign-in"
                                    style={{color: "#393f81"}}>Login click here</a></p> </div> 
                            
                            {error && <div style={{width: "370",
	padding: "15px",
	margin: "5px 0",
	fontSize: "14px",
	backgroundColor: "#f34646",
	color: "white",
	borderRadius: "5px",
	textAlign: "center"}}>{error}</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</section>
</form>
    );
  }
}



