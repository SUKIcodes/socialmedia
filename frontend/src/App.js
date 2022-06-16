import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { loadUser } from "./Actions/User";
import Account from "./Components/Account/Account";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import NewPost from "./Components/NewPost/NewPost";
import Register from "./Components/Register/Register";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import Search from "./Components/Search/Search";
import UpdatePassword from "./Components/UpdatePassword/UpdatePassword";
import UpdateProfile from "./Components/UpdateProfile/UpdateProfile";
import UserProfile from "./Components/UserProfile/UserProfile";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <BrowserRouter>
      {isAuthenticated && <Header />}
      <Switch>
        {isAuthenticated ? (
          <Route path="/" exact>
            <Home />
          </Route>
        ) : (
          <Route path="/" exact>
            <Login />
          </Route>
        )}
        {isAuthenticated ? (
          <Route path="/account" exact>
            <Account />
          </Route>
        ) : (
          <Route path="/" exact>
            <Login />
          </Route>
        )}
        {isAuthenticated ? (
          <Route path="/newpost" exact>
            <NewPost />
          </Route>
        ) : (
          <Route path="/" exact>
            <Login />
          </Route>
        )}
        {isAuthenticated ? (
          <Route path="/account" exact>
            <Account />
          </Route>
        ) : (
          <Route path="/register" exact>
            <Register />
          </Route>
        )}
        {isAuthenticated ? (
          <Route path="/update/profile" exact>
            <UpdateProfile />
          </Route>
        ) : (
          <Route path="/" exact>
            <Login />
          </Route>
        )}
        {isAuthenticated ? (
          <Route path="/update/password" exact>
            <UpdatePassword />
          </Route>
        ) : (
          <Route path="/" exact>
            <Login />
          </Route>
        )}
        {isAuthenticated ? (
          <Route path="/update/password" exact>
            <UpdatePassword />
          </Route>
        ) : (
          <Route path="/forgot/password" exact>
            <ForgotPassword />
          </Route>
        )}
        {isAuthenticated ? (
          <Route path="/update/password" exact>
            <UpdatePassword />
          </Route>
        ) : (
          <Route path="/password/reset/:token" exact>
            <ResetPassword />
          </Route>
        )}
        {isAuthenticated ? (
          <Route path="/user/:id" exact>
            <UserProfile />
          </Route>
        ) : (
          <Route path="/" exact>
            <Login />
          </Route>
        )}
        <Route path="/search" exact>
          <Search />
        </Route>
        <Route path="*" exact>
          {<h1>Page Not Found</h1>}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
