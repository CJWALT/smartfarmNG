import React, { useState } from "react";
import Button from "../components/Button";
import { FcGoogle } from "react-icons/fc";
import { useNavigate, Link } from "react-router-dom";

import axios from "axios";

const Login = () => {
  const [logDetails, setLogDetails] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://precision-farming.onrender.com/signin",
        logDetails,
        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bea`
          },
        }
      );
      
      const { accessToken } = res.data;
      localStorage.setItem("accessToken", accessToken);
      console.log(res.data)
      navigate("/dashboard");
    } catch (err) {
      alert("wrong credentials " + err);
    }
  };

  const handleChangeValue = (e) => {
    e.preventDefault();

    setLogDetails((logDetails) => ({
      ...logDetails,
      [e.target.name]: e.target.value,
    }));

    
  };
  return (
    <>
      <div className="overlay-setter z-0 flex h-[52rem] overflow-hidden">
        <div className="flex flex-col container space-y-[3rem] overflow-hidden z-20 w-full">
          <div className="mt-[3.5rem] ">
            <img src="./assets/img/logo.png" className="w-[17rem]" alt="logo" />
          </div>
          <div className="flex flex-col rounded-[.7rem] px-[2rem] py-[4.2rem] mx-auto w-[85%] scroll-width h-auto bg-[#021815]">
            <h4 className="leading-none text-[#ffff] text-[1.4rem] font-[Lato] font-semibold">
              SIGN IN
            </h4>

            <div className="mt-[2rem]">
              <form className="w-[100%]">
                <input
                  type="text"
                  value={logDetails.email}
                  onChange={handleChangeValue}
                  className="w-full mb-[.6rem] h-[3rem] rounded-[.4rem] border-[#adadad] "
                  name="email"
                  placeholder="Email or Phone Number"
                />
                <input
                  type="password"
                  value={logDetails.pwrd}
                  onChange={handleChangeValue}
                  className="w-full h-[3rem] rounded-[.4rem] border-[#adadad] "
                  name="password"
                  placeholder="Password"
                />
                <div className="mt-[.8rem] flex flex-row justify-between mb-[3rem]">
                  <span className="flex items-center gap-1">
                    <input type="checkbox" id="rememberMe" />
                    <label
                      htmlFor="rememberMe"
                      className="inline text-[.8rem] font-[Lato] font-medium text-[#fff]"
                    >
                      {" "}
                      Remember Me
                    </label>
                  </span>

                  <span>
                    <a
                      href="#"
                      className="text-[.8rem] font-[Lato] text-[#5BA69B] font-medium"
                    >
                      {" "}
                      Forgot Password?
                    </a>
                  </span>
                </div>
                <Button
                  logInClick={handleClick}
                  children="Sign In"
                  fntColor="text-white"
                  bgBtn="bg-[#065146]"
                />
                <div className="mt-[4rem]">
                  <p className="text-center mb-[2rem] text-[1rem] font-medium text-white font-[Lato] w-[100%]">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-[#065146]">
                      Sign Up
                    </Link>
                  </p>
                  <Button
                    icon={<FcGoogle size={30} />}
                    children="Login with Google"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
