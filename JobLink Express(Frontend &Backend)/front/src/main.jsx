import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NavBar from './components/NavBar.jsx'
import Home from './pages/HomePage.jsx'
import SignIn from './pages/Sign.jsx'
import Temp from './pages/temp.jsx'
import Forme from './components/Form.jsx'
import { Provider } from 'react-redux'
import store from './components/Redux/Reducers/Store.js'
import CompanyNewsSubscription from './components/Visme.jsx'
import Add_Resume from './pages/UserSide/Add_Resume.jsx'
import Resume_Add from './pages/UserSide/Resume_Add.jsx'
import User_Applied_Jobs from './pages/UserSide/User_Applied_Jobs.jsx'
import AdminPanel from './pages/AdminSide/AdminPanel.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    {/* <AdminPanel/> */}
    </Provider>
  </React.StrictMode>,
)
