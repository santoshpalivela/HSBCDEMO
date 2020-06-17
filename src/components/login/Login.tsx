import React, { useState } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import {toast} from "react-toastify";
import { LoginEntity } from "../../types";
import { isValidLogin } from "../../api/login";
import  LoginForm  from "./LoginForm";
import { Card, CardHeader, CardBody } from "reactstrap";

import "../../scss/login.scss";

interface Props extends RouteComponentProps {}
const initLoginInfo = { login: "", password: "" };

const Login: React.FC<Props> = (props: Props) => {
  const [loginInfo, setLoginInfo] = useState<LoginEntity>(initLoginInfo);

  

  const onLogin = () => {
    const validateLoginfo = isValidLogin(loginInfo);

    if (validateLoginfo.isValid) {
      sessionStorage.setItem("username", loginInfo.login);
      props.history.push("/posts");
    } else {
      toast.error(validateLoginfo.message);
      
  
    }
  };

  const onUpdateLoginField = (name, value) => {
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  return (
    <div className="login-container">
      <Card>
        <CardHeader>Login</CardHeader>
        <CardBody>
          <LoginForm
            onLogin={onLogin}
            onUpdateField={onUpdateLoginField}
            loginInfo={loginInfo}
          />
        </CardBody>
      </Card>
      
    </div>
  );
};


export default Login;
