import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { Profile } from "./components/Profile";
import { Friends } from "./components/Friends";
import { Settings } from "./components/Settings";

function App(props) {

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-3">
          <div className="nav flex-column nav-pills">
            <NavLink className="nav-link" to="/">
              Главная
            </NavLink>
            <NavLink className="nav-link" to="profile">
              Профиль
            </NavLink>
            <NavLink className="nav-link" to="friends">
              Друзья
            </NavLink>
            <NavLink className="nav-link" to="settings">
              Настройки
            </NavLink>
          </div>
        </div>
        <div className="col-9">
          <Routes>
            <Route path="/" element={<h2>Выбирайте из меню</h2>} />
            <Route path="/profile/*" element={<Profile function={props.functions.key_getUser}/>} />
            <Route path="/friends" element={<Friends function={props.functions.key_getUsers}/>} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;