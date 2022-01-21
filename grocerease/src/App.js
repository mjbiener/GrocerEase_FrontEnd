import  GroceryList  from './components/GroceryList'
import InputField  from './components/ListForm'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Register } from "./components/Register";
import ForgotUsername from "./components/ForgotUsername";
import useLocalStorageState from 'use-local-storage-state'
import Homepage from "./components/Homepage";
import Mainpage from "./components/Mainpage";
import Login from './components/Login.js'
import ForgotPassword from './components/ForgotPassword'



export default function App() {
  const [token, setToken] = useLocalStorageState('grocereaseAuthToken', null)
  const [username, setUsername] = useLocalStorageState('grocereaseUsername', '')

  function setAuth(username, token) {
    setUsername(username)
    setToken(token)
  }

  const isLoggedIn = username && token

  return (
    <Router>
      <Routes>
        <Route path='/' element={ isLoggedIn ? <GroceryList/> : <Homepage />}></Route>
        <Route path='/lists' element= {<Mainpage />} />
        <Route path='/create_list' element= {<InputField />} />
        <Route path="/register" element={<Register setAuth={setAuth} />} />
        <Route path="/forgot_username" element={<ForgotUsername />} />
        <Route path='logout' />
        <Route path="/login" element={<Login setAuth={setAuth} isLoggedIn={isLoggedIn}/>} />
        <Route path="/forgotPassword" element={<ForgotPassword />}/>
        <Route path="/saved_list" />
        <Route path="/go_shopping" />
        <Route path="/unlisted_item" />
      </Routes>
    </Router>
    
  );
}
    

