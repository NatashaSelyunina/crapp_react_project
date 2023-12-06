import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';

const Profile = () => {
  return (
    <h2>Это страница профиля</h2>
  )
}
const Messages = () => {
  return (
    <h2>Страница с сообщениями</h2>
  )
}
const Settings = () => {
  return (
    <h2>Это страница с настройками</h2>
  )
}

function App() {
  return (
    <div className="container mt-5">
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
            <Route path='/' element={<h2>Выбирайте из меню слева</h2>}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/messages' element={<Messages />}/>
            <Route path='/settings' element={<Settings />}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;
