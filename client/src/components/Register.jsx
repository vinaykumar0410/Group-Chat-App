import React, { useState } from "react";
import axios from "axios";
import IMG from "../assets/login-svgrepo-com.svg";
import { toast } from "react-toastify";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   axios.post("http://localhost:5000/register", data).then((res) => {
  //     alert(res.data);
  //     setData({
  //       username: "",
  //       email: "",
  //       password: "",
  //       confirmpassword: "",
  //     });
  //   });
  // };
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://chat-app-d4vf.onrender.com/register", data);
      toast.success(response.data.message); // Display success message
      setData({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
      });
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data); // Display the server error message
      } else if (error.request) {
        toast.error("No response received from the server");
      } else {
        toast.error("Error in sending the request");
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-md-5">
          <center>
            <img
              src={IMG}
              style={{ width: "300px", height: "300px" }}
              className="my-5 d-sm-block d-none"
              alt=""
            />
            <p style={{ letterSpacing: "2px" }} className="text-success my-1">
              Try to remember password
            </p>
            <p style={{ letterSpacing: "2px" }} className="text-success my-1">
              Guess why
            </p>
            <p style={{ letterSpacing: "2px" }} className="text-success my-1">
              Forgot password is Coming Soon..
            </p>
          </center>
        </div>
        <div className="col-md-5 mt-md-5">
          <center>
            <form onSubmit={submitHandler}>
              <h1 className="my-md-4 my-4">Register Here</h1>
              <input
                type="text"
                onChange={changeHandler}
                name="username"
                placeholder="Enter username"
                required
                value={data.username}
                style={{ letterSpacing: "2px",outline:"none" }}
                className="mb-3 p-md-2 py-1 px-2  rounded-2 border-1 w-75 text-primary fs-5 "
              />
              <br />
              <input
                type="email"
                onChange={changeHandler}
                name="email"
                placeholder="Enter email"
                required
                value={data.email}
                style={{ letterSpacing: "2px",outline:"none" }}
                className="mb-3 p-md-2 py-1 px-2 rounded-2 border-1 w-75 text-primary fs-5 "
              />
              <br />
              <input
                type="password"
                onChange={changeHandler}
                name="password"
                placeholder="Enter password"
                required
                value={data.password}
                style={{ letterSpacing: "2px",outline:"none" }}
                className="mb-3 p-md-2 py-1 px-2 rounded-2 border-1 w-75 text-primary fs-5 "
              />
              <br />
              <input
                type="password"
                onChange={changeHandler}
                name="confirmpassword"
                placeholder="Enter confirm password"
                required
                value={data.confirmpassword}
                style={{ letterSpacing: "2px",outline:"none" }}
                className="mb-3 p-md-2 py-1 px-2 rounded-2 border-1 w-75 text-primary fs-5"
              />
              <br />
              <input
                className="btn btn-lg btn-outline-primary mt-3"
                type="submit"
                onChange={changeHandler}
                value="Register"
              />
              <p
                style={{ letterSpacing: "2px" }}
                className="text-success mt-md-4 my-2"
              >
                please wait a while
              </p>
              <p style={{ letterSpacing: "2px" }} className="text-success my-1">
                it takes time
              </p>
              <p style={{ letterSpacing: "2px" }} className="text-success my-1">
                to get registered
              </p>
              <br />
            </form>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Register;
