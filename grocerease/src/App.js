import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Register } from "./components/Register";
import ForgotUsername from "./components/ForgotUsername";
import { GroceryList } from './components/GroceryList'
import { GroceryCard } from './components/GroceryCard'
import useLocalStorageState from 'use-local-storage-state'
import Homepage from "./components/Homepage";
import  Login from './components/login.js'
import Passwordreset from './components/ForgotPassword'


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
        <Route path='/lists'></Route>
        <Route path="/register" element={<Register setAuth={setAuth} />} />
        <Route path="/forgot_username" element={<ForgotUsername />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ForgotPassword" element={<Passwordreset />} />
      </Routes>
    </Router>
    
  );
}
    

export default App;