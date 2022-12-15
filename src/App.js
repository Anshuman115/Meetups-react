import { Route, Routes } from "react-router-dom";
// import MainNavigation from "./components/layout/MainNavigation";
import AllMeetUpPage from "./pages/AllMeetUps";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetups";
import Layout from "./components/layout/Layout";

function App() {
  return (
    //localhost:3000/path
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetUpPage />}></Route>
        <Route path="/new-meetup" element={<NewMeetupPage />}></Route>
        <Route path="/favorites" element={<FavoritesPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
