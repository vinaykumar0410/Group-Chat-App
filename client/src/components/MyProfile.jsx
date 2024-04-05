import React, { useContext, useEffect, useState } from "react";
import { store } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";
import IMG from "../assets/connect-network-svgrepo-com.svg";
import { toast } from "react-toastify";

const MyProfile = () => {
  const [data, setData] = useState(null);
  const [token, setToken] = useContext(store);
  const navigate = useNavigate();
  const [allmsgs, setAllmsgs] = useState([]);
  const [newmsg, setNewmsg] = useState("");

  useEffect(() => {
    axios
      .get("https://chat-app-d4vf.onrender.com/myprofile", {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));

    axios
      .get("https://chat-app-d4vf.onrender.com/getmsg", {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => setAllmsgs(res.data))
      .catch((err) => console.log(err));
  }, []);
  if (!token) {
    navigate("/login");
    return null;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://chat-app-d4vf.onrender.com/addmsg",
        { text: newmsg },
        {
          headers: {
            "x-token": token,
          },
        }
      )
      .then((res) => {
        setAllmsgs(res.data);
        setNewmsg("");
        toast.success("message added..");
      })
      .catch((err) => {
        console.log(err);
        toast.warning("Something went wrong..");
      });
  };
  return (
    <div className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mt-3 position-fixed d-sm-block d-none">
            <p
              style={{ fontSize: "20px", letterSpacing: "3px" }}
              className="my-5 text-center text-light"
            >
              Hey there! Welcome to our chat group! Here, you can meet new
              people, share what you love, and find others who enjoy the same
              things. Whether you need advice, support, or just want to chat,
              this is the place for friendly conversations. Join us and be part
              of our fun community!
            </p>
            <img
              src={IMG}
              className="mx-5"
              style={{ width: "350px", height: "350px" }}
              alt=""
            />
          </div>
          <div className="col-md-5"></div>
          <div className="col-md-7 mt-5 text-light">
            {data && (
              <div className="m-2">
                {/* for small screen */}
                <span
                  style={{ letterSpacing: "5px", fontSize: "28px" }}
                  class="d-md-none d-block text-center"
                >
                  Hey 👋🏻 {data.username} <br />{" "}
                  <p
                    className="text-secondary text-center fw-bold my-3"
                    style={{ letterSpacing: "5px", fontSize: "20px" }}
                  >
                    Good to See Here
                  </p>
                </span>

                <span>
                  <button
                    className="btn btn-lg d-block m-auto d-md-none  btn-outline-danger "
                    onClick={() => {
                      setToken(null);
                      toast.success("Logout Successful");
                    }}
                  >
                    Logout
                  </button>
                </span>

                {/* for large screen */}
                <span class="h2 me-5 d-none d-md-inline">
                  Hey 👋🏻 {data.username} Good to See Here
                </span>

                <span
                  className="btn btn-lg d-none d-md-block w-25 my-3 btn-outline-info "
                  style={{ letterSpacing: "3px" }}
                >
                  {data.username}
                </span>
                <span>
                  <button
                    className="btn btn-lg d-none d-md-block btn-outline-danger "
                    onClick={() => {
                      setToken(null);
                      toast("Logout Successful");
                    }}
                  >
                    Logout
                  </button>
                </span>

                <form onSubmit={submitHandler}>
                  <input
                    type="text"
                    name="msg"
                    placeholder="Enter a message"
                    value={newmsg}
                    style={{ letterSpacing: "2px" }}
                    className="btn btn-lg bg-dark text-light w-100 md-mt-5 my-3 me-2  btn-outline-primary"
                    onChange={(e) => setNewmsg(e.target.value)}
                  />
                  <input
                    type="submit"
                    value="send message"
                    className="btn btn-lg d-block m-auto md-mt-5 btn-outline-success"
                  />
                </form>
                <br />
                {allmsgs.length >= 1 ? (
                  allmsgs.map((msg) => {
                    const { text, username, index, date } = msg;
                    return (
                      <article key={index} className="border rounded-4 my-4">
                        <h3 className="position-relative ms-3 mt-2 md-my-2">
                          <span
                            className="text-info fs-4"
                            style={{ letterSpacing: "2px" }}
                          >
                            {username.charAt(0).toUpperCase() +
                              username.slice(1)}
                          </span>{" "}
                          <Moment
                            className="position-absolute text-secondary md-mt-3 md-mt-4 me-2 md-me-3 top-0 end-0 "
                            style={{ fontSize: "12px" }}
                          >
                            {date}
                          </Moment>
                        </h3>
                        <hr />
                        <p
                          className="ms-3 me-3 "
                          style={{ letterSpacing: "1px" }}
                        >
                          {text}
                        </p>
                      </article>
                    );
                  })
                ) : (
                  <h1>Messages Loading...</h1>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
