import * as React from "react";
import { LoginEntity } from "../../types/index";

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';



interface PropsForm {
  onLogin: () => void;
  onUpdateField: (name: string, value: any) => void;
  loginInfo: LoginEntity;
}


  const LoginForm = (props: PropsForm) => {

  const { onLogin, onUpdateField, loginInfo } = props;


  const onTexFieldChange = fieldId => e => {
    onUpdateField(fieldId, e.target.value);
  };

  return (
    <div className="">
      
    <Form className="login-form">
      <FormGroup>
        <Label for="exampleEmail">Username</Label>
        <Input type="email" name="username" id="username" placeholder="Username" 
        value={loginInfo.login}
        onChange={onTexFieldChange("login")}/>
      </FormGroup>
      <FormGroup>
        <Label for="Password">Password</Label>
        <Input type="password" name="password" id="password" placeholder="Password" 
         value={loginInfo.password}
        onChange={onTexFieldChange("password")}
        />
      </FormGroup>
      
      <Button variant="contained" id="btnSubmit" className="btnSubmit" color="primary" onClick={onLogin}>Submit</Button>
    </Form>
    </div>
  );
};


export default LoginForm;