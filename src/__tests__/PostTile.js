import React from "react";

import { shallow, mount, render, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PostTile} from "../components/posts/PostTile";
import renderer from "react-test-renderer";



configure({ adapter: new Adapter() });

describe("should render PostTile without throwing an error", () => {

  const tileInfo = { userId: "100", title: "at nam consequatur ea labore ea harum" };

  const tree = renderer.create(<PostTile {...tileInfo} />).toJSON();
  expect(tree).toMatchSnapshot();

  const PostTileMounted = shallow(
    <PostTile {...tileInfo} />
  );

  it("Find the  render of Post tile component ", () => {
    expect(PostTileMounted.find(".tile-card").exists()).toBe(true)

  });


  it("Assert the userid value ", () => {
      const wrapper=PostTileMounted.find(".userid-val");
      expect(wrapper.exists()).toBe(true);
        expect(wrapper.text()).toEqual("100");

  });

  
  it("Assert the title value ", () => {
    const wrapper=PostTileMounted.find(".title-val");
    expect(wrapper.exists()).toBe(true);
      expect(wrapper.text()).toEqual("at nam consequatur ea labore ea harum");

});


});
