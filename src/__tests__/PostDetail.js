import React from "react";

import { shallow, mount, render, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PostDetails} from "../components/posts/PostDetails";
import renderer from "react-test-renderer";



configure({ adapter: new Adapter() });

describe("should render PostDetailsMounted without throwing an error", () => {

  
  const tree = renderer.create(<PostDetails />).toJSON();
  expect(tree).toMatchSnapshot();

  const mockFn = jest.fn();

  const PostDetailsMounted = shallow(
    <PostDetails />
  );

  it("Find the  root of post details component ", () => {
    expect(PostDetailsMounted.find(".container").exists()).toBe(true)

  });

  it("Find the  Goback button  ", () => {
    expect(PostDetailsMounted.find(".btn-goback").exists()).toBe(true)

    // PostDetailsMounted.find(".btn-goback").simulate("click")
  });





});
