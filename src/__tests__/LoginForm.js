import React from "react";
import { shallow, mount, render, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LoginForm from "../components/login/LoginForm";
import renderer from "react-test-renderer";

configure({ adapter: new Adapter() });

describe("should render LoginForm without throwing an error", () => {

  const loginInfo = { login: "", password: "" };

  const tree = renderer.create(<LoginForm loginInfo={loginInfo} />).toJSON();
  expect(tree).toMatchSnapshot();

  const mockFn = jest.fn();
  const LoginFormMounted = shallow(
    <LoginForm loginInfo={loginInfo} onLogin={mockFn} onUpdateField={mockFn} />
  );

  it("Find the  render of Login form ", () => {
    expect(LoginFormMounted.find(".login-form").exists()).toBe(true)
  });

  it("Find the  render of username test case ", () => {
    expect(LoginFormMounted.find("#username").exists()).toBe(true);
    
  });

  it("testing text change on the usename filed", () => { 
      const username="admin";   
      
    LoginFormMounted.find("#username").simulate("change", {
      target: { value: username },
    });
    expect(mockFn.mock.calls[0][0]).toBe("login");
    expect(mockFn.mock.calls[0][1]).toBe(username);
  });

  it("Find the  render of password field ", () => {
    expect(LoginFormMounted.find("#password").exists()).toBe(true);
    
  });

  it("testing text change on the password filed", () => {    
    const password="Admin123";
    LoginFormMounted.find("#password").simulate("change", {
      target: { value: password },
    });
    expect(mockFn.mock.calls[1][0]).toBe("password");
    expect(mockFn.mock.calls[1][1]).toBe(password);
  });


  it("Find the  render of submit Button ", () => {
    expect(LoginFormMounted.find("#btnSubmit").exists()).toBe(true);
    
  });

  it("clicking the submit button", () => {    
    LoginFormMounted.find("#btnSubmit").simulate("click");

    expect(JSON.stringify(mockFn.mock.calls.length)).toEqual("3");
    
  });

  
});
