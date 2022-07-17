import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import PostPage from "./pages/PostPage/PostPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import SearchPage from "./pages/SearchPage/SearchPage";


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/change-password">
            <ChangePassword />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/history">
            <HistoryPage />
          </Route>
          <Route path="/detail/:slug">
            <DetailPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/post">
            <PostPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
