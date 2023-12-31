import './reset.css';
import {  Routes, Route  } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/home';
import AboutUs from './Components/AboutUs/aboutUs';
import Header from "./Components/Header/header";
import Cards from './Components/Cards/cards';
import Sign_up from './Components/Sign_up/sign_up';
import Item from './Components/Item/item';
import Log_in from './Components/Log_in/log_in';
import Profile from './Components/Pofile/profile';
import Add_item from './Components/Add_item/add_item';

function App() {

  const routes = [
    {path: '/aboutUs', Component: AboutUs},
    {path: '/cards', Component: Cards },

  ]

  return (
    <>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/sign_up" element={<Sign_up />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/log_in" element={<Log_in />} />
        <Route path="/me" element={<Profile />} />
        <Route path="/add_item" element={<Add_item />} />
      </Routes>
    </>
  );
}

export default App;