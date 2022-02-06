import React from "react";
import Logo from "./Logo.svg";
import "./Error.css";

function Error(props) {
    return (
        <div id="error-page">
            <div class="error-page">
                <img id="logo" src={Logo} alt="logo"></img>
                <h1 id="header">Whoops!</h1>
                <div class="content">
                    <p class="error-message">{props.errorMessage}</p>
                    <p>You'd have to go back!</p>
                    <button>Go back</button>
                </div>
            </div>
        </div>
    );
};

Error.defaultProps = {
    errorMessage: "Something went wrong here :("
};


export default Error;
