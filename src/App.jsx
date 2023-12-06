import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';

const Profile = () => {
  return (
    <h2>Это страница профиля</h2>
  )
}

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <div className="nav flex-column nav-pills">
            <NavLink className="nav-link" to="home">
              Главная
            </NavLink>
            <NavLink className="nav-link" to="profile">
              Профиль
            </NavLink>
            <NavLink className="nav-link" to="messages">
              Сообщения
            </NavLink>
            <NavLink className="nav-link" to="settings">
              Настройки
            </NavLink>
          </div>
        </div>
        <div className="col-9">
          <Routes>
            <Route path='/profile' element={<Profile />}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;
