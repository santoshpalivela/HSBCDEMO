import React from "react";
import { shallow, mount, render, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Login from "../components/login/Login";
import renderer from "react-test-renderer";

configure({ adapter: new Adapter() });

describe("should render LoginForm without throwing an error", () => {

  
  
  const tree = renderer.create(<Login  />).toJSON();
  expect(tree).toMatchSnapshot();

  
  const LoginMounted = mount(
    <Login  />
  );

  it("Find the  render of Login page ", () => {
    expect(LoginMounted.find(".login-container").exists()).toBe(true)
  });


  it("Checking the header text of Login page ", () => {
        expect(LoginMounted.find(".card-header").text()).toEqual('Login');
  });
});
