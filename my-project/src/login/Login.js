import React from "react";
import loginAPI from "./LoginAPI";
 
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            useName:"",
            password: "",
        };
    }
    
    changeValue = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
            changeByInput: true
        });
    }

    logIn = async () => {
       const response =  await loginAPI.logIn(this.state);
       if(response.status ===401) {

       } else if(response.status === 200) {
        sessionStorage.setItem("acessToken",JSON.stringify(response.data));
        this.props.changeLoggedStatus();
       }
    }

    render() {
        return <form className="container">
        <div class="form-outline my-4">
          <input type="text" id="form2Example1" class="form-control" name="useName" onChange={this.changeValue}/>
          <label class="form-label" for="form2Example1">User Name</label>
        </div>
        <div class="form-outline mb-4">
          <input type="password" id="form2Example2" class="form-control" name="password" onChange={this.changeValue} />
          <label class="form-label" for="form2Example2">Password</label>
        </div>
        <div class="row mb-4">
          <div class="col d-flex justify-content-center">
            
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
              <label class="form-check-label" for="form2Example31"> Remember me </label>
            </div>
          </div>
          <div class="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>
        <button type="button" class="btn btn-primary btn-block mb-4 w-100" onClick={this.logIn}>Sign in</button>
        <div class="text-center">
          <p>Not a member? <a href="#!">Register</a></p>
          <p>or sign up with:</p>
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-facebook-f"></i>
          </button>
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-google"></i>
          </button>
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-twitter"></i>
          </button>
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-github"></i>
          </button>
        </div>
      </form>
    }
}
export default Login