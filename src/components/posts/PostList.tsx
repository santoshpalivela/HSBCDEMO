import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Post } from "../../types";
import { PostTile } from "./PostTile";
import axios from "axios";
import { toast } from "react-toastify";
import "../../scss/postlist.scss";

interface Props extends RouteComponentProps {}

export const PostList: React.FC<Props> = (props: Props) => {
  const [postList, setPostList] = useState<Post[]>([]);
  const [filteredList, setFilteredList] = useState<Post[]>([]);
  const [searhTerm, setSearchTerm] = useState<string>("");

  const onTileClick = (id: number) => {
    props.history.push(`/details/${id}`);
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const searhTerm = e.target.value;
    let filteredPosts;

    if (searhTerm === "") filteredPosts = postList;
    else
      filteredPosts = postList.filter(
        (item) =>
          item.title.indexOf(searhTerm) != -1 ||
          item.body.indexOf(searhTerm) != -1
      );

    setSearchTerm(searhTerm);
    setFilteredList(filteredPosts);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    props.history.push("/");
  };

  const fetchDelayedPosts = (sortedData: Post[], iteration: number): Post[] => {
//     if (searhTerm !== "") 
//     {
// debugger;
//       return [];
//     }
//     else
       return sortedData.slice(0, iteration + 1);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
           const sortedData = response.data.sort(function (a, b) {
          return b.id - a.id;
        });

        const itemsCount = sortedData.length;

        for (let i = 0; i < itemsCount-10; i++) {
          setTimeout(() => {
            const newData = fetchDelayedPosts(sortedData, i);
            
            if (newData.length > 0) {
              setPostList(newData);
              setFilteredList(newData);
            }
          }, i * 1000);
        }
      })
      .catch(function (error) {
           toast.error(error.message);
        });
  }, []);

  return (
    <div className="container">
      <div className="row search-bar">
        <button className="btn-logout" onClick={handleLogout}>
          Logout
        </button>
        <input
          className="txt-search"
          onChange={onSearch}
          placeholder="search"
        />
      </div>
      <div className="post-list-container">
        {filteredList && filteredList.length > 0 ? (
          filteredList.map((item ,index) => (
            <div
              key={item.id}
              onClick={() => {
                onTileClick(item.id);
              }}
              className="col-lg-4"
            >
              <PostTile {...item} />
            </div>
          ))
        ) : (
          <div className="no-data">No Records found </div>
        )}
      </div>
    </div>
  );
};
