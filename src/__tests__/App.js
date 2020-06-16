import React from "react";

import { shallow, mount, render, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {App} from "../App";
import renderer from "react-test-renderer";



configure({ adapter: new Adapter() });

describe("should render PostDetailsMounted without throwing an error", () => {

  
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();


  
  const AppWrapper = mount(
    <App />
  );

  it("testing the app component ",()=>
  {
    expect(AppWrapper.find(".login-container").exists()).toBe(true)
  })

});