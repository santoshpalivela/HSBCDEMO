import LoginPage from "../components/login/Login";

import { PostList } from "../components/posts/PostList";

import { PostDetails } from "../components/posts/PostDetails";
import  NotFound  from "../components/PageNotFound";
import {Route} from ".";
const routes:Route[] = [
  {
    path: "/posts",
    component: PostList,
    isPrivateRoute: true,
    exact:true
  },
  {
    path: "/details/:id",
    component: PostDetails,
    isPrivateRoute: true,
    exact:true
  },
  {
    path: "/login",
    component: LoginPage,
    isPrivateRoute: false,
    exact:true
  },
  {
    path: "/",
    component: LoginPage,
    isPrivateRoute: false,
    exact:true
  },
  {
    path: "*",
    component: NotFound,
    isPrivateRoute: false,
    exact:false
  }
];

export default routes;
