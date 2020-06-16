import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import axios from "axios";
import { Post } from "../../types";
import "../../scss/postdetails.scss";
import Loader from "react-loader-spinner";
import { toast } from "react-toastify";

interface Props extends RouteComponentProps {}
export const PostDetails: React.FC<Props> = (props: Props) => {
  const [details, setDetails] = useState<Post>({
    userId: 1,
    id: 0,
    title: "",
    body: "",
  });
  const [showloader, setShowLoader] = useState<boolean>(false);

  const handleGoBack = (): void => {
    props.history.push(`/posts`);
  };

  useEffect(() => {
    setShowLoader(true);
    if (
      props.match &&
      props.match.params &&
      props.match.params.hasOwnProperty("id")
    ) {
      let id = props.match.params["id"];
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(function (response) {
          setDetails(response.data);
          setShowLoader(false);
        })
        .catch(function (error) {
          toast.error(error.message);
          setShowLoader(false);
        });
    }
  }, []);
  return (
    <div className="container">
      <div>
        <button className="btn-goback" onClick={handleGoBack}>
          {" "}
          Go back{" "}
        </button>
      </div>
      <h2>Details</h2>
      {showloader ? (
        <div className="div-spinner">
          <Loader type="Oval" color="#000" height={100} width={100} />
        </div>
      ) : (
        <div>
          <div className="lbl-details">
            <span className="lbl-bold"> UserId : </span>
            <span>{details.userId}</span>
          </div>
          <div className="lbl-details">
            <span className="lbl-bold"> Id : </span>
            <span>{details.id}</span>
          </div>
          <div className="lbl-details">
            <span className="lbl-bold"> Title : </span>
            <span>{details.title}</span>
          </div>
          <div className="lbl-details">
            <span className="lbl-bold"> Body : </span>
            <span>{details.body}</span>
          </div>
        </div>
      )}
    </div>
  );
};
