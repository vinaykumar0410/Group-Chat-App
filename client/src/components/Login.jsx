import React, { useContext, useState } from "react";
import axios from "axios";
import { store } from "../App";
import { Navigate } from "react-router-dom";
import IMG from "../assets/chat-svgrepo-com (1).svg";
import { toast } from "react-toastify";

const Login = () => {
  const [token, setToken] = useContext(store);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:5000/login", data)
  //     .then(res => setToken(res.data.token));
  // };
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://chat-app-d4vf.onrender.com/login", data);
      setToken(response.data.token);
      toast.dismiss();
      toast.success("Login Successful..");
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

  if (token) {
    return <Navigate to="/myprofile" />;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 mt-md-5">
          <center>
            <form onSubmit={submitHandler} autoComplete="off">
              <h1 className="my-4">Login Here</h1>
              <input
                type="email"
                onChange={changeHandler}
                name="email"
                placeholder="Enter email"
                required
                style={{outline:"none"}}
                className="mb-3 p-md-2 py-1 px-2 rounded-2 border-1 w-75 text-primary fs-5 "
              />
              <br />
              <input
                type="password"
                onChange={changeHandler}
                name="password"
                placeholder="Enter password"
                required
                style={{outline:"none"}}
                className="mb-3 p-md-2 py-1 px-2 rounded-2 border-1 w-75 text-primary fs-5 "
              />
              <br />
              <input
                className="btn btn-lg btn-outline-primary mt-3 w-25"
                type="submit"
                onChange={changeHandler}
                value="Login"
              />
              <p className="mt-3 text-success">Forgot Password ? No Problem</p>
              <p className=" text-success">Create one more </p>
            </form>
          </center>
        </div>
        <div className="col-md-4 m-auto my-5">
          <img
            src={IMG}
            alt=""
            className="my-5 d-sm-block d-none"
            style={{ width: "400px", height: "400px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
