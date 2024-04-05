import React from "react";
import IMG from '../assets/chat-svgrepo-com.svg'
import { useNavigate } from "react-router-dom";
const LoadingPage = () => {
    const navigator = useNavigate()
    const handleStart = ()=>{
        navigator('/register')
    }
  return (
    <header className="container">
      <section className="row">
        <section className="col-md-6 text-center mt-md-5 mt-3">
          <h1 className="display-1 mt-md-5">👋🏻</h1>
          <h2 className="my-3">Hey Good to See You Here</h2>
          <p style={{letterSpacing:'1px',lineHeight:'2rem'}} className="my-md-3 mx-md-5 mx-2 ">
            Welcome to <span className="fw-bold text-primary">Talk2World!</span><br /> 🚀 Let's begin a journey of connection
            together. Whether you're here to catch up with friends, collaborate
            with colleagues, or meet new people, we're thrilled to have you on
            board. Get ready to dive into enriching conversations and create
            lasting memories. Happy chatting!
          </p>
          <button onClick={handleStart} className="text-center my-2 btn btn-lg btn-outline-primary">Get Started</button>
        </section>
        <section className="col-md-6 m-auto text-center mt-5 pt-5">
            <img src={IMG} className="img-fluid d-none d-sm-block m-auto" style={{width:'400px',height:'400px'}} alt="" />
        </section>
      </section>
    </header>
  );
};

export default LoadingPage;
