import { useState } from "react";
import FacebookLogin from "react-facebook-login";
const Facebook = (props) => {
  const [isLoggedin, setIsloggedin] = useState(false);
//   const[userId,setuserId] = useState("");
//   const [name,setName] = useState("");
//   const [email,setEmail] = useState("");
//   const [picture,setPicture] = useState("");
  const componentClicked = () => console.log("clicked");
  const ResponseFacebook = (response) =>{
      console.log(response);
  }
  return <div>
      {
          (isLoggedin?(null):(
            <FacebookLogin
            appId="1370108836661564"
            autoLoad={true}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={ResponseFacebook} />
            ))
      }
      <h1>{ResponseFacebook()}</h1>
  </div>;
}

export default Facebook;
