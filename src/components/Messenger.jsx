import React from "react";
import { useContext } from "react";
import LoginDialog from "./account/LoginDialog";
import { AppBar, Box, Toolbar, styled } from "@mui/material";
import ChatDialog from './chat/ChatDialog';
import { AccountContext } from "../context/AccountProvider";
import "../components/svgStyle.css";
const SvgLog = styled("svg")`
  position: absolute;
  z-index: 25;
  left: -20px;
  top: -50px;
`;

const Component = styled(Box)`
  height: 100vh;
  background: #111b21;
  z-index: 5;
`;

const Header = styled(AppBar)`
  background-color: #0e1215;
  height: 100vh;
  box-shadow: none;
  z-index:1;
`;

const LoginHeader = styled(AppBar)`
  background-color:#111b21;
  height: 100vh;
  box-shadow: none;
  position: absolute;
  z-index: 1;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);


  return (
    <>
    <Component>
      {account ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <ChatDialog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialog />

         
          <SvgLog
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 409.6 409.6"
            version="1.1"
          >
            <path
              d="M409.602 341.336c0 37.7-30.567 68.266-68.266 68.266-37.703 0-68.266-30.567-68.266-68.266 0-37.703 30.563-68.266 68.266-68.266 37.7 0 68.266 30.563 68.266 68.266zM324.27 179.2c0 32.991-26.743 59.734-59.735 59.734-32.992 0-59.734-26.743-59.734-59.735 0-32.988 26.742-59.734 59.734-59.734 32.992 0 59.735 26.746 59.735 59.734zm-119.47 128c0 56.554-45.847 102.402-102.402 102.402C45.848 409.602 0 363.754 0 307.199c0-56.554 45.848-102.398 102.398-102.398 56.555 0 102.403 45.844 102.403 102.398zM170.672 85.336c0 47.129-38.207 85.336-85.336 85.336S0 132.465 0 85.336 38.207 0 85.336 0s85.336 38.207 85.336 85.336zM409.602 51.2c0 28.277-22.926 51.198-51.204 51.198-28.277 0-51.199-22.921-51.199-51.199C307.2 22.922 330.121 0 358.4 0c28.277 0 51.203 22.922 51.203 51.2zm-17.071 170.663c0 9.426-7.64 17.067-17.066 17.067-9.426 0-17.067-7.64-17.067-17.067 0-9.422 7.641-17.062 17.067-17.062s17.066 7.64 17.066 17.062zM264.535 59.734c0 14.141-11.46 25.602-25.601 25.602-14.137 0-25.598-11.461-25.598-25.602 0-14.136 11.46-25.597 25.598-25.597 14.14 0 25.601 11.46 25.601 25.597zm0 0"
              fill="rgba(37, 195, 180, 1)"
            ></path>
          </SvgLog>

          
          <div className="container">
            <button className="whatsapp-button">Log In </button>

            <button className="whatsapp-button">Sign Up</button>
          </div>
        </>
      )}
    </Component>
    <div className="ocean">
      <div className="wave"></div>
      <div className="wave"></div>
    </div>
          </>
          
  );
};

export default Messenger;
