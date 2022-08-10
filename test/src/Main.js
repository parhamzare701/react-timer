import React from 'react';
import "./main.css";
import StopWatch from "./StopWatch";
import Timer from "./Timer"
import toast, { Toaster } from "react-hot-toast";

function Main() {
    const error = () => {
        toast.error("there is a problem with signup system");
    }
    return (
        <>
            <header class="header">
                <a href="Home" class="header__company--name">ParhamZare</a>
                <span class="header__linksbtn">
                    <a href="Home" class="header__links">Home</a>
                    <a href="About" class="header__links">About</a>
                    <a href="Contact" class="header__links">Contact us</a>
                    <button onClick={error} class="header__Singup--btn">Sing up</button>
                </span>
            </header>
            <Toaster />
            <StopWatch />
            {/* <Timer /> */}
        </>
    );
}

export default Main;