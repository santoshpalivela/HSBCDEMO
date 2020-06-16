import React from "react";

import { shallow, mount, render, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PageNotFound from "../components/PageNotFound";
import renderer from "react-test-renderer";



configure({ adapter: new Adapter() });

describe("should render PostDetailsMounted without throwing an error", () => {

  
  const tree = renderer.create(<PageNotFound />).toJSON();
  expect(tree).toMatchSnapshot();

  

  const PageNotFoundWrapper = mount(
    <PageNotFound />
  );

  it("Find the  page not found component ", () => {
    expect(PageNotFoundWrapper.find(".container").exists()).toBe(true)

  });

  it('checking for the 404 text in the page ',()=>{
      expect (PageNotFoundWrapper.find('.display-1.d-block').exists()).toBe(true)
      expect(PageNotFoundWrapper.find('.display-1.d-block').text()).toEqual("404");
    //   console.log(notFoundDiv.text());  
  })





});
