import React from "react";
import {Post} from "../../types";
// import "../../scss/posttile.scss";

import "../../scss/posttile.scss"
export const PostTile:React.FC<Post>=({userId,title}:Post)=>{
   
    return (
    <div className="tile-card">
        
        <div className="lbl-userid">
            <span >UserId:</span>
            <span className="userid-val" >{userId}</span>

        </div>
        <div className="lbl-title">
            <span>Title:</span>
            <span className="title-val">{title}</span>
        </div>
    </div>
    );
    }