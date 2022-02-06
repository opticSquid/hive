import React from "react";
import Logo from "./Logo.svg";
import "./Error.css";
import { useNavigate } from "react-router-dom";

function Error(props) {
    const navigate = useNavigate();
    function handleClick(){
        navigate(-1);
    }
    return (
        <div id="error-page">
            <div className="error-page">
                <img id="logo" src={Logo} alt="logo"></img>
                <h1 id="header">Whoops!</h1>
                <div className="content">
                    <p className="error-message">{props.errorMessage}</p>
                    <p>You'd have to go back!</p>
                    <button onClick={handleClick}>Go back</button>
                </div>
            </div>
        </div>
    );
}

Error.defaultProps = {
    errorMessage: "Something went wrong here :(",
};

export default Error;
