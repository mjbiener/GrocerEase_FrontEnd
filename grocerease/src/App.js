import { CreateListForm } from './components/CreateListForm';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Register } from "./components/Register";
import ForgotUsername from "./components/ForgotUsername";
import useLocalStorageState from 'use-local-storage-state';
import Homepage from "./components/Homepage";
import Mainpage from "./components/Mainpage";
import Createlist from "./components/CreateList";
import Login from './components/Login.js';
import ForgotPassword from './components/ForgotPassword';
import Logout from './components/Logout';
import GroceryListDetail from './components/GroceryListDetail';
import SavedGroceryList from './components/SavedGroceryList';


export default function App() {
  const [token, setToken] = useLocalStorageState('grocereaseAuthToken', null)
  const [username, setUsername] = useLocalStorageState('grocereaseUsername', '')

  function setAuth(username, token) {
    setUsername(username)
    setToken(token)
  }

  function eraseAuth() {
    setUsername('')
    setToken('')
  }

  const isLoggedIn = username && token

  return (
    <Router>
      <Routes>
        <Route path='/' element={ isLoggedIn ? <Mainpage username={username} token={token} eraseAuth={eraseAuth}/> : <Homepage />}></Route>
        <Route path='/lists' element= {<Mainpage username={username} token={token} eraseAuth={eraseAuth}/>} />
        <Route path="/register" element= {isLoggedIn ? <Mainpage username={username} token={token} eraseAuth={eraseAuth}/> : <Register setAuth={setAuth} username={username} token={token} />} />
        <Route path="/forgot_username" element={<ForgotUsername />} />
        <Route path='/logout' element={<Logout username={username} eraseAuth={eraseAuth} token={token}/>}/>
        <Route path="/login" element={isLoggedIn ? <Mainpage username={username} token={token} eraseAuth={eraseAuth}/> : <Login setAuth={setAuth} isLoggedIn={isLoggedIn}/>} />
        <Route path="/forgotPassword" element={<ForgotPassword />}/>
        <Route path="/saved_list" element={<SavedGroceryList token={token} />} />
        <Route path="/go_shopping"/>
        <Route path="/unlisted_item" />
        <Route path="/create_list_detail" element={<GroceryListDetail token={token}/>} />
      </Routes>
    </Router>
    
  );

}
