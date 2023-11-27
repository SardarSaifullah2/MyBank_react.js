import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { Header } from './GlobalComponent/Header/header'
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Login } from './Pages/Login';
import { Footer } from './GlobalComponent/Footer/Footer';
import { Signup } from './Pages/Signup';
import { Servies } from './Pages/Servies';
import { Contact } from './Pages/Contact';
function App() {
  return (
    <div>
      <BrowserRouter>

        <Header></Header>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/services' element={<Servies/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/sign_up' element={<Signup/>} />
              <Route path='/contact' element={<Contact/>} />
            </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
