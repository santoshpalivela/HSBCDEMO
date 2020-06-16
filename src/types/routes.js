import LoginPage from "../components/login/Login";

import { PostList } from "../components/posts/PostList";

import { PostDetails } from "../components/posts/PostDetails";
import  NotFound  from "../components/PageNotFound";

const routes = [
  {
    path: "/posts",
    component: PostList,
    isPrivateRoute: true,
  },
  {
    path: "/details/:id",
    component: PostDetails,
    isPrivateRoute: true,
  },
  {
    path: "/login",
    component: LoginPage,
    isPrivateRoute: false,
  },
  {
    path: "/",
    component: LoginPage,
    isPrivateRoute: false,
  },
  {
    path: "*",
    component: NotFound,
    isPrivateRoute: false,
  }
];

export default routes;
