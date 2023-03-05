import React from 'react';
import ReactDOM  from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Error from './pages/Error';
import Layout from './pages/Layout';
import About from './pages/About';

export default function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='*' element={<Error />} />
        </Route>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
