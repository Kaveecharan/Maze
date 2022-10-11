import { BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import WelcomePage from './Pages/WelcomePage/WelcomePage';
import HomePage from './Pages/HomePage/HomePage';
import AdminPage from './Pages/AdminPage/AdminPage';
import UserPage from './Pages/AdminPage/UserPage';
import Error from './Pages/Error/Error';
import { useSelector } from "react-redux";

const App=()=> {
  const userId  = useSelector((state) => state.currentUser?._id)
  
  return (<>
  <Router>
    <Routes>
      <Route path='/' element={ userId ? <Navigate to={`/${userId}`}  /> : <WelcomePage/> }>
          <Route index element={<Login />} />
          <Route path="/signup" element={<Signup />} />
      </Route>
      <Route path={`/${userId}`} element={<HomePage />}/>
      <Route path='/user/:id' element={<UserPage />}/>
      <Route path='/users' element={<AdminPage />}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
  </Router>
  </>);
}

export default App;
